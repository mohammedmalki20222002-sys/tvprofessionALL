import { useState } from "react";

const VIDEO_URL = import.meta.env.VITE_VIDEO_URL || "/serien-und-filme.mp4";

export default function VideoShowcase() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "260px" }}>
      {!videoFailed && (
        <video
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
          className="w-full h-auto block max-h-[360px] object-cover"
        />
      )}

      {videoFailed && (
        <div className="w-full" style={{ minHeight: "260px" }} />
      )}

      {/* Gradient overlay — dark top-left fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 50%, transparent 100%)" }}
      />

      {/* Titles — top left */}
      <div className="absolute top-0 left-0 px-5 pt-5 md:px-10 md:pt-8">
        <h2 className="text-white font-extrabold tracking-tight leading-[1.05] text-xl sm:text-2xl md:text-4xl">
          Alles, was Sie brauchen,
          <br />
          <span className="serif-display font-light italic text-white/70">an einem Ort.</span>
        </h2>
      </div>
    </section>
  );
}
