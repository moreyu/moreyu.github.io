const { useEffect, useRef, useState } = React;

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

function FadingVideo({ src, className, style }) {
    const videoRef = useRef(null);
    const fadingOutRef = useRef(false);
    const rafIdRef = useRef(null);

    const fadeTo = (target, duration) => {
        const video = videoRef.current;
        if (!video) return;

        // Cancel previous animation
        if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
        }

        const startOpacity = parseFloat(video.style.opacity) || 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            video.style.opacity = startOpacity + (target - startOpacity) * progress;

            if (progress < 1) {
                rafIdRef.current = requestAnimationFrame(animate);
            }
        };

        rafIdRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedData = () => {
            video.style.opacity = '0';
            video.play();
            fadeTo(1, FADE_MS);
        };

        const handleTimeUpdate = () => {
            if (!fadingOutRef.current &&
                video.duration - video.currentTime <= FADE_OUT_LEAD &&
                video.duration - video.currentTime > 0) {
                fadingOutRef.current = true;
                fadeTo(0, FADE_MS);
            }
        };

        const handleEnded = () => {
            video.style.opacity = '0';
            setTimeout(() => {
                video.currentTime = 0;
                video.play();
                fadingOutRef.current = false;
                fadeTo(1, FADE_MS);
            }, 100);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('ended', handleEnded);

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <video
            ref={videoRef}
            className={className}
            style={{ ...style, opacity: 0 }}
            autoPlay
            muted
            playsInline
            preload="auto"
        >
            <source src={src} type="video/mp4" />
        </video>
    );
}

window.FadingVideo = FadingVideo;
