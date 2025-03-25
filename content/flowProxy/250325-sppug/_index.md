+++
title = "CustomReports"
description = "A Hugo theme for creating Reveal.js presentations"
outputs = ["Reveal"]
[reveal_hugo]
# Theme - https://revealjs.com/themes/
custom_theme = "css/techTweedieLight.css"
# theme = "white"
margin = 0.2
highlight_theme = "github"
transition = "convex"
transition_speed = "default"
slide_number = false
controls = false
controlsTutorial = false
center = false
touch = true
[logo]
# https://reveal-hugo.dzello.com/logo-example/#/3
src = "/techTweedie_150x150.png"
alt = "techTweedie.github.io" # Alt text. 
width = "100px" # Size of the file.
# Side info
# Transistion options: zoom, concave, convex, slide, fade, none
# Speed: slow, defualt, fast
# use for gif data-background-image 
# use for gif data-background-size
+++
<style>
.container {
    display: block;
    text-align: center; /* Center-aligns content */
}
.col{
    flex: 1;
}
.col ul li {
    position: relative;
    padding-left: 30px; /* Space for SVG icon */
    margin-bottom: 10px; /* Space between items */
    font-size: 1.1em; /* Slightly larger text */
    color: #333; /* Custom text color */
}
.cola img {
    display: block;
    margin: 0 auto; /* Centers image */
    width: 400px; /* Set desired width */
    height: auto; /* Maintains aspect ratio */
}
.cola ul {
    list-style-type: none; /* Removes default bullets */
    padding: 0; /* Removes default padding */
    margin-top: 15px; /* Space between image and list */
}
.cola ul li {
    position: relative;
    padding-left: 30px; /* Space for SVG icon */
    margin-bottom: 10px; /* Space between items */
    font-size: 1.1em; /* Slightly larger text */
    color: #333; /* Custom text color */
}
.cola ul li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px; /* Width of SVG icon */
    height: 24px; /* Height of SVG icon */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>');
    background-size: contain;
}

.aboutMe ul {
  list-style-type: none;
  padding: 0;
}

.aboutMe li {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  width: 130%; /* Adjust the width as needed */
}

.bulletTwo ul {
  list-style-type: none;
  padding: 0;
}

.bulletTwo li {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%; /* Adjust the width as needed */
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

.typing {
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid orange;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: orange; }
}
</style>



<aside class="notes">
  Press the S key
</aside>

---

{{< slide transition="zoom"  background="#1d345d" >}}

<h1 style="color: white; font-weight: bold; "> Enabling low code developers to </h1>

<aside class="notes">
  Enable low code developers to
</aside>

---
{{< slide transition="zoom"  background="#F0F8FF" >}}

## Create custom client reports with a helping hand from Azure


<aside class="notes">

- Create custom reports
- with help from azure

</aside>

---
{{< slide transition="zoom"  background="#F0F8FF" >}}

## Introduction

<div class="col bulletTwo">
  <ul>
    <li class="fragment">Share an Architecture pattern today</li>
    <li class="fragment">In this example:</li>
    <li class="fragment">Use Power Automate to generate a custom report</li>
    <li class="fragment">Based on Dataverse data</li>
    <li class="fragment">Share it with our client securely via a link</li>
  </ul>
</div>

<aside class="notes">

- by 3
- Share Pattern
- Use power automate 
- generate custom report
- based on dataverse
- share it securely 

</aside>

---

{{< slide background="#fdfdfd" >}}

# Ian Tweedie


<div class="container">

<div class="col" style="justify-content: center; align-items: center;">

  <img src="content/qr.jpg" alt="Image" style="height:250px; box-shadow: none;">

</div>



<div class="col aboutMe">
  <ul>
    <li class="fragment">Senior Technical Consultant, Capgemini</li>
    <li class="fragment">Trustee for Digital Transformation for a £22 million non for profit</li>
    <li class="fragment">Chair of an £750k non for profit</li>
  </ul>
</div>

</div>

<aside class="notes">

- Senior Technical Consultant
- Trustee
- Chair

</aside>

