# Fetch all of the observational data in advance so the progress bars don't
# show up in the rendered notebooks

import icepack

icepack.datasets.fetch_bedmachine_antarctica()
icepack.datasets.fetch_measures_antarctica()
icepack.datasets.fetch_mosaic_of_antarctica()
icepack.datasets.fetch_randolph_glacier_inventory("alaska")
icepack.datasets.fetch_outline("larsen-2015")
