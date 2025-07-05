# Reveal.js Multiplex Setup with reveal-hugo

This document explains how to set up Reveal.js multiplex functionality in a Hugo site using the reveal-hugo theme. Multiplex allows a presenter to control slide navigation for multiple viewers in real-time.

## Overview

The multiplex functionality consists of:
- A **master presentation** that the presenter controls
- **client presentations** that automatically follow the master
- Socket.io communication via the public https://reveal-multiplex.glitch.me/ server

## Working Solution

### 1. Plugin Files

The solution uses combined plugin files that handle both socket.io loading and multiplex functionality:

- `static/plugin/multiplex/master-combined.js` - Master presenter plugin
- `static/plugin/multiplex/client-combined.js` - Audience/client plugin

These plugins:
- Dynamically load socket.io from the multiplex server
- Wait for Reveal.js to be ready
- Set up multiplex communication
- Handle all connection and state synchronization

### 2. Master Presentation Configuration

Create `content/multiplex-master/_index.md`:

```toml
+++
title = "Multiplex Master Presentation"
description = "Master presentation with multiplex control"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
slide_number = true
transition = "slide"

[reveal_hugo.multiplex]
secret = "1751711897271988955"  # Secret for master (required)
id = "a1b44278da16272f"        # Session ID (shared between master/client)
url = "https://reveal-multiplex.glitch.me/"

[[reveal_hugo.plugins]]
name = "MultiplexMaster"
source = "plugin/multiplex/master-combined.js"
+++

# Your Presentation Content Here
```

### 3. Client Presentation Configuration

Create `content/multiplex-client/_index.md`:

```toml
+++
title = "Multiplex Client Presentation"
description = "Client presentation that follows the master"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
slide_number = true
transition = "slide"

[reveal_hugo.multiplex]
secret = ""                     # Empty secret for clients
id = "a1b44278da16272f"        # Same session ID as master
url = "https://reveal-multiplex.glitch.me/"

[[reveal_hugo.plugins]]
name = "MultiplexClient"
source = "plugin/multiplex/client-combined.js"
+++

# Your Presentation Content Here
```

## How It Works

1. **reveal-hugo** processes the front matter and passes the `multiplex` configuration to Reveal.js
2. The combined plugin files are loaded after the default reveal-hugo plugins
3. Each plugin dynamically loads socket.io from the multiplex server
4. Master plugin connects and sends state changes to the server
5. Client plugins connect and listen for state changes from the master

## Usage

1. **Presenter**: Navigate to `/multiplex-master/`
2. **Audience**: Navigate to `/multiplex-client/`
3. When the presenter changes slides, all audience members automatically follow

## Key Features

- **Fragment Support**: Works with reveal.js fragments
- **Error Handling**: Comprehensive logging and error handling
- **Development Mode**: Clients don't sync when running on localhost
- **Automatic Loading**: No manual script loading required

## Generated HTML Structure

The solution generates clean HTML with:
- Proper multiplex configuration in `revealHugoPageParams`
- Combined plugin loading in the plugins array
- No conflicting scripts or duplicate loading

## Troubleshooting

Check browser console for:
- "Multiplex Master/Client: Starting initialization..."
- "socket.io loaded successfully"
- "Setup complete"

If you see errors:
1. Verify the plugin files exist in `static/plugin/multiplex/`
2. Check that the multiplex configuration is in the front matter
3. Ensure no conflicting custom head partials exist

## Previous Approaches Tried

- Loading socket.io via reveal-hugo plugins (didn't work - execution order issues)
- Loading socket.io via dependencies configuration (not supported by reveal-hugo)
- Custom head partials (caused conflicts and duplicate loading)
- Separate plugin files (socket.io timing issues)

The **combined plugin approach** with dynamic socket.io loading is the working solution.

```bash
hugo server
```

Your presentations will be available at:
- Master (for presenter): `http://localhost:1313/multiplex-master/`
- Client (for audience): `http://localhost:1313/multiplex-client/`

## Adding Multiplex to Existing Presentations

Add this configuration to any presentation's front matter:

### For Master Presentation (Presenter)
```toml
[reveal_hugo.multiplex]
secret = "YOUR_SECRET_HERE"
id = "YOUR_ID_HERE"
url = "https://reveal-multiplex.glitch.me/"

[[reveal_hugo.plugins]]
name = "RevealMultiplex"
source = "https://reveal-multiplex.glitch.me/socket.io/socket.io.js"
verbatim = true

[[reveal_hugo.plugins]]
name = "RevealMultiplexMaster"
source = "https://reveal-multiplex.glitch.me/master.js"
verbatim = true
```

### For Client Presentation (Audience)
```toml
[reveal_hugo.multiplex]
secret = ""  # Empty for clients
id = "YOUR_ID_HERE"  # Same ID as master
url = "https://reveal-multiplex.glitch.me/"

[[reveal_hugo.plugins]]
name = "RevealMultiplex"
source = "https://reveal-multiplex.glitch.me/socket.io/socket.io.js"
verbatim = true

[[reveal_hugo.plugins]]
name = "RevealMultiplexClient"
source = "https://reveal-multiplex.glitch.me/client.js"
verbatim = true
```

## Using Your Own Server

If you want more control or reliability, you can run your own multiplex server:

1. Install: `npm install reveal-multiplex`
2. Run: `node node_modules/reveal-multiplex`
3. Update the `url` in your configuration to point to your server

## How It Works

1. **Master Presentation**: The presenter controls this version
   - Has both `secret` and `id`
   - Loads the `master.js` plugin
   - Sends slide change events to the server

2. **Client Presentation**: The audience views this version
   - Has only the `id` (no secret)
   - Loads the `client.js` plugin
   - Receives slide change events from the server

3. **Socket.io Server**: Handles communication
   - Receives events from master
   - Broadcasts to all clients with matching ID

## Tips

- Share the client URL with your audience before starting
- Test the setup with a friend before your actual presentation
- Have a backup plan in case of network issues
- The hosted server at reveal-multiplex.glitch.me is free but not guaranteed for uptime

## Troubleshooting

- If slides don't sync, check that both master and client use the same `id`
- Make sure your audience can access the client URL
- Verify that the multiplex server is reachable
- Check browser console for JavaScript errors
