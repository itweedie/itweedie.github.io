+++
title = "Build Your First DevOps Pipeline for the Power Platform"
description = "A hands-on, beginner-friendly session on building your first DevOps pipeline for the Power Platform"
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
controlsTutorial = true
controls = true
center = false
touch = true
draft = false
background-image = "content/slide/slide2.png"
[logo]
# https://reveal-hugo.dzello.com/logo-example/#/3
# src = "/techTweedie_150x150.png"
# alt = "techTweedie.github.io" # Alt text. 
# width = "100px" # Size of the file.
# Side info
# Transition options: zoom, concave, convex, slide, fade, none
# Speed: slow, default, fast
+++

<style>
:root {
  --primary-color: #4B514F;
  --secondary-color: #3666FF;
  --accent-color: #742774;
  --success-color: #0D7F41;
  --info-color: #243A5E;
  --warning-color: #F2C810;
  --r-link-color: #3666FF;
  --r-link-color-hover: #742774;
  --r-selection-background-color: rgba(54, 102, 255, 0.3);
}

.reveal {
  font-family: "Segoe UI", "Segoe UI Symbol", "Segoe UI Emoji", "Segoe UI Historic", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
  font-family: "Segoe UI", "Segoe UI Symbol", "Segoe UI Emoji", "Segoe UI Historic", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
  font-family: "Segoe UI", "Segoe UI Symbol", "Segoe UI Emoji", "Segoe UI Historic", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--secondary-color);
}

.reveal h1, .reveal h2 {
  font-family: "Segoe UI Semibold", "Segoe UI", "Segoe UI Symbol", "Segoe UI Emoji", "Segoe UI Historic", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
}

.reveal h1 {
  color: var(--accent-color);
}

/* Alternating word colors for H1 and H2 */
.reveal h1 .info-word,
.reveal h2 .info-word {
  color: var(--info-color);
}

