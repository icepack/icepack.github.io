FROM icepack/firedrake-python3.8:0.5.5

MAINTAINER shapero.daniel@gmail.com

RUN apt-get update && DEBIAN_FRONTEND="noninteractive" apt-get -yq install \
    moreutils \
    jq

ARG token

RUN mkdir actions-runner && \
    cd actions-runner && \
    curl -o actions-runner-linux-x64-2.284.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.284.0/actions-runner-linux-x64-2.284.0.tar.gz && \
    echo "1ddfd7bbd3f2b8f5684a7d88d6ecb6de3cb2281a2a359543a018cc6e177067fc  actions-runner-linux-x64-2.284.0.tar.gz" | shasum -a 256 -c && \
    tar xzf ./actions-runner-linux-x64-2.284.0.tar.gz && \
    ./config.sh --url https://github.com/icepack/icepack.github.io --token ${token} --unattended

ENTRYPOINT actions-runner/run.sh
