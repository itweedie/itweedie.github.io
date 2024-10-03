+++
title = "Are you backing up your build?"
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
controlsTutorial = false
controls = false
center = false
touch = true
draft = false
[logo]
# https://reveal-hugo.dzello.com/logo-example/#/3
# src = "/techTweedie_150x150.png"
# alt = "techTweedie.github.io" # Alt text. 
# width = "100px" # Size of the file.
# Side info
# Transistion options: zoom, concave, convex, slide, fade, none
# Speed: slow, defualt, fast
+++

## Talk 2: Are you backing up your build?
PP/D365 Virtual User Group 
3rd October 2024


---


# Are you backing up your build?



---

{{< slide transition="zoom" >}}


- Ever wondered what would happen if you lost your development environment?
- How do you feel about having to do all of that work again?
- What about if you spot a problem days later?


---

{{< slide transition="zoom" >}}


- Do you all share one development enviroument? 
- Are you only pushing managed solutions up your pipeline?
- When was the last time you exported an unmanaged solution from your enviroument? 



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

{{< slide background="#F0F8FF" >}}
### Ian Tweedie
##### Certifications
![height:100px](content/image-12.png)![height:100px](content/image-13.png)![height:100px](content/image-14.png)![height:100px](content/image-15.png)![height:100px](content/image-16.png)![height:100px](content/image-17.png)![height:100px](content/image-18.png)![height:100px](content/image-19.png)![height:100px](content/image-20.png)![height:100px](content/image-21.png)![height:100px](content/image-22.png)![height:100px](content/image-23.png)![height:100px](content/image-24.png)![height:100px](content/image-25.png)![height:100px](content/image-26.png)![height:100px](content/image-27.png)![height:100px](content/image-28.png)![height:100px](content/image-29.png)![height:100px](content/image-30.png)![height:100px](content/image-31.png)![height:100px](content/image-32.png)![height:100px](content/image-33.png)![height:100px](content/image-34.png)![height:100px](content/image-35.png)![height:100px](content/image-36.png)![height:100px](content/image-37.png)![height:100px](content/image-38.png)![height:100px](content/image-39.png)![height:100px](content/image-40.png)![height:100px](content/image-41s.png)![height:100px](content/image-42s.png)![height:100px](content/image-44s.png)![height:100px](content/CyberSecurityArchitect-2s.png)![height:100px](content/sc-100exams.png)


--- 

{{< slide background="#F0F8FF" >}}
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

![Traffic](image-3.png)

---
{{< slide background="#F0F8FF"  >}}
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
    <li>techtweedie.github.io </li>
    <li>github.com/itweedie</li>
    <li>youtube.com/@techtweedie</li>
  </ul>
</div>

</div>

---
{{< slide background="#FFF8DC" transition="zoom"   >}}
## Problem 

---
{{< slide background="#FFF8DC" background-image="image-4.png"    >}}


---

<section data-background-video="msedge_SKmWfLSaPu.mp4" data-background-video-muted>

</section>

---

## A Solution



---


