(function() {

	// Configure multiplex settings
	var multiplexConfig = {
		secret: null, // null for clients
		id: 'a1b44278da16272f',
		url: 'https://reveal-multiplex.glitch.me/'
	};

	// Apply configuration to Reveal
	if (typeof Reveal !== 'undefined') {
		Reveal.configure({
			multiplex: multiplexConfig
		});
	}

	var multiplex = Reveal.getConfig().multiplex || multiplexConfig;
	var socketId = multiplex.id;
	var socket = io.connect(multiplex.url);

	socket.on(multiplex.id, function(message) {
		// ignore data from sockets that aren't ours
		if (message.socketId !== socketId) { return; }
		if( window.location.host === 'localhost:1947' ) return;

		if ( message.state ) {
			Reveal.setState(message.state);
		}
		if ( message.content ) {
			// forward custom events to other plugins
			var event = new CustomEvent('received');
			event.content = message.content;
			document.dispatchEvent( event );
		}
	});
}());
