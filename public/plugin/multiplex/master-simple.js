/*!
 * Reveal.js multiplex master plugin
 * Simplified version that expects socket.io and multiplex config to be available
 */
(function() {
    'use strict';

    console.log('Multiplex Master Plugin: Starting initialization...');

    // Check dependencies
    if (typeof io === 'undefined') {
        console.error('Multiplex Master: socket.io not loaded');
        return;
    }

    if (typeof Reveal === 'undefined') {
        console.error('Multiplex Master: Reveal.js not loaded');
        return;
    }

    // Get multiplex configuration from Reveal config
    var config = Reveal.getConfig();
    var multiplex = config.multiplex;

    if (!multiplex) {
        console.error('Multiplex Master: No multiplex configuration found');
        return;
    }

    console.log('Multiplex Master: Configuration found', multiplex);

    // Don't emit events from inside of notes windows
    if (window.location.search.match(/receiver/gi)) {
        console.log('Multiplex Master: Receiver mode detected, not initializing');
        return;
    }

    // Connect to socket
    var socket = io.connect(multiplex.url);
    console.log('Multiplex Master: Connected to', multiplex.url);

    function post(evt) {
        var messageData = {
            state: Reveal.getState(),
            secret: multiplex.secret,
            socketId: multiplex.id,
            content: (evt || {}).content
        };
        socket.emit('multiplex-statechanged', messageData);
        console.log('Multiplex Master: Posted state change', messageData);
    }

    // Bind events
    Reveal.addEventListener('slidechanged', post);
    Reveal.addEventListener('fragmentshown', post);
    Reveal.addEventListener('fragmenthidden', post);
    Reveal.addEventListener('overviewhidden', post);
    Reveal.addEventListener('overviewshown', post);
    Reveal.addEventListener('paused', post);
    Reveal.addEventListener('resumed', post);

    // Post initial state
    window.addEventListener('load', function() {
        setTimeout(post, 500); // Small delay to ensure everything is ready
    });

    console.log('Multiplex Master: Initialization complete');
})();
