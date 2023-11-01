
FROM firedrakeproject/firedrake@sha256:ee91b0c25ef044b09a3e33807b2a0fddc98df74e7f96d5fac5c0319ab1a95bf1

MAINTAINER shapero@uw.edu

ENV PATH=/home/firedrake/firedrake/bin:$PATH

# Install some dependencies for building the website.
RUN sudo apt update && \
    sudo apt install -yq patchelf graphviz moreutils jq

# Disable the IPython history when running as a Jupyter kernel. This prevents
# all sorts of annoying warnings associated to the history db getting locked.
RUN mkdir -p /home/firedrake/.ipython/profile_default/ && \
    echo "c = get_config(); c.HistoryManager.enabled = False" >> /home/firedrake/.ipython/profile_default/ipython_kernel_config.py
