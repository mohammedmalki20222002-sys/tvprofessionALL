export default function VideoShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <video
        src="/serien-und-filme.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block max-h-[620px] object-cover"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.10) 60%, transparent 100%)" }}
      />

      {/* Titles */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-14 md:pb-12">
        <h2 className="text-white font-extrabold tracking-tight leading-[1.05] text-3xl sm:text-4xl md:text-6xl">
          Alles, was Sie brauchen,
          <br />
          <span className="serif-display font-light italic text-white/75">an einem Ort.</span>
        </h2>
      </div>
    </section>
  );
}
