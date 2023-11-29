<!--
.. title: Install
.. slug: install
.. date: 2020-09-14 13:40:48 UTC-07:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
.. hidetitle: True
-->

This page will tell you how to get started running icepack.
The first and hardest step is to install our main dependency, the [Firedrake](https://firedrakeproject.org) package.
Then we'll show how to get the tutorials up and running.

## Installation

There are two options for how to get icepack: installing from source, and using Docker.
We recommend starting with Docker if you're using MacOS or Windows.
If you run into difficulties installing Firedrake, please consult their [website](https://firedrakeproject.org/download.html#system-requirements), which includes a debugging guide and other information on system requirements.
For other problems, you can always [get in touch](/contact/) for more assistance.

### From Docker

Docker is a command-line tool that lets you pretend like you're using a different OS.
The blueprint for how this OS is constructed is called an *image*.
For example, there's a Docker image that has Firedrake already installed on Ubuntu.
These images are shareable and you can upload them to the internet, for example to [DockerHub](https://hub.docker.com) or the GitHub container registry.
From an image, you can then create *containers*, which are running instances of the desired OS.
These containers are mostly isolated from the rest of your system, so you can set them up and tear them down without doing anything permanent.
Using Docker requires root privileges, so it'll work well on your own machine but not on a supercomputer.
The advantage of Docker is that it saves you from having to install Firedrake yourself.
There are several things to learn first, but it's a good tool to be familiar with on principle.

You'll first need to [install Docker](https://docs.docker.com/get-docker/) and make sure that it's running.
Once you have Docker, you can fetch a recent Firedrake image like so:
```shell
docker pull firedrakeproject/firedrake-vanilla:2023-11
```
The `firedrakeproject` part is the organization; `firedrake-vanilla` is the image name; and `2023-11` is the tag or version number of the image.
You can see all of the images that the Firedrake project has created and uploaded to DockerHub [here](https://hub.docker.com/u/firedrakeproject).

Now that you have the Firedrake image, you can start a container like so:
```shell
docker run \
    --interactive --tty \
    firedrakeproject/firedrake-vanilla:2023-11
```
The options are worth breaking down a bit: `--interactive --tty` tells Docker that we want to start up a container where we can type shell commands and receive printed feedback.
It's also possible to start a container that runs in the background where we don't use it interactively at all, and this is very common for web applications.
But for our purposes we'll always be using containers interactively.

Within this container, everything will appear to you as if you're running a terminal session on Ubuntu.
From this terminal session, you can see that the current user is called `firedrake` by running the command `whoami` and that there's a folder in this user's home directory called `firedrake` containing the Firedrake installation.
You'll next want to activate the Firedrake virtual environment:
```shell
source ~/firedrake/bin/activate
```
For more information about virtual environments, what they do, and why Firedrake uses one, you can read the section below about installing Firedrake from source.

Next, install icepack and some of its dependencies:
```shell
sudo apt update && sudo apt install patchelf
pip install git+https://github.com/icepack/Trilinos.git
pip install git+https://github.com/icepack/pyrol.git
git clone https://github.com/icepack/icepack.git
pip install --editable ./icepack
```
Run one of the icepack unit tests to make sure it works:
```shell
pytest -s icepack/test/ice_shelf_test.py
```
Your icepack installation lives in the directory `~/icepack`.

The commands above are the bare minimum to get you started.
There are a few more things that you might need to know in order to be productive.
By default, a Docker container is isolated from your host system, which means no sharing of files or ports.
You'll probably want to share files, and you'll also need to share a port in order to run Jupyter notebooks (see below).
To do that, we need to add an extra flag when we start up the container:
```shell
docker run \
    --interactive --tty \
    --volume </path/on/host>:</path/on/container> \
    --publish 8888:8888 \
    firedrakeproject/firedrake-vanilla:2023-11
```
where `</path/on/host>` is the absolute path of the directory you want to share on your host system, and likewise for the container.
Any files on your host system in the shared volume will show up in the container and vice versa.
The `--publish` flag will expose port 8888 inside the container as port 8888 on the host so that you can start a Jupyter notebook server inside the container that is then visible in your browser.

The instructions above assume that you're using the vanilla Firedrake image directly.
Once you start up a container, there's a bunch of installation you have to do, and it would be very annoying to have to do that every time.
To save you the trouble down the line, you can build your own Docker image off of the Firedrake image.
Building a Docker image is specified by a Dockerfile.
The text below shows the contents of a Dockerfile containing the commands above:
```dockerfile
FROM firedrakeproject/firedrake-vanilla:2023-11
RUN sudo apt update && sudo apt install patchelf
RUN source firedrake/bin/activate && \
    pip install git+https://github.com/icepack/Trilinos.git && \
    pip install git+https://github.com/icepack/pyrol.git && \
    git clone https://github.com/icepack/icepack.git && \
    pip install --editable ./icepack
```
You can save this to a file named `Dockerfile` somewhere on your machine and then run
```shell
docker build --tag <my-image-name> <directory>
```
where `<my-image-name>` is the desired name of your image, and `<directory>` is the folder where the Dockerfile lives on your machine.
If the Dockerfile is in the current directory, then you can just use `.` or `$PWD` although it's good to save this in a location that's easy for you to find.
You can then do
`docker run --interactive --tty <my-image-name>`
to start a container with icepack and all its dependencies already installed.


### From source

The installation procedure for Firedrake is a little unusual compared to a typical Python package.
Most python projects use the simple `pip install .` formula to build and install everything.
Firedrake is appreciably more complex -- it consists of several dependent sub-packages along with a complete PETSc installation -- and thus has its own custom build process.
Rather than install the project in your system python package directory, Firedrake's install script builds it inside an isolated [*virtual environment*](https://docs.python.org/3/tutorial/venv.html).
Python virtual environments were created to solve problems of conflicting package versions possibly breaking installed libraries.
Rather than install every Python package globally, you can create an isolated virtual environment for one particular package.
This environment includes a Python executable and all of the package's dependencies.

To install Firedrake and its dependencies, fetch the install script and then run it:
```shell
curl -O https://raw.githubusercontent.com/firedrakeproject/firedrake/master/scripts/firedrake-install
python firedrake-install
```
Next, activate the Firedrake virtual environment:
```shell
source <path/to/firedrake>/bin/activate
```
Activating the virtual environment will change some environment variables; it only the current terminal session and doesn't do anything permanent.

Next, install icepack and some of its dependencies:
```shell
pip install git+https://github.com/icepack/Trilinos.git
pip install git+https://github.com/icepack/pyrol.git
git clone https://github.com/icepack/icepack.git
pip install ./icepack
```
Run one of the icepack unit tests to make sure it works:
```shell
pytest -s icepack/test/ice_shelf_test.py
```


## Run the demos

All of icepack's demos are Jupyter notebooks.
To run these notebooks, we need to first tell the Jupyter server how to find the Firedrake virtual environment.
With the virtual environment activated, make a Jupyter kernel for Firedrake:
```shell
pip install ipykernel
python -m ipykernel install --user --name=firedrake
```

Many of the notebooks require you to use the mesh generator [gmsh](http://gmsh.info/).
Binaries are available on their website, or you can use your system package manager.
On MacOS,
```shell
brew install gmsh
```
On Debian, Mint, or Ubuntu:
```shell
sudo apt-get install gmsh
```

Finally, you can start a notebook server like so:
```shell
cd $VIRTUAL_ENV/src/icepack/notebooks
jupyter notebook
```
If you're using Firedrake from inside a Docker image, there are some extra flags:
```shell
jupyter notebook --ip 0.0.0.0 --no-browser
```
The server will print a bunch of things, at the end of which will be a URL that starts with http://127.0.0.1:8888/?token=<very long hex string>.
If you paste that URL into your browser you should have access from your host system to the notebook server that's now running in the container.
You can replace 8888 with the port number of your choice.
You might need to do that if, for example, you have another notebook server running on your host system using port 8888, which the container does not (and cannot!) know about.



## Comments

#### Virtual environments

Virtual environments can be activated and deactivated for a particular shell session.
The added layer of isolation keeps one package from breaking other packages on the system or doing anything that's both undesirable and hard to roll back.
However, it does introduce an annoying layer of bureaucracy -- you have to manually activate the virtual environment every time you want to use it by invoking:
```shell
source <path/to/virtual/environment>/bin/activate
```
Again, activating a virtual environment affects only the current shell session and doesn't do anything permanent.
You can save yourself the trouble of remembering where the activate script lives by adding a function like this to your `.bashrc` or `.bash_profile`:
```shell
firedrake-env() {
    source </absolute/path/to/virtual/environment>/bin/activate
}
```
When you type `firedrake-env` at the terminal, the firedrake virtual environment will be activated.
If you find yourself using lots of different virtual environments, you might also like [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/).

#### Docker

Docker can be a bit of a disk space hog.
A typical image can be 2GB or more, and even stopped containers take up disk space.
The command
```shell
docker system prune
```
will clean up anything that's obviously unused.
The command to manually remove a docker image is
```shell
docker image rmi <image name>:<image version tag>
```
The prune command won't remove images that you've specifically created yourself by a prior call to `docker build`, so to reclaim space from old images you might have to remove them manually.

The commands to list the docker images and containers on your system are, respectively,

```shell
docker image ls
docker container ls
```
By default, these commands will not show intermediate images or stopped containers; you can see these by appending the `--all` flag.

Sometimes a build will fail at the installation of some package, and the installer for that package will write the reason why to a log file.
But since the build failed, you have no way of accesssing the log file to find out why the build failed!
When this happens, you can look for the hash of the intermediate image in the terminal output from `docker build`.
Then you can use `docker commit` to make give a name to the image at that failing build stage.
Finally you can start a container from the failing stage to recover the log file.
See this [forum post](https://forums.docker.com/t/how-to-debug-build-failures/7049/3) for more detail.

#### PETSc

Firedrake uses the library [PETSc](https://www.mcs.anl.gov/petsc/) for many of its internal data structures (meshes, vectors, matrices).
PETSc has loads of optional features, chiefly interfaces to other computational libraries.
Some of these features are mandatory for Firedrake.
The Firedrake install script will build its own PETSc installation with the right configuration, but this could create problems if you already do have PETSc installed on your system.
In that case, you will need to unset `$PETSC_DIR` and `$PETSC_ARCH` while installing Firedrake and every time you activate the virtual environment.
You can add an extra line to the `firedrake-env` command above to unset these variables if you want to keep a pre-existing PETSc installation.
While installing Firedrake will fail with an error if you have a pre-existing PETSc installation, trying to run a script that uses Firedrake will instead crash with a segmentation fault if you have not first unset the PETSc environment variables.
