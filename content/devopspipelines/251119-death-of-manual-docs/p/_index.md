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

/* Video playback speed classes */
.speed-2x video {
    /* This will be handled by JavaScript */
}

.speed-1-5x video {
    /* This will be handled by JavaScript */
}
</style>





{{< slide content="common.navigate.howto" >}}

---

## The Death of Manual Docs

</br>

## A DevOps Approach to Power Platform Documentation

<aside class="notes">
  Time machine help, it works on harts
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

<section id="2-welcome" data-background-image="Slide1.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">
</section>

---

## Pre-requisites

<div class="demo-box">

- Already exporting out our solution
- Using Azure DevOps
- We are using a YAML pipeline
- *(I have a video on how to do this - [click here](https://youtu.be/OUcXHBx3wJY))*

</div>

![alt text](image-2.png)



<aside class="notes">
  The pipeline I am going to use today continues on from another presentation last year, link to that is here. 
</aside>

</section>

---

<section data-background-video="look-at-repo.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">

<aside class="notes">

- Look at repo
- NEXT: Install my extension 

</aside>

</section>

---

<section data-auto-animate>
  <h1>FREE</h1>
</section>
<section data-auto-animate>
  <h1>FREE</h1>
  <h1>OPEN SOURCE</h1>
</section>
<section data-auto-animate>
  <h1>FREE</h1>
  <h1>OPEN SOURCE</h1>
  <h1>BUILT FOR THE COMMUNITY</h1>
</section>

---



<section data-background-video="install-power-platform-documentation-extension.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">

<aside class="notes">
  Video plays that installs an extension
</aside>

</section>


---

## What can it do



<section data-auto-animate>

- Choices
- Security Roles
- Solution Manifest
- Tables
- Table Relationships
- Table Relationship ER diagram
- Workflows (Preview)
- Diagram Converter
- Word DocX Converter

</section>
<section data-auto-animate>

- Table Relationships
- Diagram Converter
- Word DocX Converter
  
</section>


---

## Step 1: *Add variables*

```yaml

  - name: varUnpackedSolution
    value: $(Build.SourcesDirectory)\solutions\src\$(varSolutionName)

  - name: varWikiLocation
    value: $(Build.SourcesDirectory)\wiki\$(varSolutionName)

```

## Step 2: *Add tasks*


```yaml

- task: documentTableRelationships@2
  inputs:
    locationOfUnpackedSolution: '$(varUnpackedSolution)'
    wikiLocation: '$(varWikiLocation)'
    useSingleFile: true
    createFullERD: true

```

---

<section data-background-video="update-pipeline-1-with-tablerelationship.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">

<aside class="notes">
  
</aside>

</section>

---

<section data-background-video="run-pipeline-1-wtr.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

<aside class="notes">
  time machine
</aside>

---

<section data-background-video="look-at-what-we-got-1.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

<aside class="notes">
  look at what we got
</aside>

---

## Step 4: *Add more variables*

```yaml

  - name: varWikiOutput
    value: $(Build.SourcesDirectory)\wiki-ouput\solutions\$(varSolutionName)

  - name: varWord
    value: $(Build.SourcesDirectory)\word\solutions\$(varSolutionName)

```

---

## Step 5: *Add more tasks*

```yaml

# Convert diagrams
- task: convertConvertInlineDiagrams@1
  inputs:
    locationOfSourceMDFiles: '$(varWikiLocation)'
    outputLocation: '$(varWikiOutput)'

# Convert to Word
- task: convertMarkdownToDocx@1
  continueOnError: true
  inputs:
    locationOfMDFiles: '$(varWikiOutput)'
    outputLocation: '$(varWord)'
    includeTOC: true


# Convert to Word
- task: convertMarkdownToDocx@1
  continueOnError: true
  inputs:
    locationOfMDFiles: '$(varWikiOutput)'
    outputLocation: '$(varWord)\withTemplate'
    templateFile: '$(Build.SourcesDirectory)\TechTweedieWordTemplate.docx'
    includeTOC: true

```

---

<section data-background-video="update-pipeline-2-withdocx.mp4" data-background-size="contain"  data-background-video-muted>


<aside class="notes">
  add steps
</aside>
</section>

---

<section data-background-video="run-pipeline-2-withdocx.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
    time machine
</aside>

---


<section data-background-video="look-at-what-we-got-2.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  look at what we got
</aside>


---

## What We've Accomplished

We Converted our exported solution in to

- ✅ Markdown Documents
- ✅ Word Documents

<aside class="notes">
  We do this so however you want to use this documentation, it is allwase up to date
  You can visually track changes over time
</aside>

---

## Why is this important

<span class="fragment fade-in">

- Knowledge Transfer

</span>

<span class="fragment fade-in">

- Enhanced Maintenance and Troubleshooting

</br>

</span>

<span class="fragment fade-in">

- Increased Collaboration and Alignment

</br>

</span>

<span class="fragment fade-in">

- Facilitated Governance and Compliance

</br>


</span>


---

## Where can you download this

![alt text](image-3.png)

---

<section data-background-iframe="https://mightora.io/" data-background-interactive>

</section>

---


## Feedback and Presentation

![alt text](feedback.png)

[https://go.iantweedie.biz/feedback](https://go.iantweedie.biz/feedback)

---

## Extra content - the YAML Pipeline

```yaml

name: $(TeamProject)_$(BuildDefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)

variables:
  - name: varPowerPlatformSPN
    value: Dataverse - Backup
  - name: varSolutionName
    value: ExpenseReportManager
  - name: varWebsiteId
    value: 98a716a8-c592-476c-bc5d-aefde10a8b5d
  - name: varUnpackedSolution
    value: $(Build.SourcesDirectory)\src\solutions\$(varSolutionName)
  - name: varWikiLocation
    value: $(Build.SourcesDirectory)\wiki\solutions\$(varSolutionName)
  - name: varWikiOutput
    value: $(Build.SourcesDirectory)\wiki-ouput\solutions\$(varSolutionName)
  - name: varWord
    value: $(Build.SourcesDirectory)\word\solutions\$(varSolutionName)

trigger: none

pool:
  vmImage: 'windows-2019'

steps:

## Check out repo
- checkout: self
  persistCredentials: true
  clean: true

## Install Power Platform Tool Installer
- task: PowerPlatformToolInstaller@2
  inputs:
    DefaultVersion: true
    AddToolsToPath: true

## Set Solution Version
- task: PowerPlatformSetSolutionVersion@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(varPowerPlatformSPN)'
    SolutionName: '$(varSolutionName)'
    SolutionVersionNumber: '1.0.0.$(Build.BuildID)'

## Export Solution - managed
- task: PowerPlatformExportSolution@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(varPowerPlatformSPN)'
    SolutionName: '$(varSolutionName)'
    SolutionOutputFile: '$(Build.ArtifactStagingDirectory)\$(varSolutionName)_managed.zip'
    Managed: true
    AsyncOperation: true
    MaxAsyncWaitTime: '60'

## Export Solution - unmanaged
- task: PowerPlatformExportSolution@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(varPowerPlatformSPN)'
    SolutionName: '$(varSolutionName)'
    SolutionOutputFile: '$(Build.ArtifactStagingDirectory)\$(varSolutionName).zip'
    Managed: false
    AsyncOperation: true
    MaxAsyncWaitTime: '60'

## Unpack Solution
- task: PowerPlatformUnpackSolution@2
  inputs:
    SolutionInputFile: '$(Build.ArtifactStagingDirectory)\$(varSolutionName).zip'
    SolutionTargetFolder: '$(Build.SourcesDirectory)\src\solutions\$(varSolutionName)'
    SolutionType: 'Both'

## Document out our Solution
### Option Sets
- task: mightoraDocumentOptionSets@1
  inputs:
    unpackedSolutionPath: '$(varUnpackedSolution)'
    outputLocation: '$(varWikiLocation)'

### Security Roles
- task: documentRoles@2
  inputs:
    locationOfUnpackedSolution: '$(varUnpackedSolution)'
    wikiLocation: '$(varWikiLocation)'
    useSingleFile: true

### Solution Manifest
- task: documentSolutionManifest@1
  inputs:
    solutionXmlPath: '$(varUnpackedSolution)/Other/Solution.xml'
    outputLocation: '$(varWikiLocation)'

### Tables
- task: documentSolutionTables@2
  inputs:
    locationOfUnpackedSolution: '$(varUnpackedSolution)'
    wikiLocation: '$(varWikiLocation)'
    useSingleFile: true

### Table Relationships
- task: documentTableRelationships@2
  inputs:
    locationOfUnpackedSolution: '$(varUnpackedSolution)'
    wikiLocation: '$(varWikiLocation)'
    useSingleFile: true
    createFullERD: true

### Table Relationships ER Diagram
- task: mightora-powerplatform-documentationgenerator-erdiagram@1
  inputs:
    locationOfUnpackedSolution: '$(varUnpackedSolution)'
    wikiLocation: '$(varWikiLocation)'

### Workflows
- task: mightoraDocumentWorkflows@1
  inputs:
    solutionPath: '$(varUnpackedSolution)'
    outputLocation: '$(varWikiLocation)'


## Make documentation ready for export

### Convert diagrams
- task: convertConvertInlineDiagrams@1
  inputs:
    locationOfSourceMDFiles: '$(varWikiLocation)'
    outputLocation: '$(varWikiOutput)'

### Convert to Word
- task: convertMarkdownToDocx@1
  continueOnError: true
  inputs:
    locationOfMDFiles: '$(varWikiOutput)'
    outputLocation: '$(varWord)'
    includeTOC: true

## Push to WiKi
- task: mightora-UploadMDToWiki@0
  continueOnError: true
  inputs:
    ADOBaseUrl: '$(System.CollectionUri)'
    wikiSource: '$(varWikiOutput)'
    MDRepositoryName: '$(Build.Repository.Name)'
    MDVersion: '$(Build.BuildNumber)'
    MDTitle: 'MD for $(Build.Repository.Name)'
    WikiDestination: 'UploadedFromPipeline'
    IncludePageLink: true
    DeleteOrphanedPages: true
  env:
    SYSTEM_ACCESSTOKEN: $(PAT)
    
## Commit to Repo
- task: mightoraCommitToRepo@2
  inputs:
    commitMsg: 'Latest solution changes.'
    branchName: 'main'
    pushStrategy: 'normal'



```