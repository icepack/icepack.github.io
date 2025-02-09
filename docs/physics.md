# Physics

Here we'll give a brief overview of ice physics.
This won't be a substitute for reading a book or taking a class.
It will help explain some of the notation and variable names that you'll see in the tutorials.

## Conservation laws

The general form of a conservation law for an extensive quantity $\phi$ is

$$\frac{d}{dt}\int_\omega \rho\phi\,dx + \int_{\partial\omega}f\cdot n\,ds = \int_\omega q\,dx.$$

## Mass conservation

Ice is roughly incompressible (leaving aside snow and firn).
This means that the divergence of the 3D velocity field is zero:

$$\nabla\cdot u = 0.$$

For a depth-averaged or simplified 3D model, we can integrate this equation to arrive at a 2D evolution equation for the ice thickness:

$$\frac{\partial h}{\partial t} + \nabla\cdot h\bar u = \dot a - \dot m$$

where now $\bar u$ is the depth-averaged ice velocity.

## Momentum conservation

The starting point for momentum conservation is a balance of shear stresses, pressure, and gravity:

$$\int_\omega\left(\tau - pI\right)\cdot n\,ds = \int_\omega \rho g\,dx$$
