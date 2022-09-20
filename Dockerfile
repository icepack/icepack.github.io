FROM icepack/firedrake-python3.8:0.6.0

MAINTAINER shapero.daniel@gmail.com

# Install some dependencies for building the website.
RUN sudo apt-get update && DEBIAN_FRONTEND="noninteractive" sudo apt-get -yq install \
    graphviz \
    moreutils \
    jq

# Disable the IPython history when running as a Jupyter kernel. This prevents
# all sorts of annoying warnings associated to the history db getting locked.
RUN mkdir -p /home/sermilik/.ipython/profile_default/ && \
    echo "c = get_config(); c.HistoryManager.enabled = False" >> /home/sermilik/.ipython/profile_default/ipython_kernel_config.py

# Install the github actions runner.
ARG token

RUN mkdir actions-runner && \
    cd actions-runner && \
    curl -o actions-runner-linux-x64-2.296.2.tar.gz -L https://github.com/actions/runner/releases/download/v2.296.2/actions-runner-linux-x64-2.296.2.tar.gz && \
    echo "34a8f34956cdacd2156d4c658cce8dd54c5aef316a16bbbc95eb3ca4fd76429a  actions-runner-linux-x64-2.296.2.tar.gz" | shasum -a 256 -c && \
    tar xzf ./actions-runner-linux-x64-2.296.2.tar.gz && \
    ./config.sh --url https://github.com/icepack/icepack.github.io --token ${token} --unattended

WORKDIR /home/sermilik/actions-runner
ENTRYPOINT bin/runsvc.sh
