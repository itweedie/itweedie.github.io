/*!
 * Reveal.js multiplex client plugin
 * Simplified version that expects socket.io and multiplex config to be available
 */
(function() {
    'use strict';

    console.log('Multiplex Client Plugin: Starting initialization...');

    // Check dependencies
    if (typeof io === 'undefined') {
        console.error('Multiplex Client: socket.io not loaded');
        return;
    }

    if (typeof Reveal === 'undefined') {
        console.error('Multiplex Client: Reveal.js not loaded');
        return;
    }

    // Get multiplex configuration from Reveal config
    var config = Reveal.getConfig();
    var multiplex = config.multiplex;

    if (!multiplex) {
        console.error('Multiplex Client: No multiplex configuration found');
        return;
    }

    console.log('Multiplex Client: Configuration found', multiplex);

    // Connect to socket
    var socket = io.connect(multiplex.url);
    console.log('Multiplex Client: Connected to', multiplex.url);

    // Listen for state changes
    socket.on(multiplex.id, function(message) {
        console.log('Multiplex Client: Received message', message);
        
        // Ignore data from sockets that aren't ours
        if (message.socketId !== multiplex.id) {
            console.log('Multiplex Client: Ignoring message from different socket');
            return;
        }

        // Don't sync in localhost development mode
        if (window.location.host === 'localhost:1313' || window.location.host === 'localhost:1947') {
            console.log('Multiplex Client: Localhost detected, not syncing');
            return;
        }

        if (message.state) {
            console.log('Multiplex Client: Setting state', message.state);
            Reveal.setState(message.state);
        }

        if (message.content) {
            // Forward custom events to other plugins
            var event = new CustomEvent('received');
            event.content = message.content;
            document.dispatchEvent(event);
        }
    });

    // Listen for connection events
    socket.on('connect', function() {
        console.log('Multiplex Client: Socket connected');
    });

    socket.on('disconnect', function() {
        console.log('Multiplex Client: Socket disconnected');
    });

    console.log('Multiplex Client: Initialization complete');
})();
