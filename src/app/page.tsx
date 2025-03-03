// "use client";

// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <div className="relative w-full h-dvh text-white px-14 overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//         src="/videos/desktop.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         // Optional: poster="/images/video-placeholder.jpg"
//         // Optional: preload="auto" or "none"
//       />

//       {/* Content (Navbar, etc.) */}
//       <Navbar />

//       {/* Add more page content here if needed */}
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   // State to control whether the video is muted
//   const [isMuted, setIsMuted] = useState(true);

//   return (
//     <div className="relative w-full h-dvh text-white px-14 overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//         src="/videos/desktop.mp4"
//         autoPlay
//         loop
//         muted={isMuted}
//         playsInline
//       />

//       {/* Navbar and other content */}
//       <Navbar />

//       {/* Speaker toggle button */}
//       <button
//         onClick={() => setIsMuted(!isMuted)}
//         className="fixed bottom-4 left-4 z-50 opacity-100 rounded-full bg-black/10 border border-[#6F6F6F] backdrop-blur-md bg-opacity-70 p-3  hover:bg-opacity-100 transition-colors"
//         aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
//       >
//         {isMuted ? "🔇" : "🔊"}
//       </button>

//        {/* Purchase $CASINO Button */}
//        <button
//         className="
//           fixed bottom-8 left-1/2
//           -translate-x-1/2 transform
//           z-50
//           w-[231px] h-[43px]
//           flex items-center justify-center
//           rounded-[50px]
//           border-2 border-white/40
//           bg-black/[0.01]
//           shadow-md
//           text-white
//           font-semibold
//           text-base leading-none
//           hover:bg-black/[0.05]
//           transition-colors
//           cursor-pointer
//         "
//         onClick={() => alert('Button clicked!')}
//       >
//         Purchase $CASINO
//       </button>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useIsMobile } from "@/hooks/useMobile";

export default function Home() {
  // State to control whether the video is muted
  const [isMuted, setIsMuted] = useState(true);

  // Detect if screen width is < 768px
  const isMobile = useIsMobile(768);

  // Choose video based on screen size
  const videoSrc = isMobile
    ? "/videos/mobile.mp4"
    : "/videos/desktop.mp4";

  return (
    <div className="relative w-full h-dvh text-white px-14 overflow-hidden ">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
       src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />

      {/* Navbar */}
      <Navbar />

      {/* Speaker toggle button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="
          fixed bottom-4 left-4 z-50
          opacity-100
          rounded-full
          bg-black/10
          border border-[#6F6F6F]
          backdrop-blur-md
          bg-opacity-70
          p-3
          hover:bg-opacity-100
          transition-colors
        "
        aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      {/* Purchase $CASINO Button */}
      <button
        className="
          px-[40px] py-[10px] fixed bottom-8 left-1/2 -translate-x-1/2 transform
          z-50
          w-[231px] h-[43px]
          flex items-center justify-center
          rounded-[50px]
          border-2 border-white/40
          bg-black/[0.2]           
          shadow-inner            
          text-white
          font-extrabold
          text-[20px]
          whitespace-nowrap
          text-base leading-none
          transition-all
          cursor-pointer

          hover:bg-black/[0.4]     
          hover:shadow-md          
        "
      >
        Purchase $CASINO
      </button>
    </div>
  );
}
