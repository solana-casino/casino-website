// import Image from "next/image";
// import Link from "next/link";
// export default function Navbar() {
//   return (
//     <>
//       <div className="flex justify-between items-center">
//         <div>
//           <Image src="/images/logo.svg" height={100} width={109} alt="Logo" />
//         </div>
//         <div className="flex justify-center items-center gap-10 opacity-100 rounded-[50px] bg-black/10 border border-[#6F6F6F] backdrop-blur-md px-[40px] py-[10px] text-[#DADADA]">
//           <p className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-white">
//             About us
//           </p>
//           <p className="cursor-pointer  transition-colors duration-300 ease-in-out hover:text-white">
//             Tokenomics
//           </p>
//           <p className="cursor-pointer  transition-colors duration-300 ease-in-out hover:text-white">
//             Contract address
//           </p>
//         </div>

//         <div className="flex justify-center items-center gap-10">
//           <Image src="/images/x.svg" height={30} width={30} alt="X" />
//           <Image
//             src="/images/telegram.svg"
//             height={30}
//             width={30}
//             alt="Telegram"
//           />
//           <Image src="/images/icon.svg" height={30} width={30} alt="Icon" />
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  // modalType can be "about", "tokenomics", "contract" or null
  const [modalType, setModalType] = useState<string | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image src="/images/logo.svg" height={100} width={109} alt="Logo" />
        </div>
        {/* Nav Items */}
        <div className="flex justify-center items-center gap-10 opacity-100 rounded-[50px] bg-black/10 border border-[#6F6F6F] backdrop-blur-md px-[40px] py-[10px] text-[#DADADA] text-[18px]">
          <p
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-white"
            onClick={() => setModalType("about")}
          >
            About us
          </p>
          <p
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-white"
            onClick={() => setModalType("tokenomics")}
          >
            Tokenomics
          </p>
          <p
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-white"
            onClick={() => setModalType("contract")}
          >
            Contract address
          </p>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-10">
          <Image src="/images/x.svg" height={30} width={30} alt="X" />
          <Image src="/images/telegram.svg" height={30} width={30} alt="Telegram" />
          <Image src="/images/icon.svg" height={30} width={30} alt="Icon" />
        </div>
      </nav>

      {/* MODAL */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop: clicking closes modal */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          ></div>

          {/* Modal Container: glass-like design */}
          <div
            className="
              relative
              flex flex-col
              w-full max-w-lg mx-4
              p-6
              bg-white/10
              backdrop-blur-md
              border border-white/25
              text-[#DADADA]
              rounded-none
              shadow-md
              z-10
            "
          >
            {/* Close Button: circular with border */}
            <button
              className="
                absolute top-4 right-4
                w-8 h-8
                flex items-center justify-center
                rounded-full
                border border-white
                text-white
                hover:bg-white/20
                transition-colors
                text-xl
              "
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Content Based on modalType */}
            {modalType === "about" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-white font-semibold">About Us</h2>
                <p className="text-[18px]">
                  Solana Casino: The memecoin that pays you SOL every 21 minutes—
                  hold more, make more. Get a chance to win the jackpot each time
                  the pool hits 7 SOL. No luck, just patience. Welcome to the only
                  casino where the house always pays you.
                </p>
              </div>
            )}

            {modalType === "tokenomics" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-white font-semibold">Tokenomics</h2>
                <p className="text-[18px]">Your Tokenomics content goes here...</p>
              </div>
            )}

            {modalType === "contract" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-white font-semibold">
                  Contract Address
                </h2>
                <p className="text-[18px]">Your Contract address content goes here...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
