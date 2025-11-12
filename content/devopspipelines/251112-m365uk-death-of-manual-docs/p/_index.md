+++
title = "Death Of Manual Docs - A DevOps Approach to Power Platform Documentation"
description = "A DevOps Approach to Power Platform Documentation"
outputs = ["Reveal"]
[reveal_hugo]
# Theme - https://revealjs.com/themes/
custom_theme = "css/techTweedieLight.css"
# theme = "white"
margin = 0.2
highlight_theme = "github"
transition = "convex"
transition_speed = "default"
slide_number = true
controlsTutorial = false
controls = false
center = false
touch = true
draft = false
[logo]
# https://reveal-hugo.dzello.com/logo-example/#/3
 src = "/techTweedie_150x150.png"
 alt = "techTweedie.github.io" # Alt text. 
 width = "100px" # Size of the file.
# Side info
# Transition options: zoom, concave, convex, slide, fade, none
# Speed: slow, default, fast

+++

<style>
:root {
  --primary-color: #4B514F;
  --secondary-color: #1b1d24ff;
  --accent-color: #742774;
  --success-color: #0D7F41;
  --info-color: #243A5E;
  --warning-color:rgb(0, 0, 0);
  --r-link-color: #3666FF;
  --r-link-color-hover: #742774;
  --r-selection-background-color: rgba(54, 102, 255, 0.3);
}

.reveal {
  font-family: "Bebas Neue", sans-serif;
}

.reveal a {
  color: var(--secondary-color);
}

.reveal a:hover {
  color: var(--accent-color);
}

.reveal strong, .reveal b {
  color: var(--warning-color);
}

.reveal em, .reveal i {
  color: var(--accent-color);
}

.container{
    display: flex;
}
.col{
    flex: 1;
}
.highlight-box {
    background-color: rgba(54, 102, 255, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-left: 5px solid var(--secondary-color);
}
.demo-box {
    background-color: rgba(13, 127, 65, 0.1);
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    border-left: 5px solid var(--success-color);
}
.warning-box {
    background-color: #FFF3CD;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    border-left: 5px solid #ffc107;
}
.instruction-item {
    display: flex;
    align-items: center;
    margin: 15px 0;
    padding: 10px;
    background-color: rgba(54, 102, 255, 0.05);
    border-radius: 5px;
}
.instruction-item svg {
    margin-right: 15px;
    flex-shrink: 0;
}
.instruction-text {
    flex: 1;
}
.key-combo {
    background-color: var(--secondary-color);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
}
</style>




{{< slide content="common.navigate.howto" >}}

---

## The Death of Manual Docs

</br>

## A DevOps Approach to Power Platform Documentation

<aside class="notes">
  Welcome slide
</aside>

---

## The Problem

<div class="highlight-box">

- ✅ We have a solution
- ✅ Keeps getting updated
- ✅ Certainty that its correct

</div>

<aside class="notes">

- Power Platform Solution
- Build by a team
- Documentation is not forthcoming
- Or maybe we don't live in that space but we have a responsibility for it
- Need to easily see inside to unserstand whats going on

</aside> 

---

{{< slide content="common.about.iantweedie" >}}

---

## Pre-requisites

<div class="demo-box">

- Already exporting out our solution
- Using Azure DevOps
- We are using a YAML pipeline
- *(I have a presentation on how to do this - [click here](https://itweedie.github.io/devopspipelines/250627-build-your-first-devops-pipeline/#/15))*

</div>

<aside class="notes">
  The pipeline I am going to use today continues on from another presentation last year, link to that is here. 
</aside>

</section>


---

## Demo 1: *Look at existing repo*

- [Repo](https://dev.azure.com/TechTweedie/Tutorials/_git/Dataverse%20-%20Backup)

---

## Demo 2: *Install Extension*

---

<section data-background-video="install-power-platform-documentation-extension.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  Video plays that installs an extension
</aside>

---

## What can it do

- Choices
- Security Roles
- Solution Manifest
- Tables
- Table Relationships
- Table Relationship ER diagram
- Workflows (Preview)

---

## Demo 3: *Use this extension in a pipeline*

<aside class="notes">
  Add some YAML Code 
  Then run it
</aside>

---

<section data-background-video="run-pipeline-1.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  Run pipeline with help from time machine
</aside>

---

## Demo 4: *Lets look at what we got*

<aside class="notes">
  Look over the results
</aside>

---

## Demo 5: *Lets add in a Word Document generator*

<aside class="notes">
  Add varables
  Add YAML
  Lets run the Pipeline
</aside>

---

<section data-background-video="run-pipeline-2.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  Video plays and secound pipeline runs
</aside>

---

## Demo 6: *Lets look at what we got*

<aside class="notes">
  Look over the results
</aside>

---

## Demo 7: *Lets Push to the Project WiKi*

---

<section data-background-video="install-md-to-wiki-extension.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  Video plays that installs an extension
</aside>

---

<section data-background-video="create-pat-for-wiki.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  Create PAT for WiKi
</aside>

---

<section data-background-video="pat-for-wiki.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  ****Add to Pipeline
</aside>

---


## Demo 8: *Lets Add in the Task*

<aside class="notes">
  Add the Task
  And then run the Pipeline
</aside>

---

<section data-background-video="run-pipeline-3.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  Run pipeline 3
</aside>

---

## Demo 9: *Lets look at what we got*

<aside class="notes">
  Look over the results
</aside>

---

## What We've Accomplished

We Converted our exported solution in to

- ✅ Markdown Documents
- ✅ Word Documents
- ✅ Azure DevOps WiKi Pages

<aside class="notes">
  We do this so however you want to use this documentation, it is allwase up to date
  You can visually track changes over time
</aside>

---

## Call for action

<aside class="notes">
  What would this mean for you
  Would this cut down your workload
  If anyone wants to collabrate and do something simular for other parts of the microsft stack is open
</aside>

---

## Feedback and Presentation

![alt text](feedback.png)

