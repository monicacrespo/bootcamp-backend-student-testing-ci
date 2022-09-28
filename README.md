# Introduction

This repository presents Continuous Integration using GitHub Actions following the lesson provided by Bootcamp Backend Lemoncode for the [Module 4 - Rest API - Testing - CI](https://github.com/Lemoncode/bootcamp-backend/tree/ca27da73818fac15986d55afca650a963354b62d/00-stack-documental/04-rest-api/07-testing/07-ci)

CI using GitHub Actions offers workflows that can build the code in your repository and run your tests. More information [here](https://docs.github.com/en/actions/using-workflows)


./.github/workflows/ci.yml

```
name: Ci workflow

on: pull_request

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Install
        run: npm ci
      - name: Tests
        run: npm test
```

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated.
