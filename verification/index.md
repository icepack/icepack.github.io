<!--
.. title: Verification
.. slug: verification
.. date: 2025-04-10 11:11:07 UTC-07:00
.. tags: mathjax
.. category: 
.. link: 
.. description: 
.. type: text
.. hidetitle: True
-->

Under the hood, the main thing that icepack does is solve certain systems of nonlinear partial differential equations.
Solving nonlinear PDEs is error-prone, and there are lots of failure modes.
A *specification* error is where you coded up the wrong problem, but the solution procedure is correct.
For example, say you missed a factor of 2 in coding up the variational form of the Stokes equations.
You'll still get a solution of the Stokes equations but with a different viscosity than what you thought you were using.
An error of *solution*, on the other hand, is a failure to compute an accurate enough approximation to the field you're looking for.
For example, you made the mistake in what choice of finite elements to use for the Stokes equations.
The computed pressure fields have spurious oscillations that don't vanish in the limit of mesh refinement.

It is not possible to formally prove that a numerical solver for a certain problem is 100% correct.
What we can do is compare the results of the solver on test cases that are solvable analytically.
First, compute the mismatch between the numerical and analytical solutions using a range of mesh spacings or timesteps.
Then we do a log-log fit of the errors against the mesh size or timestep.
This fit gives an estimate the method's convergence rate.
The method seems to be working ok if the convergence rate matches that predicted by the theory.

We first have to compute analytically-solvable test cases.
Below, we describe in detail two exact solutions that we use for testing icepack.


### Ice shelves

The first test case we use is for ice shelves.
Floating ice shelves are simpler because there is no basal drag.
The momentum balance equation then has one fewer term.
Here we use a test case from the book by Greve and Blatter.

Here we aim to calculate the velocity of an ice shelf where the thickness is linearly-sloping from the inflow boundary to the terminus:
$$h = h\_0 - \delta h\cdot x / L.$$
We assume that the temperature is constant, there is no variation in the $y$ direction, and that we're given the inflow velocity $u\_0$.
The problem becomes 1-dimensional with these conditions.

The momentum balance equation for ice shelves is
$$\nabla\cdot hM - \frac{1}{2}\varrho g\nabla h^2 = 0$$
where $\varrho = \rho\_I(1 - \rho\_I/\rho\_W)$ is the reduced density of ice over seawater.
The boundary condition at the ice terminus is
$$hM\cdot\nu = \frac{1}{2}\varrho gh^2\nu.$$
For a 1D problem, the divergences and gradients are taken only with respect to $x$.
We can integrate this equation in $x$, apply the boundary condition, and divide by the ice thickness to get
$$M\_{xx} = \frac{1}{2}\varrho gh.$$
The off-diagonal terms of the membrane stress tensor are zero.
The $M\_{yy}$ entry is, perhaps surprisingly, not zero.
But it has no variation in $y$, so we don't need to compute it.

Next, we need to compute the strain rate tensor.
As a notational convenience, it's useful to introduce a dimensionless 4th-order tensor $\mathscr C$, which acts on the strain rate tensor like so:
$$\mathscr C\dot\varepsilon \equiv \frac{\dot\varepsilon + \text{tr}(\dot\varepsilon)I}{2}.$$
We can also use $\mathscr C$ to define norms on tensors, just like we can use symmetric positive-definite matrices to define norms on vectors:
$$|\dot\varepsilon|_{\mathscr C}^2 \equiv \dot\varepsilon : \mathscr C \dot\varepsilon = \frac{\dot\varepsilon : \dot\varepsilon + \text{tr}(\dot\varepsilon)^2}{2}.$$
You can think of this tensor $\mathscr C$ as playing a similar role for glacier flow as the elasticity tensor plays in the theory of linear elasticity.
Instead of relating the tensor structure of strain to stress (as in elasticity), it relates the tensor structure of strain rate to membrane stress.
But at an algebraic level it looks similar.

Now we're ready to compute the strain rate.
The constitutive law is
$$M = 2A^{-\frac{1}{n}}|\dot\varepsilon|\_{\mathscr C}^{\frac{1}{n} - 1}\mathscr C\dot\varepsilon$$
Only the $\dot\varepsilon_{xx}$ component should be non-zero.
We can then compute the norm of the strain rate:
$$|\dot\varepsilon|\_{\mathscr C} = |\dot\varepsilon_{xx}|$$
which then gives
$$M\_{xx} = 2A^{-\frac{1}{n}}(\dot\varepsilon_{xx})^{1 / n}.$$
Note the factor of 2 out front -- it's easy to make a mistake here.
Moving some terms around and taking the $n$th power gives
$$\dot\varepsilon\_{xx} = A(M\_{xx} / 2)^n = A\left(\frac{\varrho gh}{4}\right)^n.$$

