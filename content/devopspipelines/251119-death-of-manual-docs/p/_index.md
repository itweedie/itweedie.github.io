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


<script>
// JavaScript to handle video speed for Reveal.js background videos
document.addEventListener('DOMContentLoaded', function() {
    
    function setVideoSpeed() {
        // Target all video elements, including background videos
        const allVideos = document.querySelectorAll('video, .reveal .backgrounds video, .slide-background video');
        
        allVideos.forEach(video => {
            // Disable looping for all videos
            video.loop = false;
            video.removeAttribute('loop');
            
            // Check if this video should play at 2x speed
            // Look for parent section with speed-2x class or video with specific filename
            const section = video.closest('section') || document.querySelector('section.speed-2x');
            const shouldSpeed = (section && section.classList.contains('speed-2x')) || 
                              (video.src && video.src.includes('msedge_7if2t23IPS.mp4'));
            
            if (shouldSpeed) {
                const applySpeed = () => {
                    try {
                        video.playbackRate = 2.0;
                        //console.log('✅ Applied 2x speed to video:', video.src || video.currentSrc);
                    } catch (e) {
                        console.log('❌ Failed to set speed:', e);
                    }
                };
                
                // Apply speed multiple ways
                applySpeed();
                video.addEventListener('loadstart', applySpeed);
                video.addEventListener('loadedmetadata', applySpeed);
                video.addEventListener('canplay', applySpeed);
                video.addEventListener('playing', applySpeed);
                
                // Delayed attempts
                setTimeout(applySpeed, 50);
                setTimeout(applySpeed, 200);
                setTimeout(applySpeed, 1000);
            }
        });
        
        // Also check for background videos created by Reveal.js
        const backgroundElements = document.querySelectorAll('.slide-background[data-background-video*="msedge_7if2t23IPS.mp4"] video');
        backgroundElements.forEach(video => {
            video.playbackRate = 2.0;
            console.log('🎬 Set background video speed to 2x:', video.src);
        });
    }
    
    // Initial setup
    setVideoSpeed();
    
    // Reveal.js integration
    if (window.Reveal) {
        Reveal.on('ready', () => {
            console.log('🚀 Reveal.js ready - setting up video speeds');
            setTimeout(setVideoSpeed, 100);
            setTimeout(setVideoSpeed, 500);
        });
        
        Reveal.on('slidechanged', (event) => {
            console.log('📺 Slide changed - checking videos');
            setTimeout(setVideoSpeed, 100);
        });
    }
    
    // Fallback observer for dynamically added videos
    const observer = new MutationObserver(() => setVideoSpeed());
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Aggressive fallback - keep trying for first 10 seconds
    for (let i = 1; i <= 10; i++) {
        setTimeout(setVideoSpeed, i * 1000);
    }
});
</script>





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
- *(I have a video on how to do this - [click here](https://itweedie.github.io/devopspipelines/250627-build-your-first-devops-pipeline/#/15))*

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

</section>
<section data-auto-animate>

- Table Relationships
  
</section>

---

<section data-background-video="update-pipeline-1-with-tablerelationship.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">

<aside class="notes">
  
</aside>

</section>

---

<section data-background-video="run-pipeline-1-wtr.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

<aside class="notes">
  Run pipeline with help from time machine
</aside>

---

<section data-background-video="look-at-what-we-got-1.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

<aside class="notes">
  look at what we got
</aside>

---

<section data-background-video="update-pipeline-2-withdocx.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

<aside class="notes">
  look at what we got
</aside>

---

<section data-background-video="run-pipeline-2-withdocx.mp4" data-background-size="contain"  data-background-video-muted >
</section>

<aside class="notes">
  look at what we got
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

- Knowledge Transfer
- Enhanced Maintenance and Troubleshooting
- Increased Collaboration and Alignment
- Facilitated Governance and Compliance

---

## Where can you download this

![alt text](image-3.png)

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