(function() {
	console.log('Master plugin loading...');
	
	// Configure multiplex settings
	var multiplexConfig = {
		secret: '1751711897271988955',
		id: 'a1b44278da16272f',
		url: 'https://reveal-multiplex.glitch.me/'
	};

	console.log('Multiplex config:', multiplexConfig);

	// Don't emit events from inside of notes windows
	if ( window.location.search.match( /receiver/gi ) ) { return; }

	// Wait for Reveal to be ready
	if (typeof Reveal !== 'undefined') {
		Reveal.configure({
			multiplex: multiplexConfig
		});
		console.log('Multiplex configured');
	}

	var multiplex = multiplexConfig;
	if (typeof Reveal !== 'undefined' && Reveal.getConfig && Reveal.getConfig().multiplex) {
		multiplex = Reveal.getConfig().multiplex;
	}

	if (typeof io === 'undefined') {
		console.error('socket.io not loaded');
		return;
	}

	var socket = io.connect( multiplex.url );

	function post( evt ) {
		var messageData = {
			state: Reveal.getState(),
			secret: multiplex.secret,
			socketId: multiplex.id,
			content: (evt || {}).content
		};
		socket.emit( 'multiplex-statechanged', messageData );
		console.log('Posted state change');
	}

	// Wait for Reveal to be ready
	if (typeof Reveal !== 'undefined') {
		window.addEventListener( 'load', post );
		Reveal.on( 'slidechanged', post );
		Reveal.on( 'fragmentshown', post );
		Reveal.on( 'fragmenthidden', post );
		console.log('Event listeners attached');
	}

}());
