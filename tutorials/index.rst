.. title: Tutorials
.. slug: tutorials
.. date: 2021-04-08 15:11:54 UTC-07:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
.. hidetitle: True

The diagram below shows several icepack example codes and how they relate to each other.
These notebooks demonstrate how to use icepack to set up simulations of glacier flow.
The notebooks under the "Tutorials" subgraph are more introductory material to get you off the ground.
The notebooks under "How-to guides" offer more advanced topics that you're likely to need if you use icepack to publish an academic paper.
These pages are all rendered from Jupyter notebooks that come with the icepack source code.
You can find them under the directory `notebooks/`.

.. graphviz::

    digraph tutorials {
        node [fontname="helvetica", shape="plaintext", fontcolor="#007bff"];
        edge [arrowsize=0.25, color="#4F5151"];
        ranksep=0.15;
        rankdir="LR";
        splines="false";
        mode="hier";
        layout="dot";
        //newrank="true";

        meshes_functions [label="Meshes,\nfunctions", href="/notebooks/tutorials/00-meshes-functions/"];
        synthetic_ice_sheet [label="Synthetic\nice sheet", href="/notebooks/tutorials/01-synthetic-ice-sheet/"];
        synthetic_ice_shelf [label="Synthetic\nice shelf", href="/notebooks/tutorials/02-synthetic-ice-shelf/"];
        larsen_ice_shelf [label="Larsen\nice shelf", href="/notebooks/tutorials/03-larsen-ice-shelf/"];
        synthetic_ice_stream [label="Synthetic\nice stream", href="/notebooks/tutorials/04-synthetic-ice-stream/"];
        ice_shelf_inverse [label="Ice shelf\ninverse", href="/notebooks/tutorials/05-ice-shelf-inverse/"];
        hybrid_ice_stream [label="Hybrid\nice stream", href="/notebooks/tutorials/06-hybrid-ice-stream/"];

        performance [label="Performance\noptimization", href="/notebooks/how-to/01-performance/"];
        checkpointing [label="Checkpointing", href="/notebooks/how-to/02-checkpointing/"];
        adaptivity [label="Adaptivity", href="/notebooks/how-to/03-adaptivity/"];

        subgraph cluster_0 {
            penwidth=0;
            fontcolor="#4F5151"
            fontname="helvetica";
            label="Tutorials";
            meshes_functions -> synthetic_ice_sheet;
            meshes_functions -> synthetic_ice_shelf -> larsen_ice_shelf -> ice_shelf_inverse;
            //synthetic_ice_shelf -> larsen_ice_shelf;
            //larsen_ice_shelf -> ice_shelf_inverse;
            synthetic_ice_shelf -> synthetic_ice_stream;
            synthetic_ice_sheet -> synthetic_ice_stream;
            synthetic_ice_stream -> hybrid_ice_stream;
        }

        synthetic_ice_stream -> performance; // [constraint=false];

        subgraph cluster_1 {
            penwidth=0;
            fontcolor="#4F5151"
            fontname="helvetica";
            label="How-to\nguides";
            performance -> checkpointing;
            performance -> adaptivity;
        }
    }

To run these notebooks, you'll need a working installation of Firedrake and icepack, and a Jupyter kernel for Firedrake.
See the `install </install/>`_ page for instructions.
To understand what's in these notebooks, you'll need to know a bit about glacier physics.
We'll expect that you're familiar with

* mass, momentum, and heat transport
* the Stokes equations and simplified models
* Glen's flow law

See the `physics </physics/>`_ page and some of the references mentioned there if you need a refresher.
You should also know going in that **all quantities are reported in units of megapascals - meters - years**.
We borrowed this slightly unconventional unit system from the package `Elmer/Ice <https://elmerice.elmerfem.org/>`_.
In this unit system, most of the physical constants and quantities that we care about live in a reasonable numerical range.
For example, the ice fluidity factor *A* in Glen's flow law is usually between 1 and 50.

We try to cover many of the things that you'll need to do real research, but if there's something not shown here that you'd find useful, please don't hesitate to `contact us </contact/>`_.
