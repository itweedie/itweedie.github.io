+++
title = "Calculate Working Days"
description = "Caclulate working days in Dev"
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
  font-family: sans-serif;
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

## Calculate Working Day

</br>

### In Power Automate

<aside class="notes">
  Time machine help, it works on harts
</aside>

---

## Showcase how we can calculate working day

<aside class="notes">

And how we can calculate working days in Power automate to help us solve them!


</aside> 

---

<section id="2-welcome" data-background-image="/ppt/me/Slide1.PNG" data-background-size="contain" data-background-position="center" data-background-repeat="no-repeat" data-transition="zoom">
</section>

---

## Pre-requisites

<div class="demo-box">

- Power Automate Premium

</div>

<aside class="notes">
  The pipeline I am going to use today continues on from another presentation last year, link to that is here. 
</aside>

</section>

---

# What are we going to use

![alt text](image-1.png)

Calculate Working Day

- [Link 1 - Website](https://mightora.io/tools/power-automate-connectors/calculate-working-day/)
- [Link 2 - Blog Post](https://techtweedie.github.io/posts/240924-calculate-working-day/)
- [Link 3 - Microsoft Learn](https://learn.microsoft.com/en-us/connectors/calculateworkingday/)

---

# Problem 1

### We have a shared mailbox
### and we want to make sure we deal with emails within 10 working days
### our working days are Monday to Thursday excluding bank holidays in Scotland

---

## The Solution

{{< mermaid >}}
flowchart TD
    A[Email arrives]
    B[Work out 10 working days]
    C[Set flag]

    A --> B
    B --> C
{{< /mermaid >}}


---

<section data-background-video="1.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">

</section>

---

<section data-background-video="2.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

---

#### Parameters

| Name                             | Required | Type    |
| -------------------------------- | -------- | ------- |
| Date                             | True     | string  |
| Working Days                     | True     | string  |
| Non working days                 |          | string  |
| In X working days                | True     | integer |
| Filter bank holidays for Country |          | string  |

---
#### Returns

| Name                        | Type            |
| --------------------------- | --------------- |
| Input Date                  | string          |
| Is input date a working day | boolean         |
| Working Days                | array of string |
| Working Days in Words       | array of string |
| Working Days in Words       | array of string |
| Next working day            | string          |
| Next working day            | integer         |
| Working day in x days       | string          |
| First Working day of month  | string          |
| Last working day of month   | string          |

---

```json
{
  "flag": {
    "flagStatus": "flagged",
    "startDateTime": {
      "dateTime": "YYYY-MM-DD",
      "timeZone": "UTC"
    },
    "dueDateTime": {
      "dateTime": "YYYY-MM-DD",
      "timeZone": "UTC"
    }
  }
},
```

Link 4:
[followupFlag resource type - Microsoft Graph v1.0 | Microsoft Learn](https://learn.microsoft.com/en-us/graph/api/resources/followupflag?view=graph-rest-1.0)

---

<section data-background-video="3.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>


---

**PATCH** `https://graph.microsoft.com/v1.0/users/{mailbox}/messages/{id}`

**PATCH** `https://graph.microsoft.com/v1.0/users/demo@tweed.technology/messages/{id}`

Link 5: [Update message - Microsoft Graph v1.0 | Microsoft Learn](https://learn.microsoft.com/en-us/graph/api/message-update?view=graph-rest-1.0&tabs=http)

---

<section data-background-video="4.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

---

## Test

---

<section data-background-video="5.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

---

## Oh no!!!! 

---

<section data-background-video="6.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

---

<section data-background-video="7.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

---

# Problem 2

### We run an office equipment rentals business
### We bill based on the number of working days 

---

## The Solution

{{< mermaid >}}
flowchart TD
    A[Record changes]
    B[Work out date difference]
    C[Calculate cost]
    D[Update Table]

    A --> B
    B --> C
    C --> D
{{< /mermaid >}}

---

#### Parameters

| Name             | Required | Type   |
| ---------------- | -------- | ------ |
| Non working days |          | string |
| Working Days     | True     | string |
| Date             | True     | string |
| Date             | True     | string |

---

#### Returns

| Name                   | Type            |
| ---------------------- | --------------- |
| Start Date             | string          |
| End Date               | string          |
| Total Days             | integer         |
| Working Days Count     | integer         |
| Working Days           | array of string |
| Working Days in Words  | array of string |
| Working Days in Words  | array of string |

---

<section data-background-video="P2-1.mp4" data-background-size="contain"  data-background-video-muted class="speed-2x">
</section>

---

## What We've Accomplished

We have using low code being able to Calculate Working Days

- ✅ Date Difference
- ✅ Date In X Working Days

---

{{< mermaid >}}
flowchart LR

    subgraph Inputs
        A[Date]
        B[Non working days]
        C[In X working days]
        D[Filter bank holidays for Country]
    end

    X[Calculate Working Day]

    A --> X
    B --> X
    C --> X
    D --> X

    subgraph Outputs
        O1[Is input date a working day]
        O2[Working Days]
        O3[Working Days in Words]
        O5[Next working day]
        O7[Working day in x days]
        O8[First Working day of month]
        O9[Last working day of month]
    end

    X --> O1
    X --> O2
    X --> O3
    X --> O5
    X --> O7
    X --> O8
{{< /mermaid >}}

---

{{< mermaid >}}
flowchart LR

    subgraph Inputs
        A[Start Date]
        B[End Date]
        C[Non working days]
    end

    X[Calculate Working Day]

    A --> X
    B --> X
    C --> X

    subgraph Outputs
        O1[Total Days]
        O2[Working Day Count]
    end

    X --> O1
    X --> O2
{{< /mermaid >}}

---

## Where can you get this

- [Link 1 - Website](https://mightora.io/tools/power-automate-connectors/calculate-working-day/)

---

<section data-background-iframe="https://mightora.io/" data-background-interactive>

</section>

---


## Feedback 

![alt text](image.png)

[https://go.iantweedie.biz/feedback](https://forms.office.com/Pages/ResponsePage.aspx?id=n511Y8q_Uk-umI8vHXvBc60TVgv-cUxLnaO4MPbfBgdUMVRUTlBaTU0xMU1SVVBIMlNTTUhKN1NFRS4u&re982824e45e347f88c95c74e255953f2=Calculate%20Working%20Day%20on%20M365%20Community%20Call%20on%2017%20Dec%202025)