---
{{< slide background="#F0F8FF" >}}
### Ian Tweedie
##### Certification Wall
![height:100px](content/image-12.png)![height:100px](content/image-13.png)![height:100px](content/image-14.png)![height:100px](content/image-15.png)![height:100px](content/image-16.png)![height:100px](content/image-17.png)![height:100px](content/image-18.png)![height:100px](content/image-19.png)![height:100px](content/image-20.png)![height:100px](content/image-21.png)![height:100px](content/image-22.png)![height:100px](content/image-23.png)![height:100px](content/image-24.png)![height:100px](content/image-25.png)![height:100px](content/image-26.png)![height:100px](content/image-27.png)![height:100px](content/image-28.png)![height:100px](content/image-29.png)![height:100px](content/image-30.png)![height:100px](content/image-31.png)![height:100px](content/image-32.png)![height:100px](content/image-33.png)![height:100px](content/image-34.png)![height:100px](content/image-35.png)![height:100px](content/image-36.png)![height:100px](content/image-37.png)![height:100px](content/image-38.png)![height:100px](content/image-39.png)![height:100px](content/image-40.png)![height:100px](content/image-41s.png)![height:100px](content/image-42s.png)![height:100px](content/image-44s.png)![height:100px](content/CyberSecurityArchitect-2s.png)![height:100px](content/sc-100exams.png)


<aside class="notes">

- Senior Technical Consultant
- Trustee
- Chair

</aside>

--- 
{{< slide background="#F0F8FF" >}}
## Community Tools


<div class="container">

  <div class="col">
    <div style="display: flex; justify-content: center; align-items: center;">
      <div style="flex: 20%; text-align: center;">
        <img src="content/image-45.png" alt="Image" style="height:50px; box-shadow: none;">
      </div>
      <div style="flex: 80%; text-align: left;">
        <img src="content/mightora-io-logo3.png" alt="Image" style="height:30px; box-shadow: none;">
      </div>
    </div>
    <div class="col aboutMe">
    <ul>
      <li class="fragment">Calculate working day</li>
      <li class="fragment">Email domain checker</li>
      <li class="fragment">SharePoint Connector using SPN</li>
      <li class="fragment">Email Connector using SPN</li>
      <li class="fragment">Dataverse 4 Teams Local ALM Tool</li>
      <li class="fragment">DevOps Extension: Power Apps Solution Documentation Tool</li>
      <li class="fragment">Around 500k hits a month</li>
    </ul>
    </div>
  </div>

  <div class="col">
  
  </div>

</div>

---
{{< slide background="#F0F8FF"  >}}


<style>


</style>

<div class="container">
    <div class="cola">
        <img src="/techTweedie_logo.png" alt="Image" style="box-shadow: none;">
        <br>
        <h2> Community Content </h2>
        <ul>
            <li><a href="https://techtweedie.github.io/"> techtweedie.github.io</a></li>
            <li><a href="https://www.youtube.com/@techtweedie"> youtube.com/@techtweedie</a></li>
        </ul>
    </div>
</div>

<aside class="notes">

- by 8

</aside>

---
{{< slide background="#FFF8DC" transition="zoom"   >}}

## Problem 

- **WE ARE** handling high value claims

- **WE NEED TO** share settlement documents with our clients

- **WE MUST** share these documents securely 

---

{{% section %}}
{{< slide  transition="zoom" background="#FFF8DC" id="demo-1-splash" >}}

## Current solution

Live Demo 1

1. <a href="https://techtweedie.crm11.dynamics.com/main.aspx?appid=f49d2c8c-1232-ef11-8e4e-6045bd0d261b&pagetype=entityrecord&etn=techtwed_settlement&id=3272841e-6c32-ef11-8e4e-6045bd0d261b&formid=44e105a1-df32-ef11-8e4e-6045bd0d261b" target="_blank" rel="noopener noreferrer">Settlement App</a>
2. <a href="https://outlook.office365.com/mail/demo@Tweed.technology/" target="_blank" rel="noopener noreferrer">Check email</a>
3. <a href="https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/25bc4d07-1da5-4c21-86bc-5ca9c7f9e994/view" target="_blank" rel="noopener noreferrer">Power automate flow</a>
4. <a href="https://tech-tweedie-demo-site-1.powerappsportals.com/Settlement-App/" target="_blank" rel="noopener noreferrer">Power Pages Portal</a>
5. <a href="https://tweedtech.sharepoint.com/sites/TechTweedieDemoSite1" target="_blank" rel="noopener noreferrer">SharePoint Site</a>
6. <a href="https://tweedtech.sharepoint.com/:w:/r/sites/TechTweedieDemoSite1/_layouts/15/Doc.aspx?sourcedoc=%7B40B28EC8-4A09-4C95-9A79-8D1F83BEC39D%7D&file=Document.docx&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer">Document</a>

