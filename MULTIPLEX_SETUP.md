# Multiplex Setup Guide

The multiplex plugin allows your audience to follow your presentation slides in real-time on their own devices. Here's how to set it up:

## Quick Setup Steps

### 1. Get Your Multiplex Token and Secret

Visit https://reveal-multiplex.glitch.me/token to generate a unique token pair. You'll get:
- `id`: A unique identifier for your presentation session
- `secret`: A secret key that gives you control over the presentation

### 2. Update Your Presentation Files

Replace `YOUR_ID_HERE` and `YOUR_SECRET_HERE` in both:
- `content/multiplex-master/_index.md` (for the presenter)
- `content/multiplex-client/_index.md` (for the audience)

### 3. Build and Deploy

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
