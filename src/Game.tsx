import { useParams } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { Switch } from "@headlessui/react";
import HeartIcon from "./assets/heart_icon.svg";
import React from "react";
import Action from "./Action";
import { GameSwiper, Leaderboard } from "./App";
import GemAward from "./assets/gem_icon_award.svg";
import GemSilver from "./assets/gem_silver.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ToogleExample({ setClicked }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-sm font-semibold ${
          enabled ? "text-[#B4A6E2]" : "text-white"
        }`}
      >
        Fun Mode
      </span>
      <Switch
        checked={enabled}
        onChange={(e) => {
          setEnabled(e);
          setClicked(e);
        }}
        className={classNames(
          enabled ? "bg-[#A37EF2]" : "bg-transparent",
          "relative inline-flex h-5 w-9  !ring-0 flex-shrink-0 border border-[#B4A6E2] cursor-pointer rounded-full   transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0"
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-[18px]" : "translate-x-0.5",
            "pointer-events-none  mt-0.5 inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow !ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <span
        className={`  font-semibold text-sm ${
          !enabled ? "text-[#B4A6E2]" : "text-white"
        }`}
      >
        Real Mode
      </span>
    </div>
  );
}

const Game = () => {
  const [clicked, setClicked] = useState(0);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);

  // Handle the ESC key to exit fullscreen
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsFullscreen(false);
    }
  };

  // Detect when the fullscreen mode changes (e.g., browser going into or out of fullscreen)
  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    // Add keydown event listener to listen for the ESC key
    window.addEventListener("keydown", handleKeyDown);

    // Add event listener for fullscreen change
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (isFullscreen) {
        // Exit fullscreen
        document.exitFullscreen();
      } else {
        // Request fullscreen
        iframeRef.current.requestFullscreen?.() ||
          iframeRef.current.webkitRequestFullscreen?.();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-[#191939] p-7 rounded-xl flex flex-col">
        <div className="iframe_wrapper">
          <iframe
            key={clicked}
            ref={iframeRef}
            id="game"
            style={{
              border: "none",
              position: isFullscreen ? "fixed" : "relative",
              top: isFullscreen ? 0 : "auto",
              left: isFullscreen ? 0 : "auto",
              width: isFullscreen ? "100vw" : "100%",
              height: isFullscreen ? "100vh" : "600px",
              zIndex: isFullscreen ? 9999 : "auto",
            }}
            allowFullScreen
            src="https://static-live.hacksawgaming.com/launcher/static-launcher.html?gameid=1067&amp;channel=desktop&amp;language=en&amp;currency=USD&amp;partner=roobet_prod&amp;mode=demo&amp;token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxODZiZTRmLWI3Y2YtNGMxMy1iNTQzLTE4MTQ5NzRjMDVjYyIsInNlcnZpY2UiOiJoYWNrc2F3IiwiaWF0IjoxNzM4MTYyODc3LCJleHAiOjE3MzgxNjMxNzd9.U6pgFsrpkL5ablEXKZNIk8YGG-v5kDjs1w8YGYnEUGs&amp;lobbyurl=https://roobet.com/"
          ></iframe>
        </div>
        <div className="bg-[#090C1D] rounded-b-xl flex items-center justify-between  mt-1 h-full py-2 px-4">
          <div className="flex items-center">
            <ToogleExample setClicked={setClicked} />
          </div>
          <div className="flex items-center gap-2">
            <img src={HeartIcon} />
            <span
              className="!text-3xl text-white cursor-pointer material-icons"
              onClick={toggleFullscreen}
            >
              fullscreen
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-7">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">
              Wanted Dead or <br /> a Wild
            </h1>
            <span className="text-[#B4A6E2] font-medium text-xl hover:text-[#F2EEFF] cursor-pointer">
              Hacksaw Gaming
            </span>
          </div>
          <div className="col-span-3">
            <div className="flex flex-wrap items-center gap-2">
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <div className="bg-[#56C400] text-white border-2 leading-3 cursor-pointer hover:border-[#7841EE] border-transparent px-1.5 py-2.5 rounded-xl font-bold">
                # Hacksaw Gaming
              </div>
            </div>
          </div>
        </div>
        <span className="my-3 text-sm font-medium text-white">
          Play Wanted Dead or a Wild on Roobet Crypto Casino, Crypto's Fastest
          Growing Casino! Enjoy a library of 6,300+ exciting games and counting,
          including games by Hacksaw Gaming, such as Wanted Dead or a Wild. Play
          all kinds of slots games with Bitcoin, Ethereum, and other
          cryptocurrencies, or try Wanted Dead or a Wild for free in Fun Mode
          with the largest online gambling community. Join the fun!
        </span>

        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <div className="text-white border-b-2 cursor-pointer border-[#7841EE] text-sm w-40 pb-2 font-bold text-center">
              Highest Wins
            </div>

            <div className="text-[#B4A6E2] cursor-pointer hover:text-white text-sm w-40 pb-2 font-bold text-center">
              Luckiest Wins
            </div>
          </div>

          <div className="overflow-hidden rounded-b-2xl rounded-r-2xl">
            <Row />
            <Row icon={GemSilver} />
            <Row />
          </div>
        </div>
      </div>
      <GameSwiper />

      <Leaderboard />
    </div>
  );
};

export default Game;

const Tag = () => {
  return (
    <div className="bg-[#5027A7] text-white border-2 leading-3 cursor-pointer hover:border-[#7841EE] border-transparent px-1.5 py-2.5 rounded-xl font-bold">
      # Welcome Back
    </div>
  );
};

const Row = ({ icon = GemAward }) => {
  return (
    <div className="grid grid-cols-4 gap-0.5 mb-0.5">
      <div className="bg-[#2C2852] flex items-center gap-3 px-4 py-2">
        <img src={icon} />
        <span className="text-xl font-bold text-white">Hidden</span>
      </div>
      <div className="bg-[#2C2852] flex flex-col gap-0 px-4 py-3">
        <span className="text-[#B4A6E2] font-medium  text-sm">Payout</span>
        <span className="text-base font-bold text-[#64E300]">
          $9,253,350.00
        </span>
      </div>
      <div className="bg-[#2C2852] flex flex-col gap-0 px-4 py-3">
        <span className="text-[#B4A6E2] font-medium  text-sm">Wager</span>
        <span className="text-base font-bold text-white">$150,000.00</span>
      </div>
      <div className="bg-[#2C2852] flex flex-col gap-0 px-4 py-3">
        <span className="text-[#B4A6E2] font-medium  text-sm">Mult</span>
        <span className="text-base font-bold text-white">61.69x</span>
      </div>
    </div>
  );
};
