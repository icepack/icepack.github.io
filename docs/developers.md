# Developers

First of all, thank you for thinking about contributing to this project!
Icepack is free and open-source software developed for the express purpose of serving the glaciological community.
In the long term, this project will only succeed if we can engage that community, including users like you, in the development process.

## Suggesting new code

You can report bugs and request new features by [raising an issue](https://github.com/icepack/icepack/issues/) on the project repository.
When you think that something about icepack needs changing, please don't hesitate to bring this to our attention.

If you do file an issue, we're happy to make the proposed changes, provided that they're within the scope of the library and we have the expertise to do it.
If you want to implement this change yourself, we gladly accept code contributions -- please see below on submitting pull requests for more information.
If you want to add a new feature or fix a bug yourself but don't know how, please [get in touch](contact.md) over Slack or email.
In the long run, **it is a more worthwhile use of our time to teach you how you can write this code yourself than it is for us to write it ourselves**, even if we could have written faster.
People are a more valuable asset than code.

### Bug reports

We subject icepack to a battery of tests whenever changes are made in the hopes of making sure that all of the code works as it's supposed to.
Nonetheless, we do make mistakes.
If you think you've found a bug, please [file an issue](https://github.com/icepack/icepack/issues/) on the project page with a clear and concise description of the problem you're encountering.

The most helpful thing for us in quickly identifying and fixing bugs is to have access to the code that triggered the problem.
That way, we can test it on our own machines without a bunch of asynchronous back-and-forth.
If you want to make our lives even easier you can try to construct a *minimal failing example* (MFE).
This means taking the buggy script and cutting out as much code as possible while still triggering the problem.

It's very common that numerical solvers seem fine when tested on synthetic problems, only to fail spectacularly on real data.
If you do encounter a bug when solving problems with real data, we can only reproduce your test case with access to that data.
This is easiest when you use publicly available datasets, for example from [NSIDC](https://www.nsidc.org).

### Feature requests

We add new features to icepack regularly and we try to prioritize whatever we think will make the greatest difference to the glaciological community at large.
You can give us feedback on what new features are important to you by [raising an issue](https://github.com/icepack/icepack/issues/) on the project page with a description of what you'd like to see added.
For example, this might include:

* new physics solvers, like firn densification or fabric development
* new data analysis capability or quality-of-life features, like automatically generating a mesh from the Randolph Glacier Inventory
* new demonstrations, for example of how to model a particular type of physical system that isn't already included in the tutorials or how-to guides, or how to do common tasks in the analysis of simulation data

To help us understand the feature you'd like to see added, please include links to any relevant papers or to other packages that do implement this feature.

We welcome requests for new features as these help us gauge what's most important to the community.
If you see that someone has already made a feature request for something that you need as well, you can give a "thumbs up" to it on GitHub.
This might seem like just a silly and gratuitous use of emojis, but it's very helpful to us -- now we know that two people need the same thing!
At the same time, we have only a finite amount of time and energy.
We decide what to add next based on what we think will make the most difference to users and on how difficult or time-consuming we expect implementing that feature will be.


## Pull requests

The process for submitting new code to icepack is to submit a [pull request](https://github.com/icepack/icepack/pulls) on the project repository page.
There are a few steps to this explained below.
We welcome contributions of code to add new features of improve existing ones.
When you do, you're a developer now.
Join us...

![meme](https://img.memecdn.com/join-us_o_1559835.jpg)

We use the version control system git for managing the icepack source code and for keeping track of our work.
If this is your first experience using git, a good resource is Aaron Meurer's [tutorial](http://www.asmeurer.com/git-workflow/).
Version control with git can be challenging at first and we've all made loads of mistakes.
Please don't hesitate to [get in touch](contact.md) via Slack if you're running into challenges with git and want some help.

### Workflow

The general workflow for submitting new code or documentation to an open source project usually works something like this:

* **[Raise an issue](https://github.com/icepack/icepack/issues/)** on the repository page describing what changes you'd like to make.
Here we'll discuss the scope of those changes, what it is you're looking to accomplish, and why.
* **Create a fork** of icepack to your own GitHub account if you haven't done so already.
* **Create a branch** within your fork of the icepack.
Give the branch a name that clearly indicates what you're trying to achieve with this new code.
* **Implement your changes** in a series of commits, each of which roughly does one small, atomic thing at a time.
Keeping changes small helps the other developers easily digest each individual unit of work to provide the best feedback possible.
Give a clear description of that change in the commit message.
* **Clean up** your code by running [black](https://black.readthedocs.io/en/stable/) on it.
This will deal with line wrapping and other annoying formatting minutia.
* **Create a [pull request](https://github.com/icepack/icepack/pulls)** on the project page.
In the pull request description, you'll start by saying something like "Resolves issue #X."
The issue will get automatically linked to the pull request.
In the remainder of the PR description, you can summarize *how* you went about fixing that bug, implementing that feature, etc.
* Our **[test suite](https://app.circleci.com/pipelines/github/icepack/icepack?branch=master)** will run your code with both an old and a new release of Python to make sure that it works properly.
If a test fails, that's totally ok!
We make mistakes all the time and rely on this test suite to catch them for us.
You can always add new commits that fix any problems you find to your branch and the test suite will run again.
* The other developers of the project will **review your code**.
They might request some changes from you.
*Code review involves a lot of back-and-forth*, especially for complicated patches or features.
This is totally normal!
* We might ask you to **rebase** your branch either on top of upstream changes, or to make the commit history easier to digest later.
Rebasing is a little hard the first time, so we're happy to walk you through it.
* Finally, another developer will **merge your pull request**.

The point of all this bureaucracy is to make sure that all the code we commit to the master branch of icepack is correct and ready for others to use.

### Changing the demos

If you're modifying one of the demos or adding a new demo, we'll ask that you take some steps to make sure that only the essential content of the Jupyter notebook gets tracked in version control.
We store only the un-executed form of the notebook with no outputs or plots in the icepack git repository, with the understanding that a user can always execute the notebook in order to see the results.
To remove any outputs or plots and restore a notebook to its original state, you can use [`nbstripout`](https://github.com/kynan/nbstripout) command:

```shell
pip3 install nbstripout
nbstripout icepack/demo/<name of demo>.ipynb
```

Jupyter notebooks have lots other unnecessary metadata that this command can remove for us.


## Testing

All of the physics solvers in icepack are subject to a battery of tests.
When you submit new code to icepack, either to add a new feature or to fix a bug, we'll ask you to write tests for that code as well.
If you're fixing a bug, clearly our existing test suite didn't catch it.
A good test for a bug fix is something that fails on the old broken code but succeeds on the new fixed code.
Writing tests for completely new code is harder and this page aims to offer some guidance.

The goal of a test suite is to check the correctness of the algorithms on simplified problems in the hopes of detecting errors in the implementation.
For example, for a floating ice shelf where the fluidity is constant and the ice thickness decreases linearly towards the ice front, the shallow shelf equations can be solved analytically.
To check that the diagnostic solver is working correctly, the numerically computed solution is compared against the exact solution, and a significant departure indicates a mistake.

**Designing effective tests for scientific software is difficult because the answers we get are only approximations.**
Our results never match analytical solutions perfectly, so at what point should a given mismatch be considered a failure?
This breakdown point can be calculated only for the simplest PDEs and spatial domains.

Instead, we know from finite element theory that the solutions should converge as $\mathcal{O}(\delta x^p)$ where $\delta x$ is the mesh spacing and $p$ is some exponent depending on the problem and discretization.
We can then take a sequence of meshes and do a log-log fit of the errors against $\delta x$ to check that this asymptotic behavior is indeed achieved.
But the asymptotic estimates never quite hold exactly.
For example, using piecewise linear finite elements and the backward Euler scheme to solve the mass transport equation should give errors that decrease as $\mathcal{O}(\delta x)$.
What if, instead, you find that the errors decay like $\delta x^{0.95}$?
Should that indicate failure, even if it suggests that the numerical solutions do get more accurate?
There isn't really a good answer for this – we just have to do our best and be as critical as we can.

Another difficult issue is *generalizability*.
Does the convergence of a solver on simplified problems imply that it will also perform well on harder problems?
When no analytical solution is available at all, how should one design a useful test?
The best we can hope for in this situation is to rely on mathematical properties of the solution, such as conservation laws or variational principles.
Rather than check against an analytical solution, these properties serve as sanity checks.
For example, given an approximate solution to the shallow shelf equations, one can take a random perturbation to it and check that this perturbation has a higher value of the action functional due to the minimization property.

## Style

Icepack is a community project and we gratefully accept contributions from anyone.
At the same time, we also want to keep the code as readable and maintainable as possible and that involves a bit of discipline.
The Python development team has published a very general set of guidelines for Python coding style called [PEP8](https://pep8.org/) and we try to conform to this as best we can.
There are specific considerations around coding style for scientific software that we’ll try to address too.

### Variable naming

An old quote that's become folklore by now: "There are only two hard things in computer science, cache invalidation and naming things."

Throughout icepack, we employ two different guiding principles for how to name identifiers.
Some code is meant to be read by everyone – glaciologists, curious oceanographers, or us, the maintainers of the project.
For example, everyone will need to call the diagnostic and prognostic solve routines for some flow solver.
In these parts of the code base it's critical to use English names that clearly and succinctly indicate the role of the object, like `velocity`, `thickness`, `viscosity`, `solve`, and so forth.

Other parts of the code are only meant to be read by someone who is familiar with the physics and mathematics.
**Mathematical code should look as much like the mathematics as possible.**
The internal details of what makes up the viscous part of the action functional for a particular ice flow model is a good example.
If you are reading that code, you should know that it will involve quantities like the strain rate tensor, and you should be familiar with the fact that this field is usually denoted with a Greek letter epsilon in most books on continuum mechanics.
In these parts of the code, we freely use single-character identifiers like `u` for velocity, as long as they match what appears in textbooks.
We will even sometimes use Greek letters like `ε` or `φ` where appropriate.
(Most text editors include shortcuts for inserting these symbols.
For example, in vim, you can insert a Greek letter `φ` by entering insert mode, typing `ctrl + k`, and then typing `f`.
In a Jupyter notebook, you can start typing `\phi` and then hit the tab key.)
These are never to be used in the public user interface, but they can make the code more mnemonic and familiar once you know the mathematics.
The kind of code where you would write like this will be written once, debugged twice, and read hundreds or thousands of times.
Make it look like the math we all know and love, and it'll be that much easier to pair up with your preexisting conceptions of what that code is for.

### Formatting

We use the automatic formatter [black](https://black.readthedocs.io/en/stable/) for all code in icepack.
Black will do things like normalize all quotes, wrap long lines, and generally fix annoying stylistic issues that aren't worth the time you spend on them.
The style that it enforces isn't perfect but it helps reduce entropy growth.
To run it, first `pip3 install black` and then do:

```shell
black ./
```

This will edit any Python source files in the current directory in-place.
Formatting is part of the test suite -- pull requests will fail if the code hasn't been formatted.

We've also developed a few coding conventions outside of what black enforces:

* In internal code, use [operator.itemgetter](https://docs.python.org/3/library/operator.html#operator.itemgetter) from the standard library to fetch several values from a dictionary by key.
This pattern appears everywhere internally because all physical fields are passed by keyword to the various solvers.
* In tutorial code, fetch every value separately only its own line.
* Use [f-strings](https://docs.python.org/3/tutorial/inputoutput.html) instead of `.format`.
* When a line of code grows too long, find sub-expressions that can be given obvious and informative names and hoist them into local variables, even if they'll only be used once.

These aren't universal rules that apply to all Python code, they're just cases where there's more than one way to do something and we had to pick a way in order to keep the code consistent.


## Maintenance

Working collaboratively on software presents new challenges, like how to keep up to date with a rapidly evolving code base while also working on features that you're adding.
The following describes how you can work on code with other people and not drive yourself totally insane.

### Installation

The [installation instructions](install.md) are written for prospective users in order to help them get set up as quickly as possible.
If you're developing new code, you're going to have different needs.
For example, you might be working on more than one feature at the same time, or you might be testing icepack against different installations of Firedrake that have been configured differently.

The first thing you'll want to do is clone icepack into a separate directory and add your fork as a remote.

```shell
git clone git@github.com:icepack/icepack.git
cd icepack
git remote add \
    <your name> \
    git@github.com:<your GitHub username>/icepack.git
```

Next, you'll want to activate the virtual environment and install both icepack and the dependencies for building the documentation in editable mode:

```shell
source </path/to/firedrake>/bin/activate
pip3 install --editable </path/to/icepack>"[doc]"
```

The `--editable` flag guarantees that changes you make to the source code get seen automatically whenever you import icepack.
Without this flag, you'd have to reinstall again every time you made changes.
The flag `"[doc]"` at the end tells pip to also install the dependencies you'll need to build the icepack documentation.
This is part of a [general mechanism](https://setuptools.readthedocs.io/en/latest/references/keywords.html) of Python's setuptools for specifying optional dependencies.

As icepack is updated, you may find that you need to check for and install any missing dependencies.
To do this, navigate to the icepack directory and run:
```shell
pip3 install -e .
```

In the unfortunate event that your Firedrake installation becomes unusable, for example because your operating system decided to upgrade Python out from under you, you can delete the entire Firedrake virtual environment and reinstall a fresh one without losing any changes you made to your branch of icepack.

### Editors and IDEs

Nearly every editor nowadays offers syntax highlighting for Python.
We recommend using an editor or IDE that has built-in support for autocompletion and linting.
For example, some of us use the [Spyder](https://www.spyder-ide.org/) IDE.
Sometimes you might need to do something special to make your editor understand that some code lives in a virtual environment, which is especially necessary for autocompletion.
Using Spyder again as an example, you can activate the virtual environment and install Spyder inside it achieve this effect.
If you're using emacs and the [jedi](https://jedi.readthedocs.io/en/latest/) plugin, you can customize the [arguments](http://tkf.github.io/emacs-jedi/latest/#jedi:server-args) to the jedi server in order to make it see your virtual environment.

### Rebasing

Icepack is actively developed by several people committing new code at the same time.
If you're working on a new feature, you might find that the master branch has been updated.
Sometimes the changes to the master branch might even include bug fixes that are useful or relevant to the feature you're working on.
In order to pull the latest changes into your branch, you can run the following commands:

```shell
git fetch origin master
git rebase origin/master
```

The git `rebase` command is a really powerful tool which you should read more about.
What it does is effectively rewrite the commit history to put the changes in your branch on top of any changes from the master branch.
The nice part about `rebase` as opposed to `merge` is that it won't create an unnecessary merge commit, unless there are conflicts to deal with.

The other important use of the rebase command is to clean up or otherwise alter the commit history of a branch you're working on.
This is best done through an *interactive* rebase:

```shell
git rebase --interactive HEAD~<number of commits>
```

Git will then fire up the text editor of your choice and present you with a list of the number of commits you selected.
You can then choose to `pick` those commits, `edit` the changes in that commit, `squash` two commits into each other, or change the order in which those commits were applied.
A typical use case might be to take a feature branch and squash any intermediate bug fixes onto the original commits that introduced that code in the first place.
Minor mistakes like these aren't relevant for the overall history, and it's easiest to review the patch with these changes squashed into the original commit.

Rather than describe all the things you can do with an interactive rebase, we'll instead refer you to a really well-written [guide](https://git-rebase.io/) on the subject.
If you do want to rebase some code and you're having trouble, please get in touch over [Slack](contact.md) and we can walk you through it.

The environment variable `$VISUAL` determines what editor gets opened whenever a command like `git rebase` needs one.
You can set this environment variable in your shell profile to select vim, emacs, Sublime Text, or whatever you prefer.
