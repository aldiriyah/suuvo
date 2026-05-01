"use client";

const navLinks = ["Home", "Overview", "Feature", "FAQ"];

const mockupCards = [
  {
    id: "feed-left",
    type: "feed",
    className:
      "hidden xl:flex relative w-[130px] shrink-0 self-stretch flex-col rounded-[18px] overflow-hidden bg-[#1a1a2e]",
    imageSrc: "/figmaAssets/rectangle-29-2.png",
    stats: [
      { icon: "♥", value: "24.5k" },
      { icon: "✉", value: "687" },
      { icon: "🔖", value: "245" },
      { icon: "🔁", value: "67" },
      { icon: "⊕", value: "67" },
    ],
    name: "James",
    username: "James123",
    caption: '"Making memories," or "Life\'s too short for bad views"',
  },
  {
    id: "photo-1",
    type: "photo",
    className:
      "relative w-[180px] sm:w-[200px] shrink-0 rounded-[18px] overflow-hidden self-end mb-0",
    imageSrc: "/figmaAssets/rectangle-24-2.png",
    badge: "New",
    views: "24.6k",
    viewIcon: "/figmaAssets/fluent-video-clip-16-filled.svg",
  },
  {
    id: "phone-center",
    type: "phone",
    className:
      "relative w-[190px] sm:w-[210px] shrink-0 rounded-[24px] overflow-hidden self-start mt-4 border border-white/20",
    imageSrc: "/figmaAssets/rectangle-26-1.png",
    user: "Andrew",
    date: "2023.09.19",
  },
  {
    id: "photo-2",
    type: "photo",
    className:
      "relative w-[165px] sm:w-[185px] shrink-0 rounded-[18px] overflow-hidden self-end mb-4",
    imageSrc: "/figmaAssets/rectangle-25-2.png",
    badge: "New",
    views: "24.6k",
    viewIcon: "/figmaAssets/fluent-video-clip-16-filled-1.svg",
  },
  {
    id: "feed-right",
    type: "feed",
    className:
      "hidden xl:flex relative w-[130px] shrink-0 self-stretch flex-col rounded-[18px] overflow-hidden bg-[#1a1a2e]",
    imageSrc: "/figmaAssets/rectangle-29-2.png",
    stats: [
      { icon: "♥", value: "24.5k" },
      { icon: "✉", value: "687" },
      { icon: "🔖", value: "245" },
      { icon: "🔁", value: "67" },
      { icon: "⊕", value: "67" },
    ],
    name: "James",
    username: "James123",
    caption: '"Good vibes only," "Making memories," or "Life\'s too short for bad views"',
  },
];
export default function TopHeroSection (): JSX.Element {
  return (
    <div className="relative mb-20 overflow-hidden bg-gradient-to-br from-[#fde8dc] via-[#fdddd2] to-white">
      {/* Background blobs */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ffd4bf] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute left-[30%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#ffc8b8] opacity-30 blur-[100px]" />

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#ef9f22] via-[#e45a9b] to-[#3669c9]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 2.5L11 7L3 11.5V2.5Z" fill="white" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">SUUVO</span>
          <span className="hidden text-[9px] font-medium uppercase tracking-widest text-gray-500 sm:block">
            One App, Endless Possibilities
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden items-center gap-1 rounded-full border border-gray-200/70 bg-white/70 px-2 py-1.5 shadow-sm backdrop-blur-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                link === "Home"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">
          Join Waitlist
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-6 pt-8 sm:flex-row sm:items-center lg:px-10 lg:pt-12">
        {/* Left: Headline */}
        <div className="max-w-[520px]">
          <h1 className="text-[42px] font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-[52px] lg:text-[64px]">
            A Better Way to<br />
            Be Social, For Real
          </h1>
          <p className="mt-4 max-w-[380px] text-[15px] leading-relaxed text-gray-600">
            A new way to connect, create, and engage. Experience a social media
            platform that goes beyond likes—built for real connections, privacy,
            and engagement.
          </p>
        </div>

        {/* Right: Social proof + CTA */}
        <div className="flex flex-col items-start gap-4 sm:items-end">
          {/* Avatar group + count */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "/figmaAssets/image-13.png",
                "/figmaAssets/image-14.png",
                "/figmaAssets/image-15.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm"
                >
                  <img
                    src={src}
                    alt="Early user"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">2k+ Early</p>
              <p className="text-sm font-bold text-gray-900">Signups</p>
            </div>
          </div>

          {/* Join Waitlist CTA button */}
          <button className="relative overflow-hidden rounded-full px-8 py-3 text-base font-semibold text-white shadow-[0px_8px_32px_rgba(222,100,50,0.35)]"
            style={{
              background:
                "linear-gradient(95deg, rgba(239,159,34,1) 0%, rgba(222,18,123,1) 100%)",
            }}
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Mockup collage */}
      <div className="relative z-10 mx-auto mt-10 max-w-[1240px] overflow-hidden px-2 pb-0 lg:px-6">
        <div className="flex items-end justify-center gap-3 lg:gap-4">

          {/* Left feed card (hidden on small screens) */}
          <div className="hidden xl:flex relative w-[130px] shrink-0 self-stretch flex-col rounded-[18px] overflow-hidden bg-[#1c1c2e] shadow-xl">
            <img
              src="/figmaAssets/rectangle-29-2.png"
              alt="Creator feed"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-2 right-2">
              <p className="text-[10px] font-bold text-white">James</p>
              <p className="text-[9px] text-white/60">James123</p>
              <p className="mt-1 text-[9px] leading-tight text-white/70">
                "Making memories," or "Life's too short for bad views"
              </p>
            </div>
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3">
              {[
                { icon: "♥", val: "24.5k" },
                { icon: "✉", val: "687" },
                { icon: "🔖", val: "245" },
              ].map((s) => (
                <div key={s.icon} className="flex flex-col items-center">
                  <span className="text-xs text-white">{s.icon}</span>
                  <span className="text-[9px] text-white/80">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo card 1 */}
          <div className="relative w-[170px] sm:w-[190px] shrink-0 self-end rounded-[18px] overflow-hidden shadow-xl">
            <img
              src="/figmaAssets/rectangle-24-2.png"
              alt="Creator content"
              className="h-[240px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* New badge */}
            <div className="absolute right-3 top-3 rounded-full bg-[#ffbd5959] px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/20">
              New
            </div>
            {/* Views */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/30 px-2.5 py-1 backdrop-blur-sm">
              <img src="/figmaAssets/fluent-video-clip-16-filled.svg" alt="" className="h-3.5 w-3.5" />
              <span className="text-xs font-medium text-white">24.6k</span>
            </div>
          </div>

          {/* Center phone mockup */}
          <div className="relative w-[190px] sm:w-[220px] shrink-0 self-start mt-6 rounded-[24px] overflow-hidden shadow-2xl border border-white/30 bg-white">
            {/* Status bar */}
            <div className="flex items-center justify-between bg-white px-3 py-2">
              <span className="text-[10px] font-medium text-gray-800">7:11</span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-600">▲▲▲ WiFi 🔋</span>
              </div>
            </div>
            <img
              src="/figmaAssets/rectangle-26-1.png"
              alt="Social feed"
              className="h-[310px] w-full object-cover"
            />
            {/* User bar */}
            <div className="flex items-center justify-between bg-white px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                <div>
                  <p className="text-[10px] font-semibold text-gray-900">Andrew</p>
                  <p className="text-[9px] text-gray-400">2023.09.19</p>
                </div>
              </div>
              <span className="text-gray-400">✕</span>
            </div>
            {/* Comment bar */}
            <div className="flex items-center gap-2 border-t border-gray-100 bg-white px-3 py-2">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-orange-300 to-pink-400" />
              <span className="text-[10px] text-gray-400">Add a comment...</span>
            </div>
          </div>

          {/* Stats column */}
          <div className="flex shrink-0 flex-col gap-3 self-center">
            {/* Pink stat */}
            <div className="w-[150px] sm:w-[170px] rounded-[18px] bg-gradient-to-br from-[#ff5fa7] to-[#ef4098] p-5 shadow-xl">
              <p className="text-4xl font-bold text-white">2k+</p>
              <p className="mt-2 text-sm leading-snug text-white/90">
                Early signups on the waitlist
              </p>
            </div>

            {/* Purple stat */}
            <div className="w-[150px] sm:w-[170px] rounded-[18px] bg-gradient-to-br from-[#8b8ff5] to-[#6b70ef] p-5 shadow-xl">
              <p className="text-4xl font-bold text-white">30+</p>
              <p className="mt-2 text-sm leading-snug text-white/90">
                Private communities getting ready
              </p>
            </div>

            {/* Dark photo card */}
            <div className="relative w-[150px] sm:w-[170px] overflow-hidden rounded-[18px] shadow-xl">
              <img
                src="/figmaAssets/rectangle-25-2.png"
                alt="Creator content"
                className="h-[150px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute right-2.5 top-2.5 rounded-full bg-[#ffbd5959] px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm border border-white/20">
                New
              </div>
              <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/30 px-2 py-0.5 backdrop-blur-sm">
                <img src="/figmaAssets/fluent-video-clip-16-filled-1.svg" alt="" className="h-3 w-3" />
                <span className="text-[10px] font-medium text-white">24.6k</span>
              </div>
            </div>
          </div>

          {/* Right feed card (hidden on small screens) */}
          <div className="hidden xl:flex relative w-[130px] shrink-0 self-stretch flex-col rounded-[18px] overflow-hidden bg-[#1c1c2e] shadow-xl">
            <img
              src="/figmaAssets/rectangle-29-2.png"
              alt="Creator feed"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-2 right-2">
              <p className="text-[10px] font-bold text-white">James</p>
              <p className="text-[9px] text-white/60">James123</p>
              <p className="mt-1 text-[9px] leading-tight text-white/70">
                "Good vibes only," "Making memories," or "Life's too short"
              </p>
            </div>
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3">
              {[
                { icon: "♥", val: "24.5k" },
                { icon: "✉", val: "687" },
                { icon: "🔖", val: "245" },
              ].map((s) => (
                <div key={s.icon} className="flex flex-col items-center">
                  <span className="text-xs text-white">{s.icon}</span>
                  <span className="text-[9px] text-white/80">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
