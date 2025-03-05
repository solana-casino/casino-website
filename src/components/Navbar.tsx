"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Add effect to check for mobile on client-side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial width
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const closeModal = () => {
    setModalType(null);
    setCopied(false);
  };

  // Example contract address
  const CONTRACT_ADDRESS = "BzK8crS8gakd59f3ChAzuTdzdM8CNSwjgqFS54rSponz";
  // Show first 4 and last 4 characters
  const displayAddress = `${CONTRACT_ADDRESS.slice(
    0,
    4
  )}...${CONTRACT_ADDRESS.slice(-4)}`;

  // Copy function
  const handleCopy = (e: React.MouseEvent) => {
    // Prevent closing the modal
    e.stopPropagation();

    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);

    // Reset copied state after 2 seconds
    if (isMobile) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <Image src="/images/logo.svg" height={100} width={100} alt="Logo" />
        </div>
        {/* Nav Items */}
        <div className="hidden md:flex justify-center items-center gap-10 opacity-100 rounded-[50px] bg-black/10 border border-[#6F6F6F] backdrop-blur-md px-[40px] py-[10px] text-[#DADADA] text-[18px]">
          <p
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-white"
            onClick={() => setModalType("about")}
          >
            About Us
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
            Contract Address
          </p>
        </div>
        {/* Social Icons */}
        <div className="hidden md:flex justify-center items-center gap-10">
          <Link
            href="https://x.com/CasinoCoinSol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/x.svg" height={30} width={30} alt="X" />
          </Link>
          <Link
            href="https://t.me/SolCasinoTg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/telegram.svg"
              height={30}
              width={30}
              alt="Telegram"
            />
          </Link>
          <Image src="/images/icon.svg" height={30} width={30} alt="Icon" />
        </div>
        <div className="md:hidden" onClick={() => setModalOpen(true)}>
          <Image
            src="/images/hamburger.svg"
            height={21}
            width={30}
            alt="Icon"
          />
        </div>
      </nav>

      {/* MOBILE MENU MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-100 flex justify-center py-4 ">
          <div className="absolute inset-0 bg-black"></div>

          <div
            className={`relative flex flex-col w-full bg-black text-white p-10 max-w-[574px]`}
          >
            <div
              className=" text-3xl flex justify-end "
              onClick={() => setModalOpen(false)}
            >
              <Image
                src="/images/close-icon.svg"
                height={24}
                width={24}
                alt="close"
              />
            </div>
            <div className="flex flex-col p-14 gap-4 justify-center items-center text-[#DADADA]">
              <p
                className="text-[18px] font-semibold"
                onClick={() => {
                  setModalOpen(false);
                  setModalType("about");
                }}
              >
                About Us
              </p>
              <p
                className="text-[18px] font-semibold"
                onClick={() => {
                  setModalOpen(false);
                  setModalType("tokenomics");
                }}
              >
                Tokenomics
              </p>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleCopy}
              >
                <Image
                  src="/images/copy.svg"
                  height={16.72}
                  width={16.3}
                  alt="copy"
                />
                <p className="text-[18px] font-semibold">
                  {isMobile && copied ? "Address Copied!" : "Contract Address"}
                </p>
              </div>

              <div className="mt-4 flex justify-center items-center gap-10">
                <Link
                  href="https://x.com/CasinoCoinSol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/x.svg" height={30} width={30} alt="X" />
                </Link>
                <Link
                  href="https://t.me/SolCasinoTg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/telegram.svg"
                    height={30}
                    width={30}
                    alt="Telegram"
                  />
                </Link>
                <Image
                  src="/images/icon.svg"
                  height={30}
                  width={30}
                  alt="Icon"
                />
              </div>

              <div>
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
            </div>
          </div>
        </div>
      )}

      {/* MAIN MODAL (ABOUT, TOKENOMICS, CONTRACT) */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          ></div>

          <div
            className={`
              relative flex flex-col w-full mx-4
              bg-white/10 backdrop-blur-md border border-white/25
              text-[#DADADA] shadow-md z-10 rounded-[6px]
              ${
                isMobile
                  ? "max-w-[574px]"
                  : modalType === "tokenomics"
                  ? "max-w-[80%]"
                  : "max-w-[574px]"
              }
              max-h-[55vh] 
              md:max-h-[80vh]
              overflow-y-auto
              pb-6
            `}
          >
            {/* Close Button */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <Image
                src="/images/close-modal.svg"
                height={20}
                width={20}
                alt="X"
              />
            </div>

            {/* About Modal */}
            {modalType === "about" && (
              <div className="flex flex-col gap-4">
                <div className="py-[12px] px-[30px] bg-[rgba(0,0,0,0.12)]">
                  <h2 className="text-[26px] text-white font-semibold">
                    About Us
                  </h2>
                </div>
                <div className="px-[30px] py-[20px]">
                  <p className="text-[18px]">
                    Solana Casino: The memecoin that pays you SOL every 21
                    minutes—hold more, win more. Get a chance to win the jackpot
                    every time the pool accumulates 7 SOL. No luck, just
                    patience. Welcome to the only casino where the house always
                    pays you.
                  </p>
                </div>
              </div>
            )}

            {/* Tokenomics Modal */}
            {modalType === "tokenomics" && (
              <div className="flex flex-col gap-4">
                <div className="py-[12px] px-[30px] bg-[rgba(0,0,0,0.12)]">
                  <h2 className="text-[26px] text-white font-semibold">
                    Tokenomics
                  </h2>
                </div>
                <div className="space-y-8 px-[30px] py-[20px]">
                  {/* First row of 3 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div className="">
                      <div className="font-semibold mb-2">Total Supply</div>
                      <div>1,000,000,000</div>
                    </div>
                    <div className="">
                      <div className="font-semibold mb-2">Buy/Sell Tax</div>
                      <div>7.77%</div>
                    </div>
                    <div className="">
                      <div className="font-semibold mb-2">
                        Holder Reward Distribution (5%)
                      </div>
                      <div>
                        SOL distributed automatically every 21 minutes *LPs
                        excluded
                      </div>
                    </div>
                  </div>
                  {/* Second row of 3 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div className="">
                      <div className="font-semibold mb-2">
                        Jackpot Pool (2.77%)
                      </div>
                      <div>
                        Every time the pool accumulates 7 SOL, one lucky winner
                        wins it all (higher holdings = higher win %) *LPs
                        excluded
                      </div>
                    </div>
                    <div className="">
                      <div className="font-semibold mb-2">Fair Launch</div>
                      <div>
                        No pre-sale or externally allocated tokens. 100%
                        community driven
                      </div>
                    </div>
                    <div className="">
                      <div className="font-semibold mb-2">
                        Developer Holdings (Never Sold)
                      </div>
                      <div>
                        5% – Allocated for marketing, project development, and
                        ecosystem growth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Contract Modal */}
            {modalType === "contract" && (
              <div className="flex flex-col gap-4">
                <div className="py-[12px] px-[30px] bg-[rgba(0,0,0,0.12)]">
                  <h2 className="text-2xl text-white font-semibold">
                    Contract Address
                  </h2>
                </div>

                {/* Address + Copy Row */}
                <div className="px-[30px] py-[20px]">
                  <div className="flex items-center justify-between gap-4 border border-white/40 rounded px-3 py-2">
                    {/* Show first 4 and last 4 characters */}
                    <p className="text-[18px] whitespace-nowrap">
                      {displayAddress}
                    </p>
                    {/* Copy text link (no border) */}
                    <button
                      onClick={handleCopy}
                      className="text-[18px] cursor-pointer focus:outline-none"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