---

<section data-background-size="contain"  id="demo-1-video-a"  data-background-video="flowProxy-demo1-screen1.mp4" data-background-video-muted>
</section>

---

<section data-background-size="contain"  id="demo-1-video-b"  data-background-video="flowProxy-demo1-screen2.mp4" data-background-video-muted>
</section>

{{% /section %}}

---

{{< slide background="#FFF8DC" >}}

## Problems

<div class="container">
  

  <div class="col">
    <p class="fragment">Slow</p>
    <p class="fragment">Inaccessible</p>
    <p class="fragment">Clunky</p>
    <p class="fragment">Click and wait...</p>
  </div>

</div>

---

{{< slide background="#FFF8DC" >}}
## Proposed solution
- Present it as a web link

---

{{< slide background="#FFF8DC" >}}
## Can we

- Get power automate to make a web page for us

- Can that web page present a PDF document 


---

{{< slide  id="demo-2-splash" background="#FAEBD7" transition="zoom" >}}
{{% section %}}

# Lets give it a go
Live Demo 2

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">
    <img src="image-5.png" alt="alt text" style="width: 300px; height: auto;">
  </div>
  <div style="flex: 1;">
    <ol>
      <li><a href="https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/25b74e7e-6734-4e38-9847-dc230c444aeb/view" target="_blank">Web Page Flow</a></li>
      <li><a href="https://prod-16.uksouth.logic.azure.com/workflows/c59c21c2e87b4267a3f51327e8b0a9c6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4o_YOe9rzXb6InvBIeOh3pM9GLXVfQOuR1GWuI81bVs" target="_blank">Try it out</a></li>
    </ol>
  </div>
</div>

---

<section data-background-size="contain"  data-background-video="flowProxy-demo2-screen1.mp4" id="demo-2-video-a" data-background-video-muted>
</section>

{{% /section %}}


---

{{% section %}}

## View the flow runs 

<a href="https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/25b74e7e-6734-4e38-9847-dc230c444aeb/view" target="_blank">View</a>


---

<section data-background-size="contain"  data-background-video="flowProxy-demo2-screen2.mp4" data-background-video-muted>
</section>

{{% /section%}}


---

{{% section %}}

{{< slide  background="#FAEBD7" >}}
## Key component

### Web Page

- Flow with HTTP Request trigger
- Response Headers 

**content-type : text/html**

```json
content-type : text/html
```

- Full list can be found [Common MIME types - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)


---


<section data-background-size="contain"  data-background-video="mime-types.mp4" data-background-video-muted>
</section>



{{% /section %}}

---

{{< slide id="demo-3-splash" transition="zoom" background="#FAEBD7" >}}

# Lets give it a go
Live Demo 3

<div style="display: flex; align-items: center;">
  <div style="flex: 1; text-align: center;">
    <img src="image-6.png" alt="alt text" style="width: 300px; height: auto;">
  </div>
  <div style="flex: 1; padding-left: 20px;">
    <ol>
      <li><a href="https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/53909a74-b04d-4ffd-9983-9b73d095e10c/view" target="_blank" rel="noopener noreferrer">PDF Flow</a></li>
      <li><a href="https://prod-21.uksouth.logic.azure.com/workflows/5ba0def50b7e43498b887e8aac99bfae/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wt-FxeMbuDM_UwFENGNdX-BGwFYX-u7hWtIqjw4Z5xQ" target="_blank" rel="noopener noreferrer">Try it out</a></li>
    </ol>
  </div>
