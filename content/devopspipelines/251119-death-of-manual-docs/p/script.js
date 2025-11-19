
<script>
// JavaScript to handle video speed for Reveal.js background videos
document.addEventListener('DOMContentLoaded', function() {
    
    function setVideoSpeed() {
        // Target all video elements, including background videos
        const allVideos = document.querySelectorAll('video, .reveal .backgrounds video, .slide-background video');
        
        allVideos.forEach(video => {
            // Disable looping for all videos
            video.loop = false;
            video.removeAttribute('loop');
            
            // Check if this video should play at 2x speed
            // Look for parent section with speed-2x class or video with specific filename
            const section = video.closest('section') || document.querySelector('section.speed-2x');
            const shouldSpeed = (section && section.classList.contains('speed-2x')) || 
                              (video.src && video.src.includes('msedge_7if2t23IPS.mp4'));
            
            // Exclude specific videos that should play at normal speed
            const shouldNotSpeed = video.src && video.src.includes('update-pipeline-2-withdocx.mp4');
            
            if (shouldSpeed && !shouldNotSpeed) {
                const applySpeed = () => {
                    try {
                        video.playbackRate = 2.0;
                        //console.log('✅ Applied 2x speed to video:', video.src || video.currentSrc);
                    } catch (e) {
                        console.log('❌ Failed to set speed:', e);
                    }
                };
                
                // Apply speed multiple ways
                applySpeed();
                video.addEventListener('loadstart', applySpeed);
                video.addEventListener('loadedmetadata', applySpeed);
                video.addEventListener('canplay', applySpeed);
                video.addEventListener('playing', applySpeed);
                
                // Delayed attempts
                setTimeout(applySpeed, 50);
                setTimeout(applySpeed, 200);
                setTimeout(applySpeed, 1000);
            }
        });
        
        // Also check for background videos created by Reveal.js
        const backgroundElements = document.querySelectorAll('.slide-background[data-background-video*="msedge_7if2t23IPS.mp4"] video');
        backgroundElements.forEach(video => {
            video.playbackRate = 2.0;
            console.log('🎬 Set background video speed to 2x:', video.src);
        });
    }
    
    // Initial setup
    setVideoSpeed();
    
    // Reveal.js integration
    if (window.Reveal) {
        Reveal.on('ready', () => {
            console.log('🚀 Reveal.js ready - setting up video speeds');
            setTimeout(setVideoSpeed, 100);
            setTimeout(setVideoSpeed, 500);
        });
        
        Reveal.on('slidechanged', (event) => {
            console.log('📺 Slide changed - checking videos');
            setTimeout(setVideoSpeed, 100);
        });
    }
    
    // Fallback observer for dynamically added videos
    const observer = new MutationObserver(() => setVideoSpeed());
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Aggressive fallback - keep trying for first 10 seconds
    for (let i = 1; i <= 10; i++) {
        setTimeout(setVideoSpeed, i * 1000);
    }
});
</script>

