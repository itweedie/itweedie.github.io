+++
title = "Multiplex Master Presentation"
description = "Master presentation with multiplex control"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
slide_number = true
transition = "slide"

[reveal_hugo.multiplex]
secret = "1751711897271988955"
id = "a1b44278da16272f"
url = "https://reveal-multiplex.glitch.me/"

[[reveal_hugo.plugins]]
name = "MultiplexMaster"
source = "plugin/multiplex/master-combined.js"

+++

# Multiplex Master Presentation

This is the presentation you control as the presenter.

---

## How it works

1. You navigate slides on this master presentation
2. Your audience follows along on their devices
3. Everyone stays synchronized automatically

---

## Setting up your audience

1. Give your audience this URL: `https://yourdomain.com/multiplex-client/`
2. They will see the same slides you do
3. When you change slides, they follow automatically

---

## Fragment Support

This works with fragments too:

{{% fragment %}}First fragment{{% /fragment %}}

{{% fragment %}}Second fragment{{% /fragment %}}

{{% fragment %}}Third fragment{{% /fragment %}}

---

## Questions?

Your audience can follow along in real-time!
