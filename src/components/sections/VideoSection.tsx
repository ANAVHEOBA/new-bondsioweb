import React, { useRef, useEffect } from 'react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle fullscreen and control audio
  const toggleFullscreen = () => {
    if (!containerRef.current || !videoRef.current) return;

    if (!document.fullscreenElement) {
      // Enter fullscreen
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      // Exit fullscreen
      document.exitFullscreen();
    }
  };

  // Handle fullscreen state and audio
  useEffect(() => {
    const handleFullscreenChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.fullscreenElement) {
        // Entered fullscreen → unmute and play
        video.muted = false;
        video.play().catch(err => console.log("Play failed:", err));
      } else {
        // Exited fullscreen → mute and loop
        video.muted = true;
        video.loop = true;
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <section className="video-section">
      <div className="content-wrapper">
        <h2 className="subtitle">How Bondsio Works</h2>
        <h1 className="title">Your Journey To Belonging Starts Here</h1>
        <p className="description">
          Finding belonging doesn't have to be complicated. Bondsio makes it natural: Find your people, join in the fun, and watch how one moment turns into many.
        </p>
      </div>

      {/* Video Background Box */}
      <div
        className="video-container"
        ref={containerRef}
        onClick={toggleFullscreen}
        tabIndex={0} // Make it focusable for keyboard users
        role="button"
        aria-label="Click to view video in fullscreen"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-element"
        >
          <source src="/VID-20250902-WA0081.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fullscreen Toggle Button */}
        <button
          className="fullscreen-toggle"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering container click
            toggleFullscreen();
          }}
          aria-label="Toggle fullscreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default VideoSection;