+++
title = "Multiplex Master Presentation"
description = "Master presentation with multiplex control"
outputs = ["Reveal"]

[reveal_hugo]
theme = "black"
slide_number = true

# Multiplex configuration for the MASTER presentation
[reveal_hugo.multiplex]
secret = "YOUR_SECRET_HERE"  # Replace with your actual secret from https://reveal-multiplex.glitch.me/token
id = "YOUR_ID_HERE"         # Replace with your actual ID from https://reveal-multiplex.glitch.me/token
url = "https://reveal-multiplex.glitch.me/"

# Load socket.io from CDN and multiplex plugins
[[reveal_hugo.plugins]]
name = "SocketIO"
source = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"
verbatim = true

[[reveal_hugo.plugins]]
name = "RevealMultiplexMaster"
source = "https://reveal-multiplex.glitch.me/master.js"
verbatim = true

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