.reveal h1 .accent-word,
.reveal h2 .accent-word {
  color: var(--accent-color);
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

<script>
// Automatically alternate H1 and H2 word colors
document.addEventListener('DOMContentLoaded', function() {
    function alternateHeadingColors() {
        const headingElements = document.querySelectorAll('.reveal h1, .reveal h2');
        
        headingElements.forEach(heading => {
            // Skip if already processed or contains HTML
            if (heading.querySelector('.info-word, .accent-word') || heading.innerHTML.includes('<')) {
                return;
            }
            
            const text = heading.textContent;
            const words = text.split(' ');
            
            const coloredWords = words.map((word, index) => {
                const className = index % 2 === 0 ? 'info-word' : 'accent-word';
                return `<span class="${className}">${word}</span>`;
            });
            
            heading.innerHTML = coloredWords.join(' ');
        });
    }
    
    // Run initially
    alternateHeadingColors();
    
    // Re-run when slides change (for dynamically loaded content)
    if (window.Reveal) {
        Reveal.addEventListener('slidechanged', alternateHeadingColors);
        Reveal.addEventListener('ready', alternateHeadingColors);
    }
});
</script>


<section>

# How to Navigate This Presentation

<div class="highlight-box">
<h3>🎮 Controls</h3>

<div class="instruction-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="var(--secondary-color)"/>
</svg>
<div class="instruction-text">
Use <span class="key-combo">←</span> <span class="key-combo">→</span> <span class="key-combo">↑</span> <span class="key-combo">↓</span> arrow keys to navigate
</div>
</div>

<div class="instruction-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="var(--success-color)" stroke-width="2" fill="none"/>
</svg>
<div class="instruction-text">
Press <span class="key-combo">Space</span> or <span class="key-combo">Enter</span> to go to next slide
</div>
</div>

<div class="instruction-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="var(--accent-color)" stroke-width="2" fill="none"/>
</svg>
<div class="instruction-text">
Press <span class="key-combo">Esc</span> to see slide overview
</div>
</div>

<div class="instruction-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="var(--info-color)" stroke-width="2" fill="none"/>
</svg>
<div class="instruction-text">
Press <span class="key-combo">F</span> for fullscreen mode
</div>
</div>

<div class="instruction-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1-1 1.5-1 2.5V15m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="var(--warning-color)" stroke-width="2" fill="none"/>
</svg>
<div class="instruction-text">
Press <span class="key-combo">?</span> to see all keyboard shortcuts
</div>
</div>

</div>

<aside class="notes">
  Instructions for users navigating later
</aside>

</section>

---

<section id="2-welcome" data-background-image="slides/LondonUG/Slide1.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">
</section>

<aside class="notes">
  Welcome slide
</aside>

---

<section id="3-agenda" data-background-image="slides/LondonUG/Slide9.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">
</section>

# Today's Agenda

<div class="highlight-box">

## 🚀 What We'll Cover

**5 Key Areas Over 40 Minutes**

1. **🎯 Foundation** - Understanding the Why *(5 mins)*
2. **🛠️ Hands-On Demos** - Building Your First Pipeline *(25 mins)*  
3. **📚 Best Practices** - Professional Tips *(5 mins)*
4. **🎁 Resources** - Take Home Materials *(3 mins)*
5. **❓ Q&A** - Your Questions *(2 mins)*

</div>

<aside class="notes">
  Overview of the 5 main sections we'll cover today
</aside>

---

# 🎯 Foundation
*(5 mins)*

<div class="highlight-box">

<div class="demo-box">

**Why DevOps?** Manual deployments = Problems  

**Prerequisites:** Azure DevOps + Power Platform CLI  

**Repository:** Organized folders = Success  

</div>

</div>

<aside class="notes">
  Foundation section - essential concepts only
</aside>

---

# 🛠️ Hands-On Demos 

*(25 mins)*

<div class="highlight-box">

<div class="demo-box">

**Demo 1:** Setup Pipeline + Build Tools 

**Demo 2:** Export & Unpack Solutions   

**Demo 3:** Deploy to Target Environment  

</div>

</div>

<aside class="notes">
  Hands-on demos - the core practical content
</aside>

---

# 📚 Best Practices 

*(5 mins)*

<div class="highlight-box">

<div class="demo-box">

**Security:** Use service connections, never hardcode credentials  

**Troubleshooting:** Check logs, validate permissions

**Success:** Consistent naming + proper environment setup 

</div>

</div>

<aside class="notes">
  SECURITY ESSENTIALS:
  - Always use Azure DevOps service connections for authentication
  - Never hardcode usernames, passwords, or tenant IDs in pipelines
  - Use Azure Key Vault for storing sensitive configuration values
  - Implement least privilege access - only grant necessary permissions
  - Use managed identities where possible
  - Rotate service principal secrets regularly
  
  COMMON PITFALLS TO AVOID:
  - Pipeline failures due to missing dependencies - always check solution dependencies first
  - Permission errors - ensure service connection has System Administrator role in target environment
  - Solution import failures - validate solution compatibility between environments
  - Timeout errors - increase timeout values for large solutions
  - Connection string issues - use environment-specific variables
  - Missing components - always export as managed solution for production deployments
  
  KEY SUCCESS FACTORS:
  - Naming conventions: Use consistent prefixes for all components (e.g., company_solutionname_)
  - Environment setup: Ensure proper connection between DEV and target environments
  - Documentation: Keep README.md updated with setup instructions and requirements
  - Testing: Include solution checker validation in your pipeline
  - Rollback plan: Always have a rollback strategy and test it
  - Monitoring: Set up alerts for pipeline failures and deployment issues
</aside>

---

# 🎁 Resources & Next Steps 

*(5 mins)*

<div class="highlight-box">

<div class="demo-box">

**Templates:** Download ready-to-use pipeline YAML files  

**Takeaways:** Start simple, automate gradually, secure always 

**Link to slides:** QR code at the end

**Questions:** Ask now or connect later for follow-up  

</div>

</div>

<aside class="notes">
  TEMPLATE DOWNLOADS AVAILABLE:
  - Basic solution export pipeline (YAML template)
  - Solution import/deployment pipeline (YAML template)
  - Service connection setup guide (step-by-step PDF)
  - Repository folder structure template
  - Sample azure-pipelines.yml with comments
  - PowerShell scripts for local testing
  - Connection string configuration examples
  - Environment variable templates
  
  KEY TAKEAWAYS TO EMPHASIZE:
  - Start simple: Begin with one environment, one solution
  - Automate gradually: Don't try to do everything at once
  - Security first: Never hardcode credentials, always use service connections
  - Test locally: Use Power Platform CLI to test before committing to pipeline
  - Document everything: Future you will thank present you
  - Version control: Every change should be tracked and reversible
  - Monitor and alert: Know when things break before users do
  
  NEXT STEPS FOR ATTENDEES:
  1. Set up Azure DevOps project (free tier available)
  2. Install Power Platform CLI on local machine
  3. Create service connection to development environment
  4. Download and customize pipeline templates
  5. Start with simple export pipeline
  6. Join Power Platform Community for ongoing support
  
  FOLLOW-UP RESOURCES:
  - GitHub repository with all templates and examples
  - Power Platform Community forums
  - Microsoft Learn modules on Power Platform DevOps
  - Monthly community calls and webinars
  - Contact information for further questions
  - Link to presentation recording and slides
</aside>

---

<section data-background-image="slides/LondonUG/Slide5.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">


<aside class="notes">
  Thanks to sponsors
</aside>

</section>



---

<section data-background-image="slides/LondonUG/Slide7.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">
</section>

---

# Build Your First DevOps Pipeline for the Power Platform

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## The Journey Starts Here

- You've exported a solution ✅
- Maybe even unpacked it ✅  
- **But what's next?** 🤔

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

# Ian Tweedie

<div class="container">
<div class="col" style="justify-content: center; align-items: center;">
  <img src="content/qr.jpg" alt="QR Code" style="height:250px; box-shadow: none;">
</div>

<div class="col">
  <ul>
    <li>Power Platform Technical Consultant, Capgemini</li>
    <li>Trustee for Digital Transformation</li>
    <li>github.com/itweedie</li>
    <li>youtube.com/@techtweedie</li>
  </ul>
</div>
</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Ian Tweedie
##### Certifications
![height:100px](content/image-12.png)![height:100px](content/image-13.png)![height:100px](content/image-14.png)![height:100px](content/image-15.png)![height:100px](content/image-16.png)![height:100px](content/image-17.png)![height:100px](content/image-18.png)![height:100px](content/image-19.png)![height:100px](content/image-20.png)![height:100px](content/image-21.png)![height:100px](content/image-22.png)![height:100px](content/image-23.png)![height:100px](content/image-24.png)![height:100px](content/image-25.png)![height:100px](content/image-26.png)![height:100px](content/image-27.png)![height:100px](content/image-28.png)![height:100px](content/image-29.png)![height:100px](content/image-30.png)![height:100px](content/image-31.png)![height:100px](content/image-32.png)![height:100px](content/image-33.png)![height:100px](content/image-34.png)![height:100px](content/image-35.png)![height:100px](content/image-36.png)![height:100px](content/image-37.png)![height:100px](content/image-38.png)![height:100px](content/image-39.png)![height:100px](content/image-40.png)![height:100px](content/image-41s.png)![height:100px](content/image-42s.png)![height:100px](content/image-44s.png)![height:100px](content/CyberSecurityArchitect-2s.png)![height:100px](content/sc-100exams.png)

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Housekeeping 
- QR code at the end to download the presentation
- Hands-on session - follow along!
- Templates available for download

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Why DevOps Matters for Power Platform

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### The Problem

- **Manual solution management** 😰
- **No version control** 📉
- **Inconsistent deployments** 🎯
- **Lost work** 💔
- **No rollback strategy** ⏪

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### The Solution

<div class="highlight-box">

**DevOps Pipeline = Automated, Repeatable, Secure**

</div>

- ✅ Version control for your solutions
- ✅ Automated deployments
- ✅ Consistent environments
- ✅ Easy rollbacks
- ✅ Audit trail

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## What You'll Learn Today

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Learning Objectives

1. **Why DevOps matters** for Power Platform projects
2. **How to structure** your repo and solutions
3. **Setting up your first** Azure DevOps pipeline
4. **How to deploy** solutions automatically
5. **Bonus:** Automated documentation generation

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Prerequisites

<div class="warning-box">

**Before We Start**

</div>

- **Dataverse System Admin** privileges
- **Azure DevOps** project with basic license
- **Power Platform CLI** installed
- [Azure DevOps Parallelism Request](https://aka.ms/azpipelines-parallelism-request)

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Repository Structure

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Recommended Folder Structure

```
MyPowerPlatformProject/
├── Solutions/
│   ├── src/
│   │   └── MySolution/
│   └── MySolution.zip
├── Pipelines/
│   ├── export-solution.yml
│   ├── deploy-solution.yml
│   └── build-solution.yml
├── Documentation/
└── README.md
```

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Setting Up Azure DevOps

---

{{< slide background-image="../msBuildTools.gif" >}}

<div class="highlight-box">

## Install Power Platform Build Tools

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Service Principal Setup

<div class="highlight-box">

## App Registration Required

**Client ID:** `[Your App ID]`

**Tenant ID:** `[Your Tenant ID]`

**Secret:** `[Your Client Secret]`

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 1: Creating Your First Pipeline

<div class="demo-box">

**Live Demo**: Setting up the export pipeline in Azure DevOps

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Export Pipeline YAML

```yaml
trigger:
- main

pool:
  vmImage: 'windows-latest'

steps:
- task: PowerPlatformToolInstaller@2
  displayName: 'Install Power Platform Build Tools'

- task: PowerPlatformExportSolution@2
  displayName: 'Export Solution'
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(PowerPlatformSPN)'
    Environment: '$(SourceEnvironment)'
    SolutionName: '$(SolutionName)'
    SolutionOutputFile: '$(SolutionOutputFile)'
    AsyncOperation: true
    MaxAsyncWaitTime: '60'
```

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 2: Exploring an Unpacked Solution

<div class="demo-box">

**Live Demo**: Understanding the solution structure

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Unpack Pipeline Step

```yaml
- task: PowerPlatformUnpackSolution@2
  displayName: 'Unpack Solution'
  inputs:
    SolutionInputFile: '$(SolutionOutputFile)'
    SolutionTargetFolder: '$(Build.SourcesDirectory)\Solutions\src\$(SolutionName)'
    SolutionType: 'Both'
```

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Commit Changes

```yaml
- script: |
    git config user.email "$(Build.RequestedForEmail)"
    git config user.name "$(Build.RequestedFor)"
    git add --all
    git commit -m "Automated solution update: $(SolutionName) - $(Build.BuildNumber)"
    git push origin HEAD:$(Build.SourceBranchName)
  displayName: 'Commit Solution Changes'
```

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 3: Generating Documentation

<div class="demo-box">

**Live Demo**: Automated solution documentation

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Documentation Generation

```yaml
- task: PowerShell@2
  displayName: 'Generate Solution Documentation'
  inputs:
    targetType: 'inline'
    script: |
      # Install required modules
      Install-Module -Name Microsoft.PowerApps.PowerShell -Force
      
      # Generate documentation
      $solutionPath = "$(Build.SourcesDirectory)\Solutions\src\$(SolutionName)"
      $docPath = "$(Build.SourcesDirectory)\Documentation\$(SolutionName)-$(Build.BuildNumber).md"
      
      # Create documentation content
      $content = Get-SolutionDocumentation -SolutionPath $solutionPath
      $content | Out-File -FilePath $docPath -Encoding UTF8
```

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 4: Scheduling Backups

<div class="demo-box">

**Live Demo**: Setting up scheduled solution backups

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Scheduled Trigger

```yaml
trigger:
- none  # Disable CI triggers

schedules:
- cron: "0 2 * * 1-5"  # 2 AM, Monday-Friday
  displayName: Daily backup
  branches:
    include:
    - main
  always: true
```

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 5: Deploying to Target Environment

<div class="demo-box">

**Live Demo**: Automated deployment pipeline

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Pack and Deploy

```yaml
- task: PowerPlatformPackSolution@2
  displayName: 'Pack Solution'
  inputs:
    SolutionSourceFolder: '$(Build.SourcesDirectory)\Solutions\src\$(SolutionName)'
    SolutionOutputFile: '$(Build.ArtifactStagingDirectory)\$(SolutionName).zip'
    SolutionType: 'Both'

- task: PowerPlatformImportSolution@2
  displayName: 'Import Solution'
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(PowerPlatformSPN)'
    Environment: '$(TargetEnvironment)'
    SolutionInputFile: '$(Build.ArtifactStagingDirectory)\$(SolutionName).zip'
    AsyncOperation: true
    MaxAsyncWaitTime: '60'
```

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Pipeline Variables

<div class="highlight-box">

**Key Variables to Configure**

</div>

- `PowerPlatformSPN` - Service connection
- `SourceEnvironment` - Development environment URL
- `TargetEnvironment` - Target environment URL
- `SolutionName` - Your solution unique name
- `SolutionOutputFile` - Export path

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Best Practices

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Pipeline Best Practices

- **Use unmanaged solutions** for source control
- **Separate pack and deploy** stages
- **Include rollback procedures**
- **Test in staging** before production
- **Use pull requests** for changes
- **Monitor pipeline** health

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Solution Management

- **One solution per repo** (recommended)
- **Consistent naming** conventions
- **Proper dependency** management
- **Environment-specific** configurations
- **Regular backups**

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Common Challenges & Solutions

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Challenge: Large Solutions

<div class="warning-box">

**Problem**: Solution export times out

**Solution**: 
- Use `AsyncOperation: true`
- Increase `MaxAsyncWaitTime`
- Split large solutions

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Challenge: Connection References

<div class="warning-box">

**Problem**: Connections fail in target environment

**Solution**: 
- Use deployment settings files
- Parameterize connection references
- Update connections post-deployment

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Challenge: Environment Variables

<div class="warning-box">

**Problem**: Environment-specific values

**Solution**: 
- Use environment variables in solution
- Configure per environment
- Automate variable updates

</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Template Downloads

<div class="highlight-box">

**Ready-to-Use Templates**

</div>

- ✅ Complete pipeline YAML files
- ✅ PowerShell scripts
- ✅ Documentation templates
- ✅ Best practices guide

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Next Steps

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Your DevOps Journey

1. **Start small** - Single solution pipeline
2. **Add complexity** - Multiple environments
3. **Enhance** - Add testing, documentation
4. **Scale** - Multiple solutions, teams
5. **Optimize** - Performance, monitoring

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Advanced Topics (Future Sessions)

- **Automated testing** with Test Engine
- **Multi-solution** management
- **Branch strategies** for teams
- **Release management**
- **Monitoring & alerting**

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Key Takeaways

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Remember

<div class="highlight-box">

**DevOps is a Journey, Not a Destination**

</div>

- ✅ Start with basic export/deploy
- ✅ Add source control
- ✅ Automate what you can
- ✅ Iterate and improve
- ✅ Share knowledge with team

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Q&A

<div class="container">
<div class="col" style="justify-content: center; align-items: center;">
  <img src="content/qr.jpg" alt="QR Code" style="height:250px; box-shadow: none;">
</div>

<div class="col">
  <h3>Questions?</h3>
  <ul>
    <li>📧 Email questions</li>
    <li>🐙 GitHub: github.com/itweedie</li>
    <li>📺 YouTube: @techtweedie</li>
    <li>💼 LinkedIn: Ian Tweedie</li>
  </ul>
</div>
</div>

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Resources

- [Power Platform CLI Documentation](https://docs.microsoft.com/en-us/power-platform/developer/cli/introduction)
- [Azure DevOps Power Platform Tasks](https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.PowerPlatform-BuildTools)
- [Power Platform ALM Guide](https://docs.microsoft.com/en-us/power-platform/alm/)
- [Sample Templates](https://github.com/itweedie)

---

<section data-background-image="content/slide/slide2.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

# Thank You!

<div class="highlight-box">

**You now have the tools to automate your Power Platform solution lifecycle!**

</div>

<div class="container">
<div class="col" style="justify-content: center; align-items: center;">
  <img src="content/qr.jpg" alt="QR Code" style="height:200px; box-shadow: none;">
</div>

<div class="col">
  <p><strong>Download this presentation and templates:</strong></p>
  <p>Scan the QR code or visit:<br/>
  <small>mars.mightora.io/yourls/250627</small></p>
</div>
</div>


---

<section data-background-image="slides/LondonUG/Slide22.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">


# Link to Supporting Blog Post

- All links
- Examples 
- Slides

<a href="https://mars.mightora.io/yourls/250627" target="_blank">
  <img src="link-to-presentation.png" alt="Link to Presentation" style="height:250px; box-shadow: none; cursor: pointer;">
</a>

</section>

---

<section data-background-image="slides/LondonUG/Slide24.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">
</section>