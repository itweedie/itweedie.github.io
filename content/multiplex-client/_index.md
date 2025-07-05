+++
title = "Multiplex Client Presentation"
description = "Client presentation that follows the master"
outputs = ["Reveal"]

[reveal_hugo]
theme = "black"
slide_number = true

# Multiplex configuration for the CLIENT presentation
[reveal_hugo.multiplex]
secret = ""  # Empty for clients - they don't control the presentation
id = "YOUR_ID_HERE"         # Replace with the SAME ID from your master presentation
url = "https://reveal-multiplex.glitch.me/"

# Load socket.io from CDN and multiplex plugins
[[reveal_hugo.plugins]]
name = "SocketIO"
source = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"
verbatim = true

[[reveal_hugo.plugins]]
name = "RevealMultiplexClient"
source = "https://reveal-multiplex.glitch.me/client.js"
verbatim = true

+++

# Multiplex Client Presentation

This presentation follows the master automatically.

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
