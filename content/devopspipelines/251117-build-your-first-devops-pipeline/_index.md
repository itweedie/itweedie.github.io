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
background-image = "slides/LondonUG/Slide3.PNG"
[logo]
# https://reveal-hugo.dzello.com/logo-example/#/3
# src = "/techTweedie_150x150.png"
# alt = "techTweedie.github.io" # Alt text. 
# width = "100px" # Size of the file.
# Side info
# Transition options: zoom, concave, convex, slide, fade, none
# Speed: slow, default, fast
+++





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


<section   data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">

# 🎯 Foundation

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

</section>

---

<section   data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">


# 🛠️ Hands-On Demos 


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

</section>

---


<section   data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">


# 🎁 Resources & Next Steps 

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

</section> 

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>


# Build Your First DevOps Pipeline for the Power Platform

</section>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">


## The Journey Starts Here

- You've exported a solution ✅
- Maybe even unpacked it ✅  
- **But what's next?** 🤔

</section>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">


## Why DevOps Matters for Power Platform

</section>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Why use DevOps

**🔒 Enhanced Security & Compliance**

**⚡ Better Performance & Scalability**

**🔄 Advanced Branching Strategies**

**🌐 Tenant Independent**

**🧪 Expand into Automated Testing**

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Why use DevOps

**🚀 No Managed Environments Required**

**🔍 Source Code Visibility**

**📚 Automated Documentation**

**✏️ Edit Solutions Between Environments**


---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Prerequisites

<div class="warning-box">

**Before We Start**

</div>

