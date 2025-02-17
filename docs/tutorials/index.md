# Tutorials

This page directs you to all of the tutorials for icepack, which will show you how to use the library to simulate glacier flow.
These pages are all rendered from Jupyter notebooks that are included with the icepack source code under the directory `notebooks/`.
You can and should run these notebooks yourself.

Almost every simulation built using icepack will look something like this:

```python
import geojson
import firedrake
import icepack

with open("glacier.json", "r") as outline_file:
    outline = geojson.load(outline_file)
geometry = icepack.meshing.collection_to_geo(outline)
with open("glacier.geo", "w") as geometry_file:
    geometry_file.write(geometry.get_code())
subprocess.call("gmsh -2 -v 0 -o glacier.msh glacier.geo")
mesh = firedrake.Mesh("glacier.msh")
Q = firedrake.FunctionSpace(mesh, "CG", 1)
h = firedrake.Function(Q)

for step in range(num_steps):
    solver.prognostic_solve(dt, thickness=h, **fields)
```