</div>



---

<section id="demo-3-video-screen1" data-background-size="contain"  data-background-video="flowProxy-demo3-screen1.mp4" data-background-video-muted>
</section>


---

## View the flow run

<a href="https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/53909a74-b04d-4ffd-9983-9b73d095e10c/view" target="_blank">View</a>


--- 


{{< slide background="#FAEBD7" >}}
## Key component

### PDF

Response Headers 

**Content-Type: application/pdf**

```json
Content-Type: application/pdf
```
[Common MIME types - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)


**Content-Disposition: inline**

**Content-Disposition: attachment; filename="filename.pdf"**

```json
Content-Disposition: inline
Content-Disposition: attachment; filename="filename.pdf"
```
[Content-Disposition - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

---

{{< slide background-image="msedge_rO7rHF3uIl.gif" >}}


---

<img src="image-14.png" alt="alt text" style="width: 100%; height: auto;">

---

{{< slide  transition="zoom" >}}
{{% section %}}
# Lets see that working
Live Demo 4

<div style="display: flex; align-items: center;">
  <!-- Left Column: Links -->
  <div style="flex: 1; padding-right: 20px;">
    <ul>
      <li><a href="https://techtweedie.crm11.dynamics.com/main.aspx?appid=f49d2c8c-1232-ef11-8e4e-6045bd0d261b&pagetype=entityrecord&etn=techtwed_settlement&id=3272841e-6c32-ef11-8e4e-6045bd0d261b&formid=44e105a1-df32-ef11-8e4e-6045bd0d261b" target="_blank" rel="noopener noreferrer">View Form</a></li>
      <li><a href="https://tech-tweedie-demo-site-1.powerappsportals.com/Settlement-App/" target="_blank" rel="noopener noreferrer">Power Pages Portal</a></li>
      <li><a href="https://prod-07.uksouth.logic.azure.com/workflows/c9d2fb07972942a097d16a9ce324097d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BAtG0IUyjXSVsMyeXTpq3GI7Zj4SGP6-ztUD4Rj_v58&row=SET-1000-R2R2" target="_blank" rel="noopener noreferrer">Try it out</a></li>
    </ul>
  </div>

  <!-- Right Column: Image -->
  <div style="flex: 1; text-align: center;">
    <img src="image-7.png" alt="alt text" style="width: 500px; height: auto;">
  </div>
</div>

<aside class="notes">
  go in to Queys 
</aside>

---

{{< slide background-image="brave_GPF5DnIcsA.gif" >}}

---

{{< slide background-image="brave_dBvaPf9yIY.gif" >}}

{{% /section %}}




---

## View the Flow 

<a href="https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/a999aa73-d908-47b5-82c5-311a8814e270/view" target="_blank">View the flow</a>

---

{{< slide background="#F0F8FF" >}}
## Key component

**@{triggerOutputs()['queries']}**

```csharp
@{triggerOutputs()['queries']}
```
---

{{< slide background="#F0F8FF" >}}
### Overview


<div style="margin: 20px 0; transform: scale(2); margin-top: 150px;">

{{< mermaid >}}
graph LR
    A(User) --> B(Flow) --> C(Dataverse)
{{< /mermaid >}}

</div>

---

{{< slide background="#F0F8FF" >}}
### Sequence 

<div style="margin: 20px 0; transform: scale(1.2); margin-top: 50px;">

{{< mermaid >}}
sequenceDiagram
    autonumber
    actor User
    User->>Flow: Clicks link HTTP
    Flow->>Dataverse: Requests data
    Dataverse-->>Flow: Data returned
    Flow->>SharePoint: Requests template
    SharePoint-->>Flow: Template returned
    Flow-->Flow: Merge data in to template
    Flow-->>User: Returns PDF
{{< /mermaid >}}

</div>


---

{{< slide background="#F0F8FF" >}}
# We still have a problem


---

{{< slide background="#F0F8FF" >}}
### What do we need?
    
  <div style="transform: scale(1.3); margin-top: 150px;">
  
  {{< mermaid >}}
  sequenceDiagram
      autonumber
      actor User
      User->>Flow: Clicks link
      Flow-->>User: Returns PDF
  {{< /mermaid >}}
  </div>




---

{{< slide background="#F0F8FF" >}}
### Reverse Proxy
<div style="transform: scale(1.3);  margin-top: 100px;">
{{< mermaid >}}
sequenceDiagram
    autonumber
    actor User
    User->>Reverse-Proxy: Clicks link
    Reverse-Proxy-->>Reverse-Proxy: Authentication
    Reverse-Proxy->Flow: Forwards Request
    Flow-->>Reverse-Proxy: Returns PDF
    Reverse-Proxy-->>User: Returns PDF
{{< /mermaid >}}
</div>

<aside class="notes">
  easy to wrap with authentication 
</aside>

---

{{< slide background="#F0F8FF" >}}
### Solution requirements

- Authenticate by Azure B2C

- Reverse Proxy function

---

{{< slide background="#F0F8FF" >}}
### Where can I find this

<style>
.container{
    display: flex;
}
.col{
    flex: 1;
}
</style>

<div class="container">

<div class="col" style="justify-content: center; align-items: center;">

  <img src="image-1.png" alt="Image" style="height:80%; box-shadow: none;">

</div>



<div class="col">
  Out of the box Authentication 
</div>

</div>



---

{{< slide background-image="msedge_TeQ2S2Q5TZ.gif" >}}

<div style="background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

### Azure function
- Forwards all headers received from the incoming request.
- Adds custom header Flow-Key (from environment variables).
- Handles GET, POST, OPTIONS method.
- Appends query parameters from the incoming request to the external URL.

</div>

```

FLOW_URL=https://prod-21.uksouth.logic.azure.com/workflows/your-logic-app-url
FLOW_KEY=your-flow-key-value

```

---

{{< slide  transition="zoom"  background="#F0F8FF" >}}

### Lets deploy it

1. Access the Repo
2. Press Deploy 
3. Follow the on screen instructions

<div>
  <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fitweedie%2FAzureFunction-PowerAutomateProxy%2Frefs%2Fheads%2Fmain%2Fazuredeploy.json" target="_blank">
    <img src="https://aka.ms/deploytoazurebutton" />
  </a>
</div>

<div><img src="image-9.png" alt="Image" style="height:200px; box-shadow: none;"></div>


---

{{< slide  transition="zoom"  background="#F0F8FF" >}}

### Lets deploy it

1. Access the Repo
2. Press Deploy 
3. Follow the on screen instructions
4. Add Environment variables

```

FLOW_URL=https://prod-15.uksouth.logic.azure.com/workflows/7a854d30969e4158bac2b17ac15d1ad7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FrLhWsuldO9AiPgF4ztcjuvjsSrBrJtlD5Mf17jjU_I 

FLOW_KEY=ABC123

```

---


{{< slide  transition="zoom"  background="#F0F8FF" >}}
### Lets deploy it

1. Access the Repo
2. Press Deploy 
3. Follow the on screen instructions
4. Add Environment variables
5. Setup Azure B2C

---

<section data-background-size="contain"  data-background-video="flowProxy-azureFunction-screen4.mp4" data-background-video-muted>
</section>

---
{{< slide  transition="zoom"  background="#F0F8FF" >}}

# Lets see that working
Demo 5

---

{{< slide  background="#FAEBD7" >}}
## Live Demo 5
<a href="https://techtweedie.crm11.dynamics.com/main.aspx?appid=f49d2c8c-1232-ef11-8e4e-6045bd0d261b&pagetype=entityrecord&etn=techtwed_settlement&id=3272841e-6c32-ef11-8e4e-6045bd0d261b&formid=4225fbe1-7174-ef11-a670-000d3a0d2d37" target="_blank">View the form</a>
<a href="https://tech-tweedie-demo-site-1.powerappsportals.com/Settlement-App/" target="_blank" rel="noopener noreferrer">Power Pages Portal</a>

---

## Try it out

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">
    <a href="https://flowproxy1.azurewebsites.net/api/proxy/?row=SET-1000-R2R2" target="_blank">
      <img src="image-8.png" alt="alt text" style="width: 500px; height: auto;">
    </a>
  </div>
  <div style="flex: 1; padding-left: 20px;">
    <p><strong>Username:</strong></p>
    <p>demo@tweed.technology</p>
    <p><strong>Password:</strong></p>
    <p>TechTweedie1!</p>
  </div>
</div>

---

## View the flow 

<a href="https://make.powerapps.com/environments/b50bfa1f-d077-e56f-aeaa-b9f92d3b79ad/solutions/d3bfeafe-1132-ef11-8e4e-6045bd0d261b/objects/cloudflows/db720441-2e33-ef11-8e4e-6045bd0d261b/view" target="_blank">View the flow</a>




---

{{< slide  background="#FAEBD7" >}}
# Key component

## Inbound Header

**X-MS-CLIENT-PRINCIPAL-ID**

```JSON
  "X-MS-CLIENT-PRINCIPAL-ID": "1ebcd192-5366-48eb-9028-04610ae1704d"
```

---

{{< slide  background="#FAEBD7" >}}
# Key component

## Fetch XML
```XML
<fetch>
  <entity name="techtwed_settlement">
    <attribute name="techtwed_name" />
    <attribute name="techtwed_settlementid" />
    <filter>
      <condition attribute="techtwed_name" operator="eq" value="SET-1001-T8B5" />
    </filter>
    <link-entity name="contact" from="contactid" to="techtwed_customer" alias="contact">
      <link-entity name="adx_externalidentity" from="adx_contactid" to="contactid" alias="externalid">
        <filter>
          <condition attribute="adx_username" operator="eq" value="1ebcd192-5366-48eb-9028-04610ae1704d" />
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>
```

---



# High Level Solution

<img src="https://www.plantuml.com/plantuml/png/NOtD2i8m40RlUOebzxo2j23YCOVU98VLBbLCJ4WsrX_wxX9R9FQuiyCtJMACd9qL8k3fYWE1R5yvaeIt03Zih1z1H_zu6Z5LZlOZHMX3IBDOt8LbzWwPp4nxP3nY8f1RPBnJJClqzpkLqNtNQL3nCfnPRVwJzL4fwz8QW2hMBsY4QEZMPsS_" alt="Image" style="height:500px; box-shadow: none;">

---

{{< slide  background="#FAEBD7" >}}
# Sequence Diagram

{{< mermaid >}}
sequenceDiagram
    autonumber
    actor User

    User->>Reverse-Proxy: Click Link
    Reverse-Proxy->>Reverse-Proxy: Authentication
    Reverse-Proxy->>Flow: Forwards request
    Flow->>Dataverse: Requests data
    Dataverse-->>Flow: Data returned
    Flow->>SharePoint: Requests template
    SharePoint-->>Flow: Template returned
    Flow-->Flow: Merge data in to template
    Flow->>Reverse-Proxy: Returns PDF
    Reverse-Proxy->>User: Returns PDF
{{< /mermaid >}}


---


{{< slide  background="F0FFF0" >}}
# Where have I used this Pattern

- Document Generation
- WiFi Network Login
- Register Interest 
- Login to a legacy systems
- Door code generation 

---


{{< slide  background="F0FFF0" >}}
# Questions



<style>
.container{
    display: flex;
}
.col{
    flex: 1;
}
</style>

<div class="container">
  <div class="col" stype="justify-content: center; align-items: center;">
    <div>
    Keep in touch
    </div>
    <div>
    <img src="content/qr.jpg" alt="Image" style="height:200px; box-shadow: none;">
    </div>
  </div>
  <div class="col" stype="justify-content: center; align-items: center;">
    <div>Feedback</div>
    <div><img src="image.png" alt="Image" style="height:200px; box-shadow: none;"></div>
  </div>
    <div class="col" stype="justify-content: center; align-items: center;">
    <div>Presentation</div>
    <div><img src="image-13.png" alt="Image" style="height:200px; box-shadow: none;"></div>
  </div>
      <div class="col" stype="justify-content: center; align-items: center;">
    <div>Github Repo</div>
    <div><img src="image-9.png" alt="Image" style="height:200px; box-shadow: none;"></div>
  </div>      
 
</div>

