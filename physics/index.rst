.. title: Physics
.. slug: physics
.. date: 2021-08-27 15:55:46 UTC-07:00
.. tags: mathjax
.. category:
.. link:
.. description:
.. hidetitle: True
.. type: text

.. sidebar:: Physics

   `Momentum </physics-momentum/>`_

   `Mass </physics-mass/>`_

   `Energy </physics-energy/>`_

Here we'll give a brief overview of ice physics.
This won't be a substitute for reading a book or taking a class on the subject, but it should help explain some of the notation and variable names that you'll see in the demos and documentation.
I'll assume you're familiar with continuum mechanics and vector calculus.
In particular, we'll appeal to the idea of control volumes and conservation laws.
To get all the notation out of the way, here's a table of all the symbols that we'll use.

These fields are all reported in units of megapascals - meters - years.
This unit system is a little unusual; we borrowed it from the package Elmer/ICE.
It has the advantage of making certain physical constants, like the Glen flow law rate factor, live in a fairly sensible numerical range, whereas the values are often either gigantic or tiny in MKS units.
