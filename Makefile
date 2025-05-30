.PHONY: clean all

# Find all of the notebooks by searching the `notebooks` directory of icepack
# for anything that ends with `.ipynb` and isn't a directory and sort them
ICEPACK:=$(shell python3 -m pip show icepack | grep "Editable project location:" | cut -d" " -f4)
NOTEBOOK_FILES:=$(shell find $(ICEPACK)/notebooks -not -path '*/\.*' -type f -name '*\.ipynb' | sort)

# Make a target containing all of the imported, executed demos; to get any
# executed demo from its source in icepack, call `jupyter nbconvert`.
executed-notebooks: $(patsubst $(ICEPACK)/notebooks/%.ipynb,executed-notebooks/%.ipynb,$(NOTEBOOK_FILES))
executed-notebooks/%.ipynb: $(ICEPACK)/notebooks/%.ipynb
	jupyter nbconvert \
	    --to ipynb \
	    --execute \
	    --allow-errors \
	    --ExecutePreprocessor.timeout=24000 \
	    --output-dir=`dirname $@` \
	    --output=`basename $@` \
	    $<

# To get any demo page from an executed demo, call `nikola new_page`, extract
# the title of the demo from its raw source, and import it. Next, use jq and
# sponge to add an attribute to the notebook metadata that tells nikola to hide
# the page title. The title is part of the notebook anyway.
notebooks: $(patsubst $(ICEPACK)/notebooks/%.ipynb,pages/notebooks/%.ipynb,$(NOTEBOOK_FILES))
	@echo $(ICEPACK)

pages/notebooks/%.ipynb: executed-notebooks/%.ipynb
	rm -f $@
	python -m nikola new_page \
	    --format ipynb \
	    --title="$$(python3 extract_title.py $<)" \
	    --import=$< \
	    $@
	jq '.metadata.nikola += {hidetitle: "True"}' $@ | sponge $@

plugins/graphviz/graphviz.plugin:
	python -m nikola plugin --install graphviz

all: plugins/graphviz/graphviz.plugin notebooks
	python -m nikola build

clean:
	rm pages/*.ipynb executed-demos/*.ipynb
	python -m nikola clean
