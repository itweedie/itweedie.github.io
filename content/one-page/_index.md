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
controlsTutorial = false
controls = false
center = false
touch = true
draft = false
background-image = "../slides/LondonUG/Slide3.PNG"
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
{{< slide content="common.about.iantweedie" >}}
