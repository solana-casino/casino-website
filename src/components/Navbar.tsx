
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const closeModal = () => {
    setModalType(null);
    setCopied(false); // Reset copy state when modal closes
  };

  // Example contract address
  const CONTRACT_ADDRESS = "SQtSMvYfXome11YgxFMD75hNbGQXW5QTin";
  // Let’s blur only the last 6 characters
  const visiblePart = CONTRACT_ADDRESS.slice(0, -6);
  const blurredPart = CONTRACT_ADDRESS.slice(-6);

  // Copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    // Optional: revert to "Copy" after a delay
    setTimeout(() => setCopied(false), 2000);
  };

  // For tokenomics, use a wider modal
  const modalMaxWidth = modalType === "tokenomics" ? "w-[1000px]" : "max-w-lg";

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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          ></div>

          {/* Modal Container */}
          <div
            className={`
              relative flex flex-col w-full mx-4 p-6
              bg-white/10 backdrop-blur-md border border-white/25
              text-[#DADADA] rounded-none shadow-md z-10
              ${modalMaxWidth}
            `}
          >
            {/* Close Button */}
            <button
              className="
                absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                rounded-full border border-white text-white hover:bg-white/20
                transition-colors text-xl
              "
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* About Modal */}
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

            {/* Tokenomics Modal */}
            {modalType === "tokenomics" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-white font-semibold">Tokenomics</h2>
                <div className="space-y-8">
                  {/* First row of 3 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <div className="font-semibold">Total Supply</div>
                      <div>1,000,000,000</div>
                    </div>
                    <div>
                      <div className="font-semibold">Buy/Sell Tax</div>
                      <div>7.77%</div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        Holder Reward Distribution (5%)
                      </div>
                      <div>SOL distributed every 21 minutes</div>
                    </div>
                  </div>
                  {/* Second row of 3 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <div className="font-semibold">Jackpot Pool (2.77%)</div>
                      <div>
                        Every time the pool reaches 7 SOL, one lucky winner
                        wins it all (higher holdings = better odds)
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Fair Launch</div>
                      <div>100%</div>
                    </div>
                    <div>
                      <div className="font-semibold">Dev Holdings (Never Sold)</div>
                      <div>5% allocated for team, marketing and ecosystem growth</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contract Modal */}
            {modalType === "contract" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-white font-semibold">
                  Contract Address
                </h2>

                {/* Address + Copy Row */}
                <div className="flex items-center justify-between gap-4 border border-white/40 rounded px-3 py-2">
                  {/* Show the majority, blur last 6 chars */}
                  <p className="text-[18px] whitespace-nowrap">
                    {visiblePart}
                    <span className="blur-sm">{blurredPart}</span>
                  </p>

                  {/* Copy text link (no border) */}
                  <button
                    onClick={handleCopy}
                    className="text-[18px] cursor-pointer hover:underline focus:outline-none"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
