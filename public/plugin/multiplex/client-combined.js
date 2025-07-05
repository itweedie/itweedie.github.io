/*!
 * Reveal.js multiplex client plugin with socket.io loader
 * Loads socket.io and sets up multiplex client functionality
 */
const MultiplexClient = {
    id: 'multiplex-client',

    init: function(reveal) {
        console.log('Multiplex Client: Starting initialization...');

        // Get multiplex configuration from Reveal config
        var config = reveal.getConfig();
        var multiplex = config.multiplex;

        if (!multiplex) {
            console.error('Multiplex Client: No multiplex configuration found');
            return;
        }

        console.log('Multiplex Client: Configuration found', multiplex);

        // Function to load socket.io dynamically
        function loadSocketIO() {
            return new Promise((resolve, reject) => {
                if (typeof io !== 'undefined') {
                    console.log('Multiplex Client: socket.io already loaded');
                    resolve();
                    return;
                }

                console.log('Multiplex Client: Loading socket.io...');
                var script = document.createElement('script');
                script.src = 'https://reveal-multiplex.glitch.me/socket.io/socket.io.js';
                script.onload = function() {
                    console.log('Multiplex Client: socket.io loaded successfully');
                    resolve();
                };
                script.onerror = function() {
                    console.error('Multiplex Client: Failed to load socket.io');
                    reject(new Error('Failed to load socket.io'));
                };
                document.head.appendChild(script);
            });
        }

        // Function to setup multiplex functionality
        function setupMultiplex() {
            if (typeof io === 'undefined') {
                console.error('Multiplex Client: socket.io not available');
                return;
            }

            // Connect to socket
            var socket = io.connect(multiplex.url);
            console.log('Multiplex Client: Connected to', multiplex.url);

            // Listen for state changes
            socket.on(multiplex.id, function(message) {
                console.log('📡 CLIENT: Received message from master', message);
                
                // Ignore data from sockets that aren't ours
                if (message.socketId !== multiplex.id) {
                    console.log('❌ CLIENT: Ignoring message from different socket');
                    return;
                }

                // For testing: Allow localhost syncing (comment out the next 4 lines to disable syncing in dev)
                // if (window.location.host === 'localhost:1313' || window.location.host === 'localhost:1947') {
                //     console.log('🏠 CLIENT: Localhost detected, not syncing');
                //     return;
                // }

                if (message.state) {
                    var newSlide = message.state.indexh + '.' + message.state.indexv;
                    console.log('🎬 CLIENT: Changing to slide', newSlide, message.state);
                    reveal.setState(message.state);
                    console.log('✅ CLIENT: Successfully changed to slide', newSlide);
                }

                if (message.content) {
                    // Forward custom events to other plugins
                    var event = new CustomEvent('received');
                    event.content = message.content;
                    document.dispatchEvent(event);
                    console.log('📤 CLIENT: Forwarded custom content', message.content);
                }
            });

            // Listen for connection events
            socket.on('connect', function() {
                console.log('Multiplex Client: Socket connected');
            });

            socket.on('disconnect', function() {
                console.log('Multiplex Client: Socket disconnected');
            });

            console.log('Multiplex Client: Setup complete');
        }

        // Load socket.io and setup multiplex
        loadSocketIO().then(setupMultiplex).catch(console.error);
    }
};

// Export for reveal-hugo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MultiplexClient;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return MultiplexClient; });
} else {
    window.MultiplexClient = MultiplexClient;
}
