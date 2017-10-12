
Welcome to the project website for _icepack_, a glacier flow modelling library.
If you're a researcher in earth sciences and you need to simulate large-scale ice flow, you might be in the right place!

Features:

* routines to solve the diagnostic equations for the velocity of a floating ice shelf or grounded ice stream
* routines to solve the prognostic equations for the evolution of ice thickness
* a python wrapper, so you can run simulations and post-process the results all in the same environment


**Status**: icepack is in the early stages of development.
I've been focusing on making a really nice interface to the diagnostic and prognostic solve methods for ice shelves and ice streams, documenting and testing the daylights out of it, and making some illustrative example code.
Now that the basic structure of the code has been ironed out (through tedious trial and error, and a complete rewrite or two), I can focus on adding more features.
The main features that I plan to add in the near term are:

* Methods for estimating the rheology or basal shear stress of a glacier from surface observations.
I've already written these and used them in my thesis, but I'm in the process of rewriting them so they're extra easy to use.
* Higher-order glacier flow models that also work for the slow-flowing interior of the ice sheet.
* Solvers for thermal transport within a glacier.

Nonetheless these are just my own priorities -- if you're interested in using icepack for research, I'm more than willing to add the features you want!

For comparison, here are several other software packages for glacier flow modelling:

* [BISICLES](https://commons.lbl.gov/display/bisicles/BISICLES)
* [Elmer/Ice](http://elmerice.elmerfem.org)
* [ISSM](https://issm.jpl.nasa.gov)
* [PISM](http://www.pism-docs.org/wiki/doku.php)


### Getting started

To build icepack, you'll need the following already installed:

* a C++14 compiler; clang-3.8 or gcc-5.4 and up will both work and icepack is tested with each
* the [CMake](https://www.cmake.org) build system, which is used to build deal.II and icepack
* python 3, and the big scientific python packages -- numpy, scipy, matplotlib
* the linear algebra libraries LAPACK and BLAS

To use icepack, you'll need the following repositories:

* [deal.II](https://github.com/dealii/dealii): a general finite element modelling library written in C++; the computational backbone on which icepack is built.
* [icepack](https://github.com/icepack/icepack): the core icepack C++ library, containing solvers for the differential equations that determine the velocity and thickness of a glacier.
* [pybind11](https://github.com/pybind/pybind11): helps make python bindings for C++ libraries.
* [icepack-py](https://github.com/icepack/icepack-py): python bindings for the core icepack library.
* [icepack-examples](https://github.com/icepack/icepack-examples): example codes for icepack that cover all the main features.

To install all of the things globally, you can run this at your terminal:

    git clone https://github.com/dealii/dealii
    mkdir -p dealii/build && cmake -B./dealii/build -H./dealii && cmake -B./dealii/build --target install
    git clone https://github.com/icepack/icepack
    mkdir -p icepack/build && cmake -B./icepack/build -H./icepack && cmake -B./icepack/build --target install
    git clone https://github.com/pybind/pybind11
    mkdir -p pybind11/build && cmake -B./pybind11/build -H./pybind11 && cmake -B./pybind11/build --target install
    git clone https://github.com/icepack/icepack-py
    cd icepack-py && python3 setup.py install

There's nothing to install for `icepack-examples` -- just use the scripts in the `data/` directory to fetch and preprocess observational data, and the scripts in `examples/` to run things.

**Note**: Some of the organization of this project will change in the near future in order to make things easier.
Both `pybind11` and the python bindings that are currently in `icepack-py` should be included with the core icepack library soon, so you'll only have to build `deal.II` and the core library.

### Contact

See my [staff website](http://psc.apl.uw.edu/people/post-docs/daniel-shapero/) for a good email address to reach me at.
Please feel free to get in touch if you have questions!
If you're interested in using `icepack` for research but there's a feature you need added in order to do so, I'd be happy to add it to the library.
