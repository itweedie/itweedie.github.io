---
title: "The Death of Manual Docs: A DevOps Approach to Power Platform Documentation"
date: 2025-11-12
draft: false
---

{{< slide >}}

## The Death of Manual Docs

### A DevOps Approach to Power Platform Documentation

Ian Tweedie

---

{{< slide >}}

## About Me

* Ian Tweedie
* Microsoft Business Applications MVP
* Tech Lead @ ANS Group
* Blogger at [techtweedie.github.io](https://techtweedie.github.io)
* Creator of the Power Platform Documentation Extension

---

{{< slide >}}

## The Problem: Documentation Debt

* We've all been there...
* Docs are written once, then forgotten.
* They are **always** out of date.
* Time-consuming to create and maintain.
* Inaccurate docs are worse than no docs.

---

{{< slide >}}

## What if...

...your documentation was always up-to-date?

...it was generated automatically with every change?

...it was version-controlled alongside your solution?

...it required **zero** manual effort?

---

{{< slide >}}

## Introducing the Solution

![Extension Logo](https://raw.githubusercontent.com/wiki/rpothin/PowerPlatform-Documentation-Generator/assets/pp-docs-icon-128.png)

### The Power Platform Documentation Extension

A **free, open-source** Azure DevOps extension that automates your documentation.

---

{{< slide >}}

## What is it?

* A community contribution I wrote to solve this exact problem.
* Turns pipeline runs into living, version-controlled documentation.
* Launched here: [techtweedie.github.io/posts/250904-power-platform-documentation-extension/](https://techtweedie.github.io/posts/250904-power-platform-documentation-extension/)

---

{{< slide >}}

## Core Features

Automatically generates:

* Entity Relationship (ER) Diagrams
* Data Dictionaries
* Security Role Matrices
* Option-Set Tables
* Workflow & Power Automate Flow Summaries
* ...and more!

In multiple formats:

* Markdown (`.md`)
* Branded Microsoft Word Documents (`.docx`)

---

{{< slide >}}

## Live Demo

Let's kill some documentation debt!

1. **The Scenario**: A typical Power Platform solution.
2. **The Pain**: No documentation.
3. **The Fix**: Add one task to our Azure DevOps pipeline.
4. **The Magic**: Run the pipeline and watch the docs appear.
5. **The Result**: Living documentation, committed to Git.

---

{{< slide >}}

## The Reusable Snippet

Here's the magic. Add this to your export/unpack pipeline:

```yaml
- task: PowerPlatform-Documentation-Generator@1
  inputs:
    SolutionPath: '$(Build.SourcesDirectory)/solutions/MySolution'
    OutputFormat: 'md' # or 'docx'
    OutputPath: '$(Build.ArtifactStagingDirectory)/docs'
```

---

{{< slide >}}

## How to Get Started

1. **Install** the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IanTweedie.PowerPlatform-Documentation-Generator) (Link placeholder)
2. **Add** the YAML task to your pipeline after you unpack a solution.
3. **Run** your pipeline.
4. **Commit** the generated artifacts back to your repository.

---

{{< slide >}}

## Key Takeaways

* Manual documentation is a dead end.
* Automate your documentation with a DevOps approach.
* The Power Platform Documentation Extension is free, open-source, and easy to use.
* **Kill your documentation debt for good.**

---

{{< slide >}}

## Q&A

Any questions?

* **Blog**: techtweedie.github.io
* **GitHub Repo**: [Link to your repo]

---

{{< slide >}}

## Thank You!

Let's connect!

**Ian Tweedie**
* Twitter/X: @IanTweedie
* LinkedIn: /in/iantweedie
