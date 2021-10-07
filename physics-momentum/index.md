<!--
.. title: Momentum
.. slug: physics-momentum
.. date: 2021-08-27 15:42:02 UTC-07:00
.. tags: mathjax
.. category:
.. link:
.. description:
.. type: text
.. hidetitle: True
-->

J.D. Forbes in 1848 was the first Western scientist to correctly identify viscous deformation as the reason why glaciers flow.
In his original paper on the subject, Forbes has a wonderful quote about this realization:

> There is something pleasing to the imagination in the unexpected analogies presented by a torrent of fiery lava and the icy stream of a glacier.

Both lava and ice flow can be described by the exact same mathematics, and that mathematics is the *Stokes equations.*

### The Stokes equations

The Stokes equations consist of three parts: a conservation law, a constitutive relation, and boundary conditions.
First, the *conservation law* states that the flux of stress across the boundary of a control volume $K$ cancels out exactly the body forces $f$:

$$\int_{\partial K}(\tau - pI)\cdot\nu\, ds + \int_Kf\, dx = 0.$$

The right-hand side is zero because we're assuming that the surface and body forces are roughly in balance and thus the acceleration that a fluid parcel experiences is negligible.
If we were to leave those terms in we would have the full Navier-Stokes equations.
When we apply the usual continuum mechanics arguments, we get a system of PDEs

$$\nabla\cdot\tau - \nabla p + f = 0.$$

To close this set of equations, we'll also need a *constitutive relation* between the deviatoric stress tensor and either the velocity or its gradient.
For a plain old viscous Newtonian fluid, the deviatoric stress and the strain rate tensor

$$\dot\varepsilon(u) \equiv \frac{1}{2}\left(\nabla u + \nabla u^\top\right)$$

are linearly proportional to each other.
But glacier ice is not a Newtonian fluid!
Glen and Nye showed through a series of laboratory experiments in the 1950s that ice is a *shear-thinning* material and that the strain rate is roughly a power-law function of stress:

$$\dot\varepsilon = A|\tau|^{n - 1}\tau$$

where $A$ is a temperature-dependent *rate factor*, $n \approx 3$ is the *flow law exponent*, and $|\tau|$ denotes the second invariant of a rank-2 tensor: $|\tau| \equiv \sqrt{\tau : \tau / 2}$.
The constitutive relation can be inverted to give an expression for the stress tensor in terms of the strain rate tensor, which again is the symmetrized gradient of the velocity.
By substituting this expression for the stress tensor into the conservation law, we arrive at a second-order quasilinear partial differential equation for the velocity field.

Finally, we have to know what conditions apply at the system boundaries.
At the ice surface, there is effectively zero stress:

$$(\tau - pI)\cdot\nu|_{z = s} = -p_0\nu$$

where $p_0$ is atmospheric pressure.
If we were explicitly modeling firn and snow, incorporating wind-blowing effects would be more of a problem.
At the ice base things get much more interesting because there are different boundary conditions in the normal and tangential directions.
In the normal direction, the ice velocity has to equal to the rate of basal melting:

$$u\cdot\nu|_{z = b} = \dot m.$$

In the tangential direction, frictional contact with the bed creates resistive stresses.
The relationship between resistive stresses and the ice velocity and other fields is the content of the *sliding law*.
One of the oldest proposed sliding laws, based on the theory of [*regelation*](https://en.wikipedia.org/wiki/Regelation), is due to work by Weertman in the 1960s.
Weertman sliding is a power-law relation between stress and sliding speed:

$$(\tau - pI)\cdot\nu|_{z = b} = -C|u|^{1/m - 1}u,$$

where $m$ is the *sliding exponent*.
In Weertman's theory, the sliding exponent is identical to the Glen flow law exponent $n$ because sliding occurs more through deformation within the ice.
The Weertman sliding law makes sense for glaciers flowing over hard beds, but several discoveries in the 1980s found that Antarctic ice streams more typically flow over soft, deformable sediments, with meltwater lubricating flow.
For these types of glaciers, sliding is more due to plastic failure within subglacial sediments.
Plastic sliding would imply that the basal shear stress is equal to the yield stress of the sediment regardless of the sliding speed, in which case the sliding exponent $m$ is equal to $\infty$.
The Schoof or regularized Coulomb friction law is a synthesis of the two types of sliding.

Rather than express the Stokes equations as one big nonlinear PDE, we assume in icepack that all of the diagnostic physics can be derived from an *action principle*.
The action principle states that the velocity and pressure that solve the Stokes equations are really also the critical point of a certain functional, called the action.
The action for the Stokes equations with the Weertman sliding law is

$$J = \int_\Omega\left(\frac{n}{n + 1}A^{-1/n}|\dot\varepsilon|^{1/n + 1} - p\nabla\cdot u - f\cdot u\right)dx + \frac{m}{m + 1}\int_{\Gamma_b}C|u|^{1/m + 1}ds.$$

We've found that expressing the diagnostic model through an action principle is advantageous because there are more and better numerical methods for solving constrained convex optimization problems than there are for general nonlinear systems of equations.
On top of that, an action principle is shorter to write down.


### Simplification

Nearly all terrestrial glacier flows have much wider horizontal than vertical extents.
By expanding the equations of motion in the aspect ratio $\delta = H/L$, it's possible to derive PDE systems that are much simpler than the Stokes equations.
Eliminating terms that scale like $\delta$, the vertical component of the momentum balance becomes

$$\frac{\partial}{\partial z}(\tau_{zz} - p) - \rho g = 0.$$

By integrating this equation in the vertical direction and using the fact that $\tau_{xx} + \tau_{yy} + \tau_{zz} = 0$, we can write the pressure as a function of the surface elevation and the horizontal components of the deviatoric stress tensor.
This leaves us with a 3D differential equation for the two horizontal components of the velocity.
The `HybridModel` class in icepack describes this system, known in the literature as either the *first-order* equations or the *Blatter-Pattyn* equations.
We can then depth-average them to arrive at a purely 2D system called the *shallow stream equations*.
To see all the details, you can consult the very excellent book by [Greve and Blatter](https://link.springer.com/book/10.1007/978-3-642-03415-2).
The `IceStream` class in icepack describes the depth-averaged system.

For completeness sake, we'll write down the action functional for the shallow stream equations.
Since the vertical component of the velocity and stress tensor has been eliminated, in 2D we have a new definition of the effective strain rate:

$$|\dot\varepsilon| \equiv \sqrt{\frac{\dot\varepsilon : \dot\varepsilon + \text{tr}(\dot\varepsilon)^2}{2}}.$$

For the full 3D velocity, the trace of the strain rate tensor is zero -- this is another way of restating the divergence-free condition, which we'll discuss below.
But the 2D strain rate of the depth-averaged velocity field can have non-zero divergence.
The action functional then becomes

$$J = \int_\Omega\left(\frac{n}{n + 1}hA^{-1/n}|\dot\varepsilon(u)|^{1/n + 1} + \frac{m}{m + 1}C|u|^{1/m + 1} + \rho gh\nabla s\cdot u\right)dx.$$

Note how the friction terms are no longer part of a boundary integral.
The optimality conditions for this functional also result in a nonlinear elliptic system of partial differential equations.
But the action is purely convex instead of having a saddle point structure like the Stokes equations.
Consequently, they're easier to solve numerically, as well as having fewer unknowns and being posed over a lower-dimensional domain.

