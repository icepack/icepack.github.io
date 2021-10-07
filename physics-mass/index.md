<!--
.. title: Mass
.. slug: physics-mass
.. date: 2021-08-27 15:44:16 UTC-07:00
.. tags: mathjax
.. category:
.. link:
.. description:
.. type: text
.. hidetitle: True
-->

The mass conservation principle states that the change in the total mass of ice in a control volume is due to transport across the boundary by the ice velocity and either accumulation or melting at the ice surface and base.
Leaving aside snow and firn, ice is roughly incompressible, so the mass conservation principle can succinctly be expressed as

$$\nabla\cdot u = 0.$$

Strictly speaking, this condition is implied by the action principle for the Stokes equations that we showed in the momentum conservation page.
It's a constraint for which the pressure acts as a Lagrange multiplier.
In principle, we could use the velocity field computed from the Stokes equations to move the upper and lower free surfaces of the ice, and this is exactly what Elmer/ICE does.
For depth-averaged or simplified 3D models, however, the vertical velocity is eliminated entirely, which makes this front-tracking approach more difficult.
Instead, we can integrate the divergence-free condition to arrive at the 2D equation

$$\frac{\partial}{\partial t}h + \nabla\cdot h\bar u = \dot a - \dot m$$

for the ice thickness, where $\bar u$ is the depth-averaged ice velocity.
(The derivation is a little subtle when you get into it and we're leaving out some of the details here.
If you want to see all of them, have a look at [Greve and Blatter](https://link.springer.com/book/10.1007/978-3-642-03415-2).)
This is a linear hyperbolic equation which, by itself, should strike fear into the heart.
Most applications use explicit timestepping schemes for hyperbolic problems.
These methods require some care in choosing both the spatial and temporal discretization in order to guarantee stability.
We've opted to instead use a more expensive implicit timestepping scheme because these are usually unconditionally stable.
The additional expense of an implicit scheme is minute compared to the overall cost of solving the diagnostic equations.


