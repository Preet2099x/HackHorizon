// Pre-load the audio to avoid delay
let clickAudio: HTMLAudioElement | null = null;

if (typeof window !== 'undefined') {
    clickAudio = new Audio('/buttonSound.webm');
    clickAudio.load(); // Preload the audio
}

export default function playClickSound() {
    if (clickAudio) {
        // Reset to start if already playing
        clickAudio.currentTime = 0;
        clickAudio.play().catch(error => console.log('Audio play failed:', error));
    }
};