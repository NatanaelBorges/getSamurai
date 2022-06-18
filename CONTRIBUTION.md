<div  id="top"></div>

# Contributing to Get Samurai

English 🇺🇸 | [Português 🇧🇷](./CONTRIBUTION-pt_BR.md)

Thank you for your interest in contributing to Get Samurai by helping to make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

- [Code of conduct](#code-of-conduct)
- [Found a Bug?](#found-a-bug)
- [Missing a Feature?](#missing-a-feature)
- [Submission Guidelines](#submission-guidelines)
- [Coding Rules](#coding-rules)
- [Commit Message Format](#commit-message-format)

## Code of conduct

Help us keep Get Samurai open and inclusive. Please read and follow our [Code of Conduct](./code-of-conduct.md) .

## Found a Bug?

If you find a bug in the source code, you can help us by [submitting an issue](#submitting-an-issue) to our [GitHub Repository](https://github.com/NatanaelBorges/getSamurai). Even better, you can [submit a Pull Request](#submitting-a-pull-request-pr) with a fix.

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Missing a Feature?

You can  _request_  a new feature by  [submitting an issue](#submitting-an-issue)  to our GitHub Repository. If you would like to  _implement_  a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it. Please consider what kind of change it is:

- For a  **Major Feature**, first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.

 **Note** : Adding a new topic to the documentation or significantly rewriting a topic counts as an important resource.

- **Small Features**  can be crafted and directly  [submitted as a Pull Request](#submitting-a-pull-request-pr).

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Submission Guidelines

### Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug, we need to reproduce and confirm it. In order to reproduce bugs, we require that you provide a minimal reproduction. Having a minimal reproducible scenario gives us a wealth of important information without going back and forth to you with additional questions.

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you, we are going to close an issue that doesn't have enough info to be reproduced.

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

### Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search  [GitHub](https://github.com/NatanaelBorges/getSamurai/pulls)  for an open or closed PR that relates to your submission. You don't want to duplicate existing efforts.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design upfront helps to ensure that we're ready to accept your work.
  
3. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the getSamurai repository and create your branch from `main`

4. Make the desired changes.

5. If you've added code that should be tested, add tests.

6. Follow our [coding rules](#coding-rules)

7. Run the complete test suite as described in and make sure that all tests are passing, either locally or on the CI.

8. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit-message-format). Adherence to these conventions is necessary because release notes are automatically generated from these messages.

9. Push the changes to your fork.

10. On GitHub, create a pull request for the `getSamurai:main` repository.

11. Review and address comments in your pull request

If all goes well, your pull request will be merged.

### Reviewing a Pull Request

We reserves the right not to accept pull requests from community members who haven't been good citizens of the community. Such behavior includes not following the [code of conduct](./code-of-conduct).

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes  **must be tested**  by one or more specs (unit-tests).

- All public API methods  **must be documented**.

- We follow  [Google's JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html), but wrap all code at  **100 characters**.

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Commit Message Format

We have very precise rules over how our Git commit messages must be formatted. This format leads to  **easier to read commit history**.

Each commit message consists of a  **header**, a  **body**, and a  **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The  `header`  is mandatory and must conform to the  [Commit Message Header](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-header)  format.

The  `body`  is mandatory for all commits except for those of type "docs". When the body is present it must be at least 20 characters long and must conform to the  [Commit Message Body](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-body)  format.

The  `footer`  is optional. The  [Commit Message Footer](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-footer)  format describes what the footer is used for and the structure it must have.

#### Commit Message Header

```
<type>(<scope>): <short summary>
```

The  `<type>`  and  `<summary>`  fields are mandatory, the  `(<scope>)`  field is optional.

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

##### Summary

Use the summary field to provide a brief description of the change:

- use the imperative, present: "change" not "changed" nor "changes"
- do not start with the first capital letter
- no dot (.) at the end

##### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain  _why_  you are making the change. You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

#### Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to. For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>

```

or

```
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<pr number>

```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.

If you want to know more about the commit message format, see [Angular commit convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).  

<p  align="right">(<a  href="#top"> back to the top </a>)</p>
