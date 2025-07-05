+++
title = "Socket IO Test"
description = "Testing socket.io loading"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
margin = 0.2

[[reveal_hugo.plugins]]
name = "SocketIO"
source = "plugin/multiplex/simple-test.js"

+++

# Socket IO Test

Testing if socket.io loads properly.

---

## Check Console

Open browser console (F12) and check if:
- No JavaScript errors
- `typeof io` returns "function"

---

## If this works

Then the issue is with our multiplex JavaScript files.