Finally, remembering that $\dot\varepsilon\_{xx} = \partial\_xu\_x$, we can integrate the previous equation to obtain the velocity:
$$u\_x = u\_0 + \int\_0^x\dot\varepsilon\_{xx}(x')dx' = u\_0 + A\int\_0^x\left(\frac{\varrho g h(x')}{4}\right)^ndx'.$$
Note that the quantity $\varrho gh/4$ has units of pressure.
We'll now introduce this quantity explicitly as
$$P \equiv \frac{\varrho gh}{4}.$$
We'll also let $\delta P = \varrho g \delta h / 4$ be the change in "pressure" from the inflow to the outflow boundary.
If we now make the substitution using $P$ in the integral, then $dP = -\varrho g\cdot \delta h/4L\cdot dx' = -\delta P / L\cdot x'$ since we assumed that $h$ is linear in $x$.
We now find that
$$\int\_0^x \left(\frac{\varrho gh}{4}\right)^n dx = -\frac{L}{\delta P}\int\_{P(0)}^{P(x)}P^ndP = L\frac{P\_0^{n + 1} - P^{n + 1}}{(n + 1)\delta P}.$$
Putting everything together we get that
$$u\_x = u\_0 + LA\frac{P\_0^{n + 1} - P^{n + 1}}{(n + 1)\delta P}$$
where again $P = \varrho gh/4$.

I've chosen to write things in this way, despite having to introduce the intermediate "pressure" variable $P$, because it makes the units clearer.
The fluidity $A$ eats pressure${}^n$ and leaves a factor of inverse time; multiply all that by $L$ gives a velocity.

### Ice streams

The problem is more complicated when the ice can be grounded.
Now the momentum balance equation is
$$\nabla \cdot hM + \tau - \rho gh\nabla s = 0$$
and we can no longer reduce the order of the problem so easily.
We will once again assume that the inputs are linear:
$$h = h\_0 - \delta h\cdot x / L, \quad s = s\_0 - \delta s\cdot x / L.$$
But we won't be able to just pick constant values of the fluidity and friction coefficient and be able to compute a solution by hand.
Instead, we'll pick a constant value of the fluidity coefficient and synthesize some reasonable value of the ice velocity.
We'll then choose the friction coefficient to be whatever it needs to in order to guarantee that the velocity that we chose is a solution.
This is called the [method of manufactured solutions](https://mooseframework.inl.gov/python/mms.html).

The boundary condition in the grounded case is
$$hM\cdot\nu = \frac{1}{2}\left(\rho\_Igh^2 - \rho\_Wgd^2\right)\nu$$
where $d = s - h$ is the water depth at the terminus.
Although we can't reduce the order like we did in the floating case, we will still need to calculate the integral of the membrane stress divergence and the driving stress.
First, we'll compute the integral of the driving stress from an arbitrary point $x$ up to the glacier terminus $L$.
Since both $h$ and $s$ are linear in $x$,
$$\int\_x^L\rho\_Igh\nabla s\,dx' = -\rho\_Ig\frac{\delta s}{L}\int\_x^Lh\,dx' = \rho\_Ig\frac{\delta s}{\delta h}\cdot\frac{h(L)^2 - h(x)^2}{2}.$$
Now we can integrate the membrane stress divergence from $x$ to $L$ and use the boundary condition:
$$\int\_x^L \partial\_x(hM\_{xx})\,dx' = \frac{1}{2}\left\\{\rho\_Igh(L)^2 - \rho\_Wg(s(L) - h(L))^2\right\\} - h(x)M\_{xx}(x).$$
In order to make the problem analytically solvable, we need to start making more assumptions.

The membrane and basal stresses balance out gravitational driving.
The first assumption we'll make is that membrane stress divergence takes up a fraction $\beta$ of the gravitational driving.
Basal stress then takes up the remaining fraction $1 - \beta$.
We can combine this assumption with the last two equations to write
$$h(x)M\_{xx}(x) = \frac{1}{2}\left\\{\rho\_Igh(L)^2 - \rho\_Wg(s(L) - h(L))^2\right\\} - \beta\rho\_Ig\frac{\delta s}{\delta h}\cdot\frac{h(L)^2 - h(x)^2}{2}.$$
This looks like a bunch of terms that don't depend on $x$ + a constant multiple of $h(x)^2$.
Now if we make a specific choice of $\beta$ then we can wipe out all the constant terms:
$$\beta = \frac{\delta h}{\delta s}\cdot\frac{\rho\_Igh(L)^2 - \rho\_Wg(s(L) - h(L))^2}{\rho\_Igh(L)^2}.$$
If we go back and assume that the ice is floating, then $s = (1 - \rho\_I/\rho\_W)h$ and we get $\beta = 1$ as we expect.
When the terminal height is above flotation, we get a value of $\beta$ less than 1.

In getting rid of all the constant terms, we once again have the membrane stress equal to a constant multiple of the thickness:
$$M\_{xx} = \frac{\beta}{2}\frac{\delta s}{\delta h}\rho\_Igh.$$
Now we'll define a density-like variable
$$\varrho \equiv \beta\rho\_I\frac{\delta s}{\delta h}.$$
With this choice, we once again have that
$$M\_{xx} = \frac{1}{2}\varrho gh$$
like in the floating case, only with a different definition of $\varrho$.
Defining the pressure-like variable
$$P \equiv \frac{\varrho gh}{4}$$
as well as the inflow pressure $P\_0$ and pressure drop $\delta P$.
We arrive back at
$$u\_x = u\_0 + LA\frac{P\_0^{n + 1} - P^{n + 1}}{(n + 1)\delta P}$$
again by following the same steps as we did in the floating case.

We're not quite done yet -- we still need to prescribe the basal friction.
For now, we'll assume the Weertman sliding law:
$$\tau\_b = -C|u|^{\frac{1}{m} - 1}u.$$
We also assumed that the basal drag would take up a fraction $1 - \beta$ of the driving stress:
$$\tau\_b = -(1 - \beta)\tau\_d = (1 - \beta)\rho\_Igh\nabla s.$$
We have closed-form expressions for $u$, $h$, and $s$.
So in order to pick the basal friction coefficient $C$, we'll set the last two equations equal to each other:
$$C = (1 - \beta)\rho\_Igh\cdot\delta s / L / |u|^{1 / m}.$$
This choice of friction coefficient will make the choice of $u$ that we made above into an exact solution of the momentum balance equation.

The description above was for the Weertman sliding law.
We could also have used the regularized Coulomb sliding law or others.
If the solver works with more than one different flow or sliding law, that lends us more confidence that it's working correctly.

### Composite rheologies

You might want to go through this same exercise with rheologies other than the conventional Glen rheology.
For example, you might want a rheology with different exponents $n\_1$, $n\_2$ in different stress regimes.
A plausible form is
$$\dot\varepsilon = 2A\_1|M|\_{\mathscr A}^{n\_1 - 1}\mathscr A M + 2A\_2|M|\_{\mathscr A}^{n\_2 - 1}\mathscr A M$$
where $A\_1$ and $A\_2$ are two fluidity coefficients and $\mathscr A$ is the tensor inverse to $\mathscr C$.
You can compute explicitly that $\mathscr A$ acts on tensors like so:
$$\mathscr AM = \frac{M - \frac{1}{3}\text{tr}(M)I}{2}$$
which then defines the tensor norm
$$|M|_{\mathscr A}^2 = \frac{M : M - \frac{1}{3}\text{tr}(M)^2}{2}.$$
Continuing with the analogy to elasticity before, if $\mathscr C$ is like an elasticity tensor then $\mathscr A$ is like a compliance tensor.

Most of the derivations above still apply.
For example, we can in both cases make
$$M\_{xx} = \frac{1}{2}\varrho gh.$$
For ice shelves, $\varrho$ is the reduced density of ice over seawater, while for the grounded case we chose it to simplify the remaining algebra.

Here's where some of the differences start.
I didn't mention this before because it wasn't pertinent, but it will be now.
Forgetting the linear term for a moment, you can see from the constitutive law and the definition of $\mathscr A$ that $M\_{yy}$ is not zero.
It has no $y$-dependence, so it makes no contribution to the membrane stress divergence, but it is non-zero.
In order to make $\dot\varepsilon\_{yy}$ zero, we need that $M\_{yy} = M\_{xx} / 2$.
We need to know this in order to compute $|M|\_{\mathscr A}$ correctly:
$$|M|_{\mathscr A} = \frac{1}{2}M\_{xx}.$$
Now if we substitute this back into the constitutive relation and keep very careful track of some factors of two, we get
$$\dot\varepsilon\_{xx} = A\_1\left(\frac{M\_{xx}}{2}\right)^{n\_1} + A\_2\left(\frac{M\_{xx}}{2}\right)^{n\_2}.$$
Computing the velocity amounts to integrating this expression.

That leaves only the basal stress.
We assume again that
$$\tau = -(1 - \beta)\rho\_Igh\nabla s.$$
Let's make it weird and assume we also want to do some kind of composite sliding law
$$u = -K\_1|\tau\|^{m\_1 - 1}\tau - K\_2|\tau\|^{m\_2 - 1}\tau.$$
Knowing $u$ and $\tau$, we can pick $K\_1$ however like.
We then manufacture the other sliding coefficient $K\_2$.
