+++
title = "Playwright for Makers – Bringing One-Click UI Tests to Model-Driven Apps & Power Pages"
description = "A 40-minute, demo-heavy walkthrough that adds the missing 'test' step to your low-code CI/CD story"
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

<style>
:root {
  --primary-color: #4B514F;
  --secondary-color: #3666FF;
  --accent-color: #742774;
  --success-color: #0D7F41;
  --info-color: #243A5E;
  --warning-color:rgb(0, 0, 0);
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


{{< slide content="common.navigate.howto" >}}

---

<section id="2-welcome" data-background-image="slides/LondonUG/Slide1.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">
</section>

<aside class="notes">
  Welcome slide
</aside>

> TODO: Welcome Slide - roatating GIF

---

## The Problem We're Solving

<div class="highlight-box">

**Making Playwright Available for Makers**

- ✅ We want to **reduce the size of the hill to climb**
- ✅ We're working with **DevOps pipelines** 
- ✅ We want to perform **UI tests**

</div>

---

## Meet Jessica: The Modern Maker

<div class="demo-box">

**Jessica's Journey**

She's a low-code developer who has been increasingly successful with Power Platform solutions.

She's followed TechTweedie YouTube videos and has created YAML pipelines...

**But there's a gap:** *How can she add testing? She's not a programmer - is there a light-touch approach?*

</div>

<aside class="notes">
  Introduce Jessica as our persona representing makers who want to add automated testing
</aside> 

---

<section  data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">


# Today's Agenda

<div class="highlight-box">

## 🚀 What We'll Cover

**8 Key Steps Over 40 Minutes**

1. **🔧 Create First Test** - Fork repo & use CodeGen *(10 mins)*
2. **📦 Install Extension** - FREE Playwright Extension *(5 mins)* 
3. **⚡ Execute Pipeline** - See tests run in DevOps *(15 mins)*
4. **📊 View Results** - Rich HTML reports *(5 mins)*
5. **🎁 Resources** - Take Home Materials *(3 mins)*
6. **❓ Q&A** - Your Questions *(2 mins)*

</div>

<aside class="notes">
  Overview of our hands-on journey from problem to solution
</aside>
</section>

---

<section data-background-image="slides/LondonUG/Slide5.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">


<aside class="notes">
  Thanks to sponsors
</aside>

</section>

---

<section data-background-image="slides/LondonUG/Slide7.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="convex">

<aside class="notes">
  iNTRO 1
</aside>


</section>


---

{{< slide content="common.about.iantweedie" >}}

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">

## Demo 1: Fork the Repository

<div class="demo-box">

**Demo**: Forking the starter template repository


</div>

<aside class="notes">
  Start with a working template that has everything pre-configured
</aside>

</section>

---

<section data-background-video="/playwright-on-power-platform/clonerepo.mp4" data-background-size="contain"  data-background-video-muted >
</section>

---

<section data-background-video="/playwright-on-power-platform/cloneintovscode.mp4" data-background-size="contain"  data-background-video-muted >
</section>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">

## Demo 2: Create Test with CodeGen

<div class="demo-box">

**Live Demo**: Using Playwright CodeGen to create a Model-Driven App test

TODO: *Placeholder for video: CodeGen creating test demo*

</div>

<aside class="notes">
  Let Playwright write the test code for you by recording your actions
</aside>

</section>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">

## Demo 3: Create App Registration

<div class="demo-box">

**Live Demo**: Using Playwright CodeGen to create a Model-Driven App test

*Placeholder for video: CodeGen creating test demo*

</div>

<aside class="notes">
  Let Playwright write the test code for you by recording your actions
</aside>

</section>


---

{{< slide content="common.appreg.dataverse" >}}

---


<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">

## Demo 4: Install Playwright Extension

<div class="demo-box">

**Demo**: Installing the FREE Playwright for Power Platform extension from Azure DevOps Marketplace

*Placeholder for video: Extension installation demo*

</div>

<aside class="notes">
  The game-changing extension that makes UI testing accessible to makers
</aside>

</section>

---

<section data-background-image="vsmarketplace-playwright.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Install Extension


</div>


---

<section data-background-video="install-playwright-extension.mp4" data-background-size="contain"  data-background-video-muted >
</section>

---

<section data-background-image="devops-org-home-screen.png" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Create Pipeline

</div>

<aside class="notes">
  Set up the pipeline that will run our tests automatically
</aside>

---

<section data-background-video="create-pipeline.mp4" data-background-size="contain"  data-background-video-muted >
</section>


---

<section data-background-video="run-pipeline.mp4" data-background-size="contain"  data-background-video-muted >
</section>

---

<section data-background-video="playwright-test.webm" data-background-size="contain"  data-background-video-muted >
</section>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Trace Viewer
### https://trace.playwright.dev/

<aside class="notes">
  The moment of truth - watching our tests run in the cloud
</aside>

---


<section data-background-video="playwright-trace-viewer.mp4" data-background-size="contain"  data-background-video-muted >
</section>


---

{{% section %}}
<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## What We've Accomplished

<div class="highlight-box">

**The Complete Recipe: Commit → Test → Deploy**

- ✅ **Used** template repository 
- ✅ **Created** UI test with CodeGen
- ✅ **Installed** FREE Playwright extension
- ✅ **Executed** automated tests in pipeline
- ✅ **Viewed** reports

</div>

<aside class="notes">
  Summary of what we've accomplished in our journey
</aside>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Recommended Project Structure

```
PlaywrightForMakersProject/
├── tests/
│   ├── model-driven-app/
│   │   └── basic-navigation.spec.js
│   ├── power-pages/
│   │   └── form-submission.spec.js
├── (leave everything else aline - for)
└── .env
```

<aside class="notes">
  Simple, organized structure that makes sense to makers
</aside>


---


## Sample Playwright Test

<div class="demo-box">

**What a Model-Driven App test looks like:**

```javascript
// Navigate to app, create record, verify result
await page.goto(process.env.MODEL_DRIVEN_APP_URL);
await page.click('[data-testid="create-button"]');
await page.fill('#name-field', 'Test Record');
await page.click('[data-testid="save-button"]');
await expect(page.locator('.success-message')).toBeVisible();
```

*Generated by CodeGen - no manual coding required!*

</div>

<div class="demo-box">

**Live Demo**: Setting up the export pipeline in Azure DevOps

- https://dev.azure.com/TechTweedie/Tutorials
- https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions


</div>

---


## Playwright Pipeline YAML

```yaml
name: PlaywrightUITests

trigger: 
- main

pool:
  vmImage: 'windows-latest'

variables:
- group: playwright-variables

steps:
- task: PlaywrightForPowerPlatform@1
  inputs:
    testDirectory: '$(Build.SourcesDirectory)/tests'
    environmentUrl: '$(TEST_ENVIRONMENT_URL)'
    serviceConnection: '$(POWER_PLATFORM_CONNECTION)'
    
- task: PublishTestResults@2
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: '**/test-results.xml'
    
- task: PublishHtmlReport@1
  inputs:
    reportDir: '$(Build.SourcesDirectory)/playwright-report'
```

<aside class="notes">
  Simple, clean pipeline that makers can understand and modify
</aside>

---


## The Power of Disposable Test Users

<div class="highlight-box">

**Created & Cleaned Up Automatically**

- 🎭 **Runtime User Creation**: Test users are created when tests run
- 🔐 **Automatic Permissions**: Users get the exact permissions they need  
- 🗑️ **Auto Cleanup**: No test data pollution in your environment
- 🔄 **Consistent Results**: Fresh environment every time

</div>

<aside class="notes">
  This is a key differentiator - no more managing test users manually
</aside>


{{% /section %}}


---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## What Makes This Different?

<div class="highlight-box">

**Playwright for Makers vs Traditional Testing**

- ❌ **Traditional**: Write complex code, manage test infrastructure  
- ✅ **Playwright for Makers**: Record actions, get code automatically
- ❌ **Traditional**: Separate test management tools
- ✅ **Playwright for Makers**: Tests run in your existing DevOps pipeline  
- ❌ **Traditional**: Manage test users and data manually
- ✅ **Playwright for Makers**: Disposable users created automatically

</div>

<aside class="notes">
  Highlight the key differentiators that make this approach special for makers
</aside>

---

{{% section %}}

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Common Questions

---

### "What if my app changes?"

<div class="highlight-box">

**Answer**: 

- **Re-record with CodeGen** - just run it again to update your tests
- **Element selectors are robust** - Playwright uses smart selectors that adapt
- **Incremental updates** - you don't have to redo everything
- **Consider taking next step** - Page object model

</div>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### "Do I need to be a developer?"

<div class="highlight-box">

**Answer**: 

- **No coding required** - CodeGen writes the tests for you
- **Point and click** - just use your app normally while recording
- **Templates provided** - start with working examples
- **Community support** - plenty of help available

</div>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

### "What about test data?"

<div class="highlight-box">

**Answer**: 

- **Reusable users** - permissions created fresh for each test run
- **Clean environments** - no test data pollution
- **Consistent results** - same starting point every time
- **Automatic cleanup** - minimum maintenance required

</div>

{{% /section %}}

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Key Takeaways

<div class="highlight-box">

**You Now Have the Complete Recipe**

**Commit → Automatic UI Tests → Deploy**

</div>

- 🎯 **Testing doesn't have to be hard** - CodeGen writes the code for you
- ⚡ **Integration is seamless** - Works with your existing DevOps pipeline  
- 🔄 **Reusable users eliminate cleanup** - Fresh permissions every time
- 📊 **Rich reports show exactly what happened** - No guessing games
- 🆓 **It's completely FREE** - No licensing costs for the extension

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Remember Jessica?

<div class="demo-box">

**She started where you are now...**

- ✅ Had working Power Platform solutions
- ✅ Played with DevOps pipelines for deployment  
- ❌ But testing was still manual and time-consuming

**Now she has:**
- 🎭 **One-click UI testing** that runs automatically
- 📈 **Confidence in deployments** with automated validation
- ⏰ **Time back in her day** for building instead of testing
- 🚀 **Happy users** who experience fewer bugs

</div>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

## Resources

- [Playwright for Power Platform Extension (FREE)](https://marketplace.visualstudio.com/items)
- [Starter Repository Template](https://github.com/itweedie/playwright-powerplatform-template)
- [CodeGen Documentation](https://playwright.dev/docs/codegen)
- [Power Platform Testing Best Practices](https://docs.microsoft.com/power-platform/testing)
- [Azure DevOps Pipeline Examples](https://github.com/itweedie/playwright-pipelines)


---

<section data-background-iframe="https://techtweedie.github.io/posts/250627-d365ppugnational/" data-background-interactive="true" data-transition="zoom">

</section>

---

<section data-background-image="slides/LondonUG/Slide3.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat">
</section>

# Questions? 

<div class="highlight-box">

**You now have everything you need to bring one-click UI testing to your Power Platform apps!**

**The missing piece of your CI/CD puzzle is complete: Commit → Test → Deploy**

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
