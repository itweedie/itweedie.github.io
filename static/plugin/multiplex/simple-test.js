console.log('Simple master script loaded');

// Very basic test
if (typeof Reveal !== 'undefined') {
    console.log('Reveal is available');
} else {
    console.log('Reveal is NOT available');
}

if (typeof io !== 'undefined') {
    console.log('io is available');
} else {
    console.log('io is NOT available');
}
