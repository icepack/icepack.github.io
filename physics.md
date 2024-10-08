# Physics

Here we'll give a brief overview of ice physics.
This won't be a substitute for reading a book or taking a class on the subject, but it should help explain some of the notation and variable names that you'll see in the documentation.
I'll assume that you're familiar with continuum mechanics and vector calculus.
In particular, we'll appeal to the idea of [control volumes](https://en.wikipedia.org/wiki/Control_volume) and conservation laws a lot.

These fields are all in units of megapascals - meters - years.
This unit system is a little unusual; we borrowed it from [Elmer/ICE](https://elmerice.elmerfem.org/).
It has the advantage of making certain physical constants, like the rate factor in the Glen flow law, take on a reasonable numerical range.
These values are often gigantic or tiny in MKS units.

The table below shows all the symbols that we'll use.

| Name                   | Symbol
| :----                  | ----:
| velocity               | $u$
| thickness              | $h$
| surface elevation      | $s$
| bed elevation          | $b$
| accumulation rate      | $\dot a$
| melt rate              | $\dot m$
| pressure               | $p$
| strain rate tensor     | $\dot\varepsilon$
| deviatoric stress      | $\tau$
| Glen flow law rate     | $A$
| Glen flow law exponent | $n$
| friction coefficient   | $C$
| outward normal vector  | $\nu$

## Conservation laws

Suppose that we're considering a medium that occupies a certain region of space, which I'll call $\Omega$.
Let $\phi$ be the density of some extensive quantity -- mass, momentum, energy, etc.
The most general form of a conservation law states that, for any control volume $\omega$,

$$\frac{d}{dt}\int_\omega \phi\,dx + \int_{\partial\omega}\left(\phi u + F\right)\cdot n\;ds = \int_\omega Q\;dx.$$


## Variational forms

Conservation laws are always the first principle and when things are confusing or not obvious it's where you should turn.
But there are other ways of expressing the same fundamental physics that can be more (or less) useful depending on the circumstances.
For our purposes, what we want is called a *variational form*.
Conservation laws are a statement that is quantified over all possible control volumes $\omega$.
Variational forms, on the other hand, are a statement that is quantified over all possible *test functions*, which we often write as $\phi$, $\psi$, $v$, and so forth.