## Pre-requisit 
- Dataverse System Admin
- DevOps Project Administrator
- [Azure DevOps Parallelism Request](https://aka.ms/azpipelines-parallelism-request)

---

{{< slide background-image="../msBuildTools.gif" >}}

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Install Dataverse Build Tools

</div>

---

<section data-background-video="../msedge_EbORBUpsTl.mp4" data-background-video-muted>
</section>

---

{{< slide background-image="brave_pUuYqm9d3z.png" >}}

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## App Regestration

**Client ID:** 
**Tenant ID:** 
**Secret:** 

</div>


---

<section data-background-video="brave_ODu5vMfo0o.mp4" data-background-video-muted>
</section>

---

{{< slide background-image="msedge_1ofQsOS12a.png" >}}

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Give Permission

</div>

---

<section data-background-video="msedge_eHL4W9sQv0.mp4" data-background-video-muted>
</section>

---


{{< slide background-image="image-1.png" >}}

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Create service connection


</div>

---

<section data-background-video="msedge_sZ1PzZV0rU.mp4" data-background-video-muted>
</section>

---

{{< slide background-image="msedge_npQM2NGwB4.png" >}}

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

**Client ID:** 

**Tenant ID:** 

**Secret:** 

**Server URL:**

</div>

---

<section data-background-video="msedge_Xe9SvGfBKl.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_pD2wxdy2fZ.mp4" data-background-video-muted>
</section>

---


{{< slide background-image="image-1.png" >}}

<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Almost ready to go


</div>

---

<section data-background-video="../msedge_9mWYFGXubQ.mp4" data-background-video-muted>

</section>

---

<section data-background-video="../msedge_hHqXmiCb4i.mp4" data-background-video-muted>

</section>


---

<section data-background-video="../msedge_JIT24VboQm.mp4" data-background-video-muted>

</section>

---

<section data-background-video="../msedge_BlsWA591UT.mp4" data-background-video-muted>

</section>

---

<section data-background-video="../msedge_I0OyKYAnmJ.mp4" data-background-video-muted>

</section>

---

<section data-background-video="msedge_HcPwHJ3Jl2.mp4" data-background-video-muted>

</section>


---

{{< slide background-image="msedge_Q9M1vlyShk.png" >}}


<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## We need to grab some more information
</div>




---

<section data-background-video="msedge_roryj0x4UE.mp4" data-background-video-muted>

</section>

---

<section data-background-video="msedge_5lVBUbV1eX.mp4" data-background-video-muted>

</section>

---
{{< slide background-image="msedge_cOoygVqsiJ.png" >}}


<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## Powershell

```powershell
echo commit all changes
git config user.email "$(Build.RequestedForEmail)"
git config user.name "$(Build.RequestedFor)"
git checkout -b main
git add --all
git commit -m "Latest solution changes."
echo push code to new repo
git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" push origin main      
```
</div>

---


<section data-background-video="msedge_tkGoo5YKFh.mp4" data-background-video-muted>

</section>


---


<section data-background-video="msedge_4XHoszBuKm.mp4" data-background-video-muted>

</section>


---
{{< slide background-image="msedge_AKfZ1wCSnn.png" >}}


<div style="background-color:  #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

## What error did we get

```CMD
You need the Git 'GenericContribute' permission to perform this action.
```

</div>

---

<section data-background-video="msedge_2YV6qxtrCc.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_kb0A45fFQH.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_9aHWdBDUYK.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_vUV2wXSN24.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_GQPGHdkLZy.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_A42h9JBHx2.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_EficgKeOrc.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_rDPbVsqvt7.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_UTkgQeXaaI.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_7xEESPsvQT.mp4" data-background-video-muted>
</section>


---

{{< slide background-image="msedge_smTMgOfKOa.png" >}}

<div style="background-color: #F0F8FF; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

![alt text](image.png)

for **Data Model Enhanced** use Version **2**

</div>

---

<section data-background-video="msedge_lCGpcjkr1O.mp4" data-background-video-muted>
</section>

---

<section data-background-video="msedge_dELkUAQUCp.mp4" data-background-video-muted>
</section>

---

---

{{< slide  background="F0FFF0" >}}
# Questions



--- 

{{< slide background="F0FFF0" >}}

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
    <img src="/qr.jpg" alt="Image" style="height:250px; box-shadow: none;">
    </div>
  </div>
  <div class="col" stype="justify-content: center; align-items: center;">
    <div>Feedback</div>
    <div><img src="/feedback.png" alt="Image" style="height:250px; box-shadow: none;"></div>
  </div>
    <div class="col" stype="justify-content: center; align-items: center;">
    <div>Presentation</div>
    <div><img src="image-2.png" alt="Image" style="height:250px; box-shadow: none;"></div>
  </div>
</div>
