/*!
 * Reveal.js multiplex master plugin with socket.io loader
 * Loads socket.io and sets up multiplex master functionality
 */
const MultiplexMaster = {
    id: 'multiplex-master',

    init: function(reveal) {
        console.log('Multiplex Master: Starting initialization...');

        // Get multiplex configuration from Reveal config
        var config = reveal.getConfig();
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

        // Function to load socket.io dynamically
        function loadSocketIO() {
            return new Promise((resolve, reject) => {
                if (typeof io !== 'undefined') {
                    console.log('Multiplex Master: socket.io already loaded');
                    resolve();
                    return;
                }

                console.log('Multiplex Master: Loading socket.io...');
                var script = document.createElement('script');
                script.src = 'https://reveal-multiplex.glitch.me/socket.io/socket.io.js';
                script.onload = function() {
                    console.log('Multiplex Master: socket.io loaded successfully');
                    resolve();
                };
                script.onerror = function() {
                    console.error('Multiplex Master: Failed to load socket.io');
                    reject(new Error('Failed to load socket.io'));
                };
                document.head.appendChild(script);
            });
        }

        // Function to setup multiplex functionality
        function setupMultiplex() {
            if (typeof io === 'undefined') {
                console.error('Multiplex Master: socket.io not available');
                return;
            }

            // Connect to socket
            var socket = io.connect(multiplex.url);
            console.log('Multiplex Master: Connected to', multiplex.url);

            function post(evt) {
                var state = reveal.getState();
                var messageData = {
                    state: state,
                    secret: multiplex.secret,
                    socketId: multiplex.id,
                    content: (evt || {}).content
                };
                socket.emit('multiplex-statechanged', messageData);
                console.log('🎯 MASTER: Slide changed to', state.indexh + '.' + state.indexv, 'Event:', evt?.type || 'manual', messageData);
            }

            // Bind events
            reveal.addEventListener('slidechanged', function(evt) {
                console.log('📍 MASTER: Slide changed event fired');
                post(evt);
            });
            reveal.addEventListener('fragmentshown', function(evt) {
                console.log('👁️ MASTER: Fragment shown');
                post(evt);
            });
            reveal.addEventListener('fragmenthidden', function(evt) {
                console.log('🙈 MASTER: Fragment hidden');
                post(evt);
            });
            reveal.addEventListener('overviewhidden', post);
            reveal.addEventListener('overviewshown', post);
            reveal.addEventListener('paused', post);
            reveal.addEventListener('resumed', post);

            // Listen for connection events
            socket.on('connect', function() {
                console.log('Multiplex Master: Socket connected');
            });

            socket.on('disconnect', function() {
                console.log('Multiplex Master: Socket disconnected');
            });

            // Post initial state after a short delay
            setTimeout(function() {
                var initialState = reveal.getState();
                post();
                console.log('🚀 MASTER: Posted initial state - slide', initialState.indexh + '.' + initialState.indexv);
            }, 1000);

            console.log('Multiplex Master: Setup complete');
        }

        // Load socket.io and setup multiplex
        loadSocketIO().then(setupMultiplex).catch(console.error);
    }
};

// Export for reveal-hugo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MultiplexMaster;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return MultiplexMaster; });
} else {
    window.MultiplexMaster = MultiplexMaster;
}
