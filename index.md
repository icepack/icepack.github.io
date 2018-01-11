
Welcome to the project website for _icepack_, a glacier flow modelling library.

**Status**: icepack is in the early stages of development.
I've been focusing on making a really nice interface to the diagnostic and prognostic solve methods for ice shelves and ice streams, documenting and testing the daylights out of it, and making some illustrative example code.
Now that the basic structure of the code has been ironed out (through tedious trial and error, and a complete rewrite or ~~two~~ four), I can focus on adding more features.
The main features that I plan to add in the near term are:

* Methods for estimating the rheology or basal shear stress of a glacier from surface observations.
I've already written these and used them in my thesis, but I'm in the process of rewriting them so they're extra easy to use.
* Higher-order glacier flow models that also work for the slow-flowing interior of the ice sheet.
* Solvers for thermal transport within a glacier.

Nonetheless these are just my own priorities -- if you're interested in using icepack for research, I'm more than willing to add the features you want!

For comparison, here are several more mature software packages for glacier flow modelling:

* [BISICLES](https://commons.lbl.gov/display/bisicles/BISICLES)
* [Elmer/Ice](http://elmerice.elmerfem.org)
* [ISSM](https://issm.jpl.nasa.gov)
* [PISM](http://www.pism-docs.org/wiki/doku.php)

An [old version](https://github.com/danshapero/icepack-thesis) of this code was used for my PhD thesis.


### Getting started

To build icepack, you'll need the following:

* python 3, pip3, virtualenv
* [firedrake](https://www.firedrakeproject.org), a finite element modeling library

To install firedrake, follow the [instructions](http://www.firedrakeproject.org/download.html) on their website.
The firedrake install script builds the library itself and all its dependencies in a virtual environment.
To build and test icepack, activate the firedrake virtual environment, and run the following from the command line:

    python3 setup.py install
    pytest -s

The tests will take a few minutes to run.
If any of the tests fail or if you have other difficulties with installation, please write to me using the contact information below.


### Contact

See my [staff website](http://psc.apl.uw.edu/people/post-docs/daniel-shapero/) for a good email address to reach me at.
Please feel free to get in touch if you have questions!
If you're interested in using `icepack` for research but there's a feature you need added in order to do so, I'd be happy to add it to the library.