- **Dataverse System Admin** privileges
- **Azure DevOps** project with basic license
- [Azure DevOps Parallelism Request](https://aka.ms/azpipelines-parallelism-request)

---

<section data-background-image="../msBuildTools.gif" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Install Dataverse Build Tools

</div>

---

<section data-background-video="../msedge_EbORBUpsTl.mp4" data-background-video-muted data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>




---

<section data-background-image="brave_pUuYqm9d3z.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## App Registration

**Client ID:** 

**Tenant ID:** 

**Secret:** 


</div>


---

<section data-background-video="brave_ODu5vMfo0o.mp4" data-background-size="contain"  data-background-video-muted >
</section>

---

<section data-background-image="msedge_1ofQsOS12a.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Give Permission

</div>

---

<section data-background-video="msedge_eHL4W9sQv0.mp4"  data-background-size="contain" data-background-video-muted>
</section>

---

<section data-background-image="image-1.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Create service connection


</div>

---

<section data-background-video="msedge_sZ1PzZV0rU.mp4" data-background-video-muted data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat"> 
</section>

---

<section data-background-image="msedge_npQM2NGwB4.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

**Client ID:** 

**Tenant ID:** 

**Secret:** 

**Server URL:**

</div>

---

<section data-background-video="msedge_Xe9SvGfBKl.mp4" data-background-size="contain"  data-background-video-muted>
</section>

---

<section data-background-video="msedge_pD2wxdy2fZ.mp4" data-background-size="contain"  data-background-video-muted>
</section>


---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Repository Structure

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Recommended Folder Structure

```
MyPowerPlatformProject/
├── solutions/
│   ├── src/
│   │   └── MySolution/
│   └── MySolution.zip
├── pipelines/
│   ├── export-solution.yml
│   ├── build-and-deploy-solution.yml
├── documentation/
└── README.md
```

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 1: Creating Your First Pipeline

<div class="demo-box">

**Live Demo**: Setting up the export pipeline in Azure DevOps

- https://dev.azure.com/TechTweedie/Tutorials
- https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions


</div>

---



### Export Pipeline YAML

```yaml
name: $(TeamProject)_$(BuildDefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)

variables:
  - name: varPowerPlatformSPN
   # value: YOUR-OWN-VALUE-HERE 
    value: Dataverse - Backup
  - name: varSolutionName
   # value: YOUR-OWN-VALUE-HERE
    value: ProjectExpenseLogger

trigger: none

pool:
  vmImage: 'windows-latest'

steps:
- checkout: self
  persistCredentials: true
  clean: true
- task: PowerPlatformToolInstaller@2
  inputs:
    DefaultVersion: true
    AddToolsToPath: true
- task: PowerPlatformSetSolutionVersion@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(varPowerPlatformSPN)'
    SolutionName: '$(varSolutionName)'
    SolutionVersionNumber: '1.0.0.$(Build.BuildID)'
- task: PowerPlatformExportSolution@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(varPowerPlatformSPN)'
    SolutionName: '$(varSolutionName)'
    SolutionOutputFile: '$(Build.SourcesDirectory)\solutions\$(varSolutionName)_1.0.0.$(Build.BuildID)_managed.zip'
    Managed: true
    AsyncOperation: true
    MaxAsyncWaitTime: '60'
- task: PowerPlatformExportSolution@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: '$(varPowerPlatformSPN)'
    SolutionName: '$(varSolutionName)'
    SolutionOutputFile: '$(Build.SourcesDirectory)\solutions\$(varSolutionName)_1.0.0.$(Build.BuildID).zip'
    Managed: false
    AsyncOperation: true
    MaxAsyncWaitTime: '60'
- task: PowerPlatformUnpackSolution@2
  inputs:
    SolutionInputFile: '$(Build.SourcesDirectory)\solutions\$(varSolutionName)_1.0.0.$(Build.BuildID).zip'
    SolutionTargetFolder: '$(Build.SourcesDirectory)\solutions\src\$(varSolutionName)'
    SolutionType: 'Both'
- task: PowerShell@2
  inputs:
    targetType: 'inline'
    script: 'pac solution create-settings --solution-zip $(Build.SourcesDirectory)\solutions\$(varSolutionName)_1.0.0.$(Build.BuildID).zip --settings-file $(Build.SourcesDirectory)\solutions\$(varSolutionName)-settings.json'

- task: CmdLine@2
  inputs:
    script: |
      echo commit all changes
      git config user.email "$(Build.RequestedForEmail)"
      git config user.name "$(Build.RequestedFor)"
      git checkout -b main
      git add --all
      git commit -m "Latest solution changes."
      echo push code to new repo
      git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" push origin main
```

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 2: Exploring an Unpacked Solution

<div class="demo-box">

**Live Demo**: Understanding the solution structure

</div>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Demo 3: Deploy Solution

<div class="demo-box">

**Live Demo**: Deploy the solution


</div>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Deploy Solution

```yaml
name: $(TeamProject)_$(BuildDefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)

variables:
  - name: varSolutionName
   # value: YOUR-OWN-VALUE-HERE
    value: FirstPipeline
  - name: varPowerPlatformSPN
   # value: YOUR-OWN-VALUE-HERE 
    value: Dataverse - mightora

trigger: none

pool:
  vmImage: 'windows-latest'

steps:
- checkout: self
  persistCredentials: true
  clean: true
- task: PowerPlatformToolInstaller@2
  inputs:
    DefaultVersion: true
    AddToolsToPath: true

- task: PowerPlatformPackSolution@2
  inputs:
    SolutionSourceFolder: '$(Build.SourcesDirectory)\solutions\src\$(varSolutionName)'
    SolutionOutputFile: '$(Build.ArtifactStagingDirectory)\solutions\build\$(varSolutionName).zip'
- task: PowerPlatformImportSolution@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: 'Dataverse - Backup'
    Environment: 'https://mightora.crm11.dynamics.com/'
    SolutionInputFile: '$(Build.ArtifactStagingDirectory)\solutions\build\$(varSolutionName).zip'
    AsyncOperation: true
    MaxAsyncWaitTime: '60'

```

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Common Challenges & Solutions

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Challenge: Large Solutions

<div class="warning-box">

**Problem**: 

Solution export times out

**Solution**: 

- Use `AsyncOperation: true`
- Increase `MaxAsyncWaitTime`
- Split large solutions

</div>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Challenge: Connection References

<div class="warning-box">

**Problem**: 

Connections fail in target environment

**Solution**: 

- Use deployment settings files
- Parameterize connection references
- Update connections post-deployment

</div>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### Challenge: Environment Variables

<div class="warning-box">

**Problem**: 

Environment-specific values

**Solution**: 

- Use environment variables in solution
- Configure per environment
- Automate variable updates

</div>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>  

## What next

- **Automated testing** with Test Engine
- **Multi-solution** management
- **Branch strategies** for teams  
- **Release management**
- **Monitoring & alerting**

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Key Takeaways

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Remember

<div class="highlight-box">

**DevOps is a Journey, Not a Destination**

</div>

- ✅ Start with basic export/deploy
- ✅ Add source control
- ✅ Automate what you can
- ✅ Iterate and improve
- ✅ Share knowledge with team

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Resources

- [Power Platform CLI Documentation](https://docs.microsoft.com/en-us/power-platform/developer/cli/introduction)
- [Azure DevOps Power Platform Tasks](https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.PowerPlatform-BuildTools)
- [Power Platform ALM Guide](https://docs.microsoft.com/en-us/power-platform/alm/)
- [Sample Templates](https://github.com/itweedie)


---

<section data-background-iframe="https://techtweedie.github.io/posts/250627-d365ppugnational/" data-background-interactive="true" data-transition="zoom">

</section>

---

<section  data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

# Questions? 

<div class="highlight-box">

**You now have the tools to automate your Power Platform solution lifecycle!**

</div>

<div style="display: flex; justify-content: center; align-items: flex-start; gap: 40px; flex-wrap: nowrap; min-width: 480px;">
  <div style="text-align: center; flex: 0 0 auto;">
    <h4>Slides</h4>
    <a href="https://mars.mightora.io/yourls/250627" target="_blank">
      <img src="link-to-presentation.png" alt="Link to Presentation" style="width: 320px; box-shadow: none; cursor: pointer;">
    </a>
  </div>
  
  <div style="text-align: center; flex: 0 0 auto;">
    <h4>Connect</h4>
    <a href="https://iantweedie.biz" target="_blank">
    <img src="qr.jpg" alt="QR Code" style="width: 310px;">
    </a>
  </div>
</div>

---

<section data-background-image="slides/LondonUG/Slide22.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">

</section>

---

<section data-background-image="slides/LondonUG/Slide24.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">
</section>
