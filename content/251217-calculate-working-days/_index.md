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

[![](https://mermaid.ink/img/pako:eNo9Td1OgzAYfZXmu2aEzjaUXixxzCfQxETwolk_ChHapWudk_DuVtw8V-ecnJ8Zjk4jSOhGdzn2ygfycmgtSXhsniY1jER5P3zi-f3P3Tevzn8QFwOhBbkkPlhDtLreA3XzjIF0ozLJuC2RzWZH9reBVdSQgfGDBhl8xAwm9OksSZh_Yy2EHidsQSaqsVNxDC20dkm1k7Jvzk33pnfR9CA7NZ6TiietAh4GZbya_l2PVqOvXbQBJKPrBsgZvkA-cJ6LohQVZYxtK0F5BleQvMjpllUlo2UpBBN8yeB7fS1yUfLlB55DXmw?type=png)](https://mermaid.live/edit#pako:eNo9Td1OgzAYfZXmu2aEzjaUXixxzCfQxETwolk_ChHapWudk_DuVtw8V-ecnJ8Zjk4jSOhGdzn2ygfycmgtSXhsniY1jER5P3zi-f3P3Tevzn8QFwOhBbkkPlhDtLreA3XzjIF0ozLJuC2RzWZH9reBVdSQgfGDBhl8xAwm9OksSZh_Yy2EHidsQSaqsVNxDC20dkm1k7Jvzk33pnfR9CA7NZ6TiietAh4GZbya_l2PVqOvXbQBJKPrBsgZvkA-cJ6LohQVZYxtK0F5BleQvMjpllUlo2UpBBN8yeB7fS1yUfLlB55DXmw)

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

[![](https://mermaid.ink/img/pako:eNo9T8tuhDAM_JXIZxbBNhEhh0pd-IJqq0qFHlJiHiokq5CoD8S_N1BanzzjmbG9QGMUgoB2NB9NL60j17LWJNRD9YiNsYoEWnc4v_7Sl-rZ2HdivCNKOiRqaFu0qBs8BEVVyLHx4zZszOwOuqyebrvhKt_GTXtsIafTPbkc2TsojpwdlBBBZwcFwlmPEUxoJ7lBWDZZDa7HCWsQoVXYSj-6Gmq9BttN6hdjpj-nNb7rQbRynAPy-zHlIDsrp382_KHQFsZrB4KyPQPEAp8g7hiLeZLxPKWUnnOehukXCJbE6ZnmGU2zjHPK2RrB9741iXnG1h-Uu2sV?type=png)](https://mermaid.live/edit#pako:eNo9T8tuhDAM_JXIZxbBNhEhh0pd-IJqq0qFHlJiHiokq5CoD8S_N1BanzzjmbG9QGMUgoB2NB9NL60j17LWJNRD9YiNsYoEWnc4v_7Sl-rZ2HdivCNKOiRqaFu0qBs8BEVVyLHx4zZszOwOuqyebrvhKt_GTXtsIafTPbkc2TsojpwdlBBBZwcFwlmPEUxoJ7lBWDZZDa7HCWsQoVXYSj-6Gmq9BttN6hdjpj-nNb7rQbRynAPy-zHlIDsrp382_KHQFsZrB4KyPQPEAp8g7hiLeZLxPKWUnnOehukXCJbE6ZnmGU2zjHPK2RrB9741iXnG1h-Uu2sV)

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

[![](https://mermaid.ink/img/pako:eNp1klFrwjAQx79KuGcVqy1N-zBQy0AYFvYyWbqHzKa2rE0kTVAnfvclOl0iLE_93f1zd_9LT7ARJYMUqlbsNzWVCr28FrzgyJxef24l3dVoyXda9degPTOSUcU-_gJzshIc7YX8avgWlfTYO8kFWXK0_i-bkeemVUyiT8q_UC3axgpQJSRaCM2VPP6KGS9vg63JgrYb3Zoh0Ntv2Yxa4TU_Q8PhE1pfYe7CwoXsBg92c618v3lAlj1q7BbM-KYpdd04ZvIJceZxbeZTL2OK2clLTxKRFTuo_0rH9wImYe8fHleZY7NL2SvkCkWFOsFV7eoS8kJ7r9GjzF32ZUt54NHEo6lHkUexR7jgMICtbEpIldRsAB2THbUIJ6ssQNWsYwWk5rNkFdWtKqDgZ3NtR_m7EN3tphR6W0Na0bY3pHf2ZbKGmjfs7lFpjDB5-ZEgDZNLDUhPcIB0GkUjPI5xEoRhOElwEA3gCGk0HgWTMInDII4xDnF0HsD3pet4hOPo_AM5xfHN?type=png)](https://mermaid.live/edit#pako:eNp1klFrwjAQx79KuGcVqy1N-zBQy0AYFvYyWbqHzKa2rE0kTVAnfvclOl0iLE_93f1zd_9LT7ARJYMUqlbsNzWVCr28FrzgyJxef24l3dVoyXda9degPTOSUcU-_gJzshIc7YX8avgWlfTYO8kFWXK0_i-bkeemVUyiT8q_UC3axgpQJSRaCM2VPP6KGS9vg63JgrYb3Zoh0Ntv2Yxa4TU_Q8PhE1pfYe7CwoXsBg92c618v3lAlj1q7BbM-KYpdd04ZvIJceZxbeZTL2OK2clLTxKRFTuo_0rH9wImYe8fHleZY7NL2SvkCkWFOsFV7eoS8kJ7r9GjzF32ZUt54NHEo6lHkUexR7jgMICtbEpIldRsAB2THbUIJ6ssQNWsYwWk5rNkFdWtKqDgZ3NtR_m7EN3tphR6W0Na0bY3pHf2ZbKGmjfs7lFpjDB5-ZEgDZNLDUhPcIB0GkUjPI5xEoRhOElwEA3gCGk0HgWTMInDII4xDnF0HsD3pet4hOPo_AM5xfHN)

---

[![](https://mermaid.ink/img/pako:eNptUNFugjAU_ZXmPqMRhFD7sERxD0uWkWxLZkZ96GgFM2hJaeOc8d9XUDY1u0895557z7k9QK64AAKbSu3ykmmDHp-ppBK5au1HoVlTogfZWNOeyK7m2YvppEtmxPqPXmT3kt-SSfakJNop_bmVBeJs356bQvLBaJUlrMpt5SbR21m5ZPv10J-j0egOrU5gcQmSAdwkTq25jpz62asyrOr2thfx0iC7cESJstL8E7C3Sf0rFFAJHhR6y4EYbYUHtdA16yAcOiUFU4paUCDuycWG2cpQoPLoxhom35Wqh0mtbFEC2bCqdcg23H3FcsvcMfUvq10gofuEQKJpvwPIAb6ATKNojCcxnvlhGAYz7Ece7J1oMvaDcBaHfhxjHOLo6MF37zoZ4zg6_gCi1ZcI?type=png)](https://mermaid.live/edit#pako:eNptUNFugjAU_ZXmPqMRhFD7sERxD0uWkWxLZkZ96GgFM2hJaeOc8d9XUDY1u0895557z7k9QK64AAKbSu3ykmmDHp-ppBK5au1HoVlTogfZWNOeyK7m2YvppEtmxPqPXmT3kt-SSfakJNop_bmVBeJs356bQvLBaJUlrMpt5SbR21m5ZPv10J-j0egOrU5gcQmSAdwkTq25jpz62asyrOr2thfx0iC7cESJstL8E7C3Sf0rFFAJHhR6y4EYbYUHtdA16yAcOiUFU4paUCDuycWG2cpQoPLoxhom35Wqh0mtbFEC2bCqdcg23H3FcsvcMfUvq10gofuEQKJpvwPIAb6ATKNojCcxnvlhGAYz7Ece7J1oMvaDcBaHfhxjHOLo6MF37zoZ4zg6_gCi1ZcI)

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

