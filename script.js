document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('salesVideo');
    const hiddenContent = document.getElementById('hiddenContent');
    let contentRevealed = false;

    // Function to reveal the content
    function revealContent() {
        if (contentRevealed) return; // Do nothing if already revealed
        contentRevealed = true;
        hiddenContent.classList.add('revealed');
        
        // Optional: Smoothly scroll to the revealed content
        setTimeout(function() {
            hiddenContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Small delay for the opacity transition to start
    }

    // Event that fires continuously as the video plays
    video.addEventListener('timeupdate', function() {
        // Calculate the percentage of the video watched
        const percentComplete = (video.currentTime / video.duration) * 100;
        
        // Condition: If the video is past 85% and the content hasn't been revealed yet
        if (percentComplete >= 85 && !contentRevealed) {
            revealContent();
        }
    });

    // As a fallback, if the video finishes, also reveal the content
    video.addEventListener('ended', function() {
        revealContent();
    });

    // For testing: If you want the content to appear after 5 seconds no matter what,
    // you can uncomment the following line.
    // setTimeout(revealContent, 5000); 
});
