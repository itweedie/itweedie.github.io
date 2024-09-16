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
slide_number = true
controlsTutorial = true
center = false
touch = true
[logo]
# https://reveal-hugo.dzello.com/logo-example/#/3
# src = "/techTweedie_150x150.png"
# alt = "techTweedie.github.io" # Alt text. 
# width = "100px" # Size of the file.
# Side info
# Transistion options: zoom, concave, convex, slide, fade, none
# Speed: slow, defualt, fast
+++


# **Enabling low code developers to:**
## Create custom client reports with a helping hand from Azure


---
{{< slide transition="zoom" >}}

## Introduction
- Use Power Automate to generate a custom report
- Based on Dataverse data
- Share it with our client securely via a link

---

{{< slide background="#fdfdfd" >}}

# Ian Tweedie
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

  <img src="content/qr.jpg" alt="Image" style="height:250px; box-shadow: none;">

</div>



<div class="col">
  <ul>
    <li>Power Platform Technical Consultant, Capgemini</li>
    <li>Trustee for Digital Transformation for a chain alternative provision acadmey trust</li>
    <li>Chair of a Non for Profit Nursary</li>
  </ul>
</div>

</div>


---
{{< slide background="#fdfdfd" >}}
### Ian Tweedie
##### Certifications
![height:100px](content/image-12.png)![height:100px](content/image-13.png)![height:100px](content/image-14.png)![height:100px](content/image-15.png)![height:100px](content/image-16.png)![height:100px](content/image-17.png)![height:100px](content/image-18.png)![height:100px](content/image-19.png)![height:100px](content/image-20.png)![height:100px](content/image-21.png)![height:100px](content/image-22.png)![height:100px](content/image-23.png)![height:100px](content/image-24.png)![height:100px](content/image-25.png)![height:100px](content/image-26.png)![height:100px](content/image-27.png)![height:100px](content/image-28.png)![height:100px](content/image-29.png)![height:100px](content/image-30.png)![height:100px](content/image-31.png)![height:100px](content/image-32.png)![height:100px](content/image-33.png)![height:100px](content/image-34.png)![height:100px](content/image-35.png)![height:100px](content/image-36.png)![height:100px](content/image-37.png)![height:100px](content/image-38.png)![height:100px](content/image-39.png)![height:100px](content/image-40.png)![height:100px](content/image-41s.png)![height:100px](content/image-42s.png)![height:100px](content/image-44s.png)![height:100px](content/CyberSecurityArchitect-2s.png)![height:100px](content/sc-100exams.png)


--- 
{{< slide background="#fdfdfd" >}}
## 2x Certified Power Automate Connectors
<style>
.container{
    display: flex;
}
.col{
    flex: 1;
}
</style>

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

<ul>
  <li>Calculate working day</li>
  <li>Email domain checker</li>
</ul>
</div>

<div class="col">
<img src="content/image-46.png" alt="Image" style="height:400px;">
</div>

</div>

---
{{< slide background="#fdfdfd"  >}}
## Community Content

<style>
.container{
    display: flex;
}
.col{
    flex: 1;
}
</style>

<div class="container">

<div class="col" >

  <img src="/techTweedie_150x150.png" alt="Image" style="box-shadow: none;">

</div>



<div class="col" >
  <ul>
    <li>https://techtweedie.github.io/ </li>
    <li>https://github.com/itweedie</li>
    <li>https://www.youtube.com/@techtweedie</li>
  </ul>
</div>

</div>

---
{{< slide background="#fdfdfd" transition="zoom"   >}}
## Problem 
- We are are handling high value claims
- We need to share settlement documents with our clients
- The clients must access these documents securely 

---
{{< slide  transition="zoom" >}}

## Current solution
Demo 1


---
## Problems

---
## Proposed solution
- Present it as a web link

---
## Can we
- Get power automate to make a web page for us
- Can that web page present a PDF document 


---
# Lets give it a go
Demo 2


---

{{% section %}}

# Key component

### Web Page
- Flow with HTTP Request trigger
- Set MIME Types
[Common MIME types - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
```json
content-type : text/html
```

---


## Section slide 2
 <iframe data-src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"></iframe>

{{% /section %}}

--- 

# Key component

### PDF
#### MIME Types
[Common MIME types - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
```json
Content-Type: application/pdf
```
#### Content Disposition
[Content-Disposition - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)
```json
Content-Disposition: inline
Content-Disposition: attachment; filename="filename.pdf"
```

---

# Lets see that working
Demo 3

---
# Key component

```csharp
@{triggerOutputs()['queries']}
```
---

### Overview of the Solution

<div style="transform: scale(2);">
{{< mermaid >}}
graph LR
    A[User] --> B[Flow] --> C[Dataverse]
{{< /mermaid >}}
</div>

---
### Sequence Diagram of the Solution

{{< mermaid >}}
sequenceDiagram
    autonumber
    actor User
    User->>Flow: Clicks link
    Flow->>Dataverse: Requests data
    Dataverse-->>Flow: Data returned
    Flow->>SharePoint: Requests template
    SharePoint-->>Flow: Template returned
    Flow-->Flow: Merge data in to template
    Flow-->>User: Returns PDF
{{< /mermaid >}}


---
# We still have a problem


---
## What do we need

<div style="transform: scale(1.5);">

{{< mermaid >}}
sequenceDiagram
    autonumber
    actor User
    User->>Flow: Clicks link
    Flow-->>User: Returns PDF
{{< /mermaid >}}

</div>

---

# Reverse Proxy
<div style="transform: scale(2);">
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

---
# Solution requirements
- Need to authenticate by Azure B2C
- Reverse Proxy function

---
# Where can I find this

- App Service Authentication

--- 
# Azure Function


---
# Azure function

![[P-azurefunction.png]]

---
# App Service



---
# App Service

[shibayan/AppServiceProxy.SiteExtension: Site Extension-based Reverse Proxy compatible with Azure Functions Proxies (github.com)](https://github.com/shibayan/AppServiceProxy.SiteExtension)

![[Pastedimage20240626110641.png]]

---
# App Service

![[Pastedimage20240626110751.png]]


---
# Lets look at the config
Demo 4


---
# Configuration of App Service

```JSON
{
  "$schema": "http://json.schemastore.org/proxies",
  "proxies": {
    "Demo01": {
      "matchCondition": {
        "methods": [ "GET" ],
        "route": "/Demo01/{*path}"
      },
      "backendUri": "https://prod-15.uksouth.logic.azure.com:443/workflows/7a854d30969e4158bac2b17ac15d1ad7/triggers/manual/paths/{path}"
    }
  }
} 
```

---
# Key component

## Inbound Header

```JSON
  "X-MS-CLIENT-PRINCIPAL-ID": "1ebcd192-5366-48eb-9028-04610ae1704d"
```

---
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


{{< mermaid >}}
graph LR

    A[User] --> R[Reverse Proxy] --> B[Flow] --> C[Dataverse]
{{< /mermaid >}}

---
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
# Questions



--- 

{{< slide background="#fdfdfd" transition="convex"  >}}

# Ian Tweedie
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
    <img src="content/qr.jpg" alt="Image" style="height:250px; box-shadow: none;">
    </div>
  </div>
  <div class="col" stype="justify-content: center; align-items: center;">
    <div>Feedback</div>
    <div><img src="image.png" alt="Image" style="height:250px; box-shadow: none;"></div>
  </div>
</div>

