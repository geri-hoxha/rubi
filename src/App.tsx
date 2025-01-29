import Banner from "./assets/banner.jpg";
import Button, { InactiveButton } from "./Button";
import Action from "./Action";
import SearchIcon from "./assets/search_icon.svg";
import GiftIcon from "./assets/gift_icon.svg";
import BellIcon from "./assets/bell_icon.svg";
import ChatIcon from "./assets/chat_icon.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import CloseArrow from "./assets/close_arrow_icon.svg";
import CasinoIcon from "./assets/casino_icon.svg";
import HeartIcon from "./assets/heart_icon.svg";
import KangarooIcon from "./assets/kangaroo.svg";
import CrownIcon from "./assets/crow_icon.svg";
import HeadphonesIcon from "./assets/headphones_icon.svg";
import React, { useEffect, useState } from "react";
import CountdownIcon from "./assets/countdown_icon.svg";
import Banner_1 from "./assets/Banner_1.png";
import Banner_2 from "./assets/Banner_2.png";
import List from "./assets/List.png";
import Popover from "./Popover";

export function Layout({ children }) {
  const [number, setNumber] = useState(102);

  useEffect(() => {
    setInterval(() => {
      setNumber((prev) => prev + 13);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col  bg-[#191939] min-h-screen   ">
      <div className="sticky top-0 left-0 z-50 flex items-center bg-[#191939]">
        <div className="h-[72px] w-[220px] flex items-center p-4">
          <Action>
            <img src={CloseArrow} />
          </Action>
        </div>
        <div className="container flex items-center justify-between w-full px-4 py-2 mx-auto">
          <a className="w-[170px]">
            <img
              src={
                "https://roobet.com/assets/images/logo.b3906f86b9d3372ca860.svg"
              }
            />
          </a>

          <div className="flex items-center bg-[#090C1D] rounded-2xl p-1  pl-2.5 gap-2">
            <img
              className="w-6 h-6"
              src="https://roobet.com/assets/images/newDesignIcons/BTC.711b31f916ce0bd60736.svg"
            />
            <span className="font-medium text-white ">$0.00</span>
            <div className="hover:bg-[#2c2852] cursor-pointer flex items-center transition-all duration-300 rounded-md">
              <span className="text-white material-icons">
                keyboard_arrow_down
              </span>
            </div>
            <Button>Deposit</Button>
          </div>

          <div className="flex items-center gap-2">
            <Action>
              <img src={SearchIcon} />
            </Action>

            <Popover
              element={
                <div className="flex flex-col border-4 border-[#090C1D]   bg-[#191939] w-96 rounded-2xl">
                  <div className="flex items-center justify-between py-4 px-4 border-b-2 border-[#090C1D]">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-9"
                        src={
                          "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=auto,quality=85/https://roobet.com/assets/images/rewards/rakeback/weekly.69d3e54735f2de9add04.png"
                        }
                      />
                      <div className="flex flex-col ">
                        <span className="text-lg font-bold text-white">
                          Vault
                        </span>
                        <span className="text-xs">
                          <span className="text-[#FFCE00] font-extrabold">
                            $0.00
                          </span>{" "}
                          <span className="text-[#B4A6E2]  font-extrabold">
                            Pending
                          </span>
                        </span>
                      </div>
                    </div>

                    <InactiveButton>20h 52m</InactiveButton>
                  </div>
                  <div className="flex items-center justify-between py-4 px-4 border-b-2 border-[#090C1D]">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-9"
                        src={
                          "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=auto,quality=85/https://roobet.com/assets/images/rewards/rakeback/weekly.69d3e54735f2de9add04.png"
                        }
                      />
                      <span className="text-lg font-bold text-white">
                        Insant Rakeback
                      </span>
                    </div>

                    <InactiveButton>Claim</InactiveButton>
                  </div>
                  <div className="flex items-center justify-between py-4 px-4 border-b-2 border-[#090C1D]">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-9"
                        src={
                          "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=auto,quality=85/https://roobet.com/assets/images/rewards/rakeback/weekly.69d3e54735f2de9add04.png"
                        }
                      />
                      <span className="text-lg font-bold text-white">
                        Daily Bonus
                      </span>
                    </div>

                    <InactiveButton>Claim</InactiveButton>
                  </div>
                  <div className="flex items-center justify-between py-4 px-4 border-b-2 border-[#090C1D]">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-9"
                        src={
                          "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=auto,quality=85/https://roobet.com/assets/images/rewards/rakeback/weekly.69d3e54735f2de9add04.png"
                        }
                      />
                      <span className="text-lg font-bold text-white">
                        Weekly Bonus
                      </span>
                    </div>

                    <InactiveButton>Claim</InactiveButton>
                  </div>
                  <div className="flex items-center justify-between py-4 px-4 border-b-2 border-[#090C1D]">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-9"
                        src={
                          "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=auto,quality=85/https://roobet.com/assets/images/rewards/rakeback/weekly.69d3e54735f2de9add04.png"
                        }
                      />
                      <span className="text-lg font-bold text-white">
                        Monthly Bonus
                      </span>
                    </div>

                    <InactiveButton>Claim</InactiveButton>
                  </div>

                  <div className="flex items-center justify-between px-4 py-4 ">
                    <button className="bg-[#2C2852] hover:bg-[#463E7A] transition-all duration-300 text-sm font-bold text-white rounded-lg w-full py-2">
                      Explore Rewards
                    </button>
                  </div>
                </div>
              }
            >
              <Action>
                <div className="text-[#F1EDFF] !text-lg  material-icons">
                  <img src={GiftIcon} />
                </div>
              </Action>
            </Popover>

            <Action>
              <div className="text-[#F1EDFF] !text-lg  material-icons">
                <img src={BellIcon} />
              </div>
            </Action>

            <div className="flex  group items-center bg-[#090C1D] rounded-2xl py-2  px-2.5 gap-2 cursor-pointer">
              <img
                className="h-6 w-810"
                src="https://roobet.com/cdn-cgi/image/dpr=1,width=38.4,height=24,quality=85/https://roobet.com/assets/images/rewards/levelcons/level0.622b052dc6da0861e027.png"
              />
              <div className="flex flex-col w-24 gap-1">
                <span className="text-sm font-bold text-white ">John123</span>
                <ProgressBar
                  completed={60}
                  height="6px"
                  customLabel=" "
                  bgColor="#FFCE00"
                  baseBgColor="#191939"
                />
              </div>
              <div className="group-hover:bg-[#2c2852] cursor-pointer flex items-center transition-all duration-300 rounded-md">
                <span className="text-white material-icons">
                  keyboard_arrow_down
                </span>
              </div>
            </div>

            <Action>
              <img src={ChatIcon} />
            </Action>
          </div>
        </div>
      </div>

      <div className="flex h-full ">
        <div className="flex flex-col px-4  gap-3 w-[280px]"></div>
        <div className="flex flex-col px-4  gap-3 w-[240px] fixed top-20 left-0 ">
          <Menu />
          <Menu />
          <div className="bg-[#2C2852]  flex items-center gap-4 px-2 py-1.5 rounded-xl ">
            <img src={CrownIcon} />
            <span className="text-sm font-bold text-white text">VIP Club</span>
          </div>
          <div className="bg-[#2C2852]  flex items-center gap-4 px-2 py-1.5 rounded-xl ">
            <img src={HeadphonesIcon} />
            <span className="text-sm font-bold text-white text">
              Live Support
            </span>
          </div>

          <div className="bg-[#090C1D] px-4 py-2 flex flex-col rounded-xl">
            <span className="text-[#B4A6E2] text-xs font-bold">
              Total Bets Placed
            </span>
            <span className="text-sm font-bold text-white">
              6,832,918,{number}
            </span>
          </div>
        </div>

        <div className="bg-[#090C1D] w-full h-min-screen rounded-2xl">
          <div className="container flex flex-col w-full h-auto p-6 mx-auto ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export const MainBody = () => {
  return (
    <>
      <div className="flex items-center w-full ">
        <div className="w-1/2 h-36	 bg-[#191939] p-6 rounded-l-2xl">
          <div className="flex flex-col gap-4 ">
            <span className="text-[#FFCE00] font-extrabold text-3xl">
              $100,000 <span className="text-white">Weekly Raffle</span>
            </span>
            <div className="flex w-max rounded-2xl items-center bg-[#090C1D] text-2xl p-1 gap-2">
              <Button>Learn More</Button>
              <div className="flex items-center gap-2 px-6 text-sm font-bold text-white">
                <img src={CountdownIcon} /> 4d 12h 36m
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 p-6 h-36 rounded-r-2xl">
          <div className="absolute top-0 left-0 z-10 w-full custom_shadow h-36"></div>
          <img
            className="absolute top-0 left-0 object-cover w-full h-36 rounded-r-2xl"
            src={
              "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=256,quality=85/https://roobet-dev-public-images-prod.s3.amazonaws.com/bannerImage-Vd48u21Bz.jpeg"
            }
          />

          <div className="flex w-max rounded-xl items-center z-20 relative ml-auto bg-[#090C1D] text-2xl p-2 gap-2">
            <div className="flex items-center gap-2 px-2 text-xs font-bold text-white">
              <img src={CountdownIcon} /> Your Tickets 0
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="relative">
          <img
            className="absolute top-0 left-0 z-10 w-full h-full"
            src={
              "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=auto,quality=85/https://roobet.com/assets/images/games/casino/casinoBg.a25defba92616c3a38bc.png"
            }
          />
          <div className="relative z-20 flex flex-col mt-20 ml-6">
            <span className="text-2xl font-bold text-white">Casino</span>
            <span className="font-bold text-white ">Thousands of Games</span>
          </div>
        </div>

        <div className="relative">
          <img
            className="absolute top-0 left-0 z-10 w-full h-full"
            src={
              "https://roobet.com/cdn-cgi/image/dpr=1,width=auto,height=auto,quality=85/https://roobet.com/assets/images/games/sportsbetting/sportsbookBg.7576b0721b9c137d21c6.png"
            }
          />
          <div className="relative z-20 flex flex-col mt-20 mb-6 ml-8">
            <span className="text-2xl font-bold text-white">
              Sports Betting
            </span>
            <span className="font-bold text-white ">Support Your Team</span>
          </div>
        </div>
      </div>

      <GameSwiper />

      <div className="flex flex-col gap-4 ">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">Recently Played</h2>

          <div className="flex items-center">
            <Action className="border-2 rounded-r-none">
              <span className="text-white material-icons">
                keyboard_arrow_left
              </span>
            </Action>
            <Action className="border-2 rounded-l-none">
              <span className="text-white material-icons">
                keyboard_arrow_right
              </span>
            </Action>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
        </div>
      </div>

      <Leaderboard />
    </>
  );
};

export const GameSwiper = () => {
  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Recently Played</h2>

        <div className="flex items-center">
          <Action className="border-2 rounded-r-none">
            <span className="text-white material-icons">
              keyboard_arrow_left
            </span>
          </Action>
          <Action className="border-2 rounded-l-none">
            <span className="text-white material-icons">
              keyboard_arrow_right
            </span>
          </Action>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="w-52">
      <Action className="w-full p-1.5 pl-2 rounded-b-none bg-[#463E7A] !border-2 h-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img src={CasinoIcon} />
            <span className="font-bold text-white">Casino</span>
          </div>
          <div className=" bg-[#9789cd7a] cursor-pointer flex items-center   rounded-lg">
            <span className="text-white material-icons">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </Action>
      <div className="bg-[#2C2852]  w-[205px] mx-auto flex flex-col rounded-b-2xl cursor-pointer">
        <div className="flex items-center gap-4 px-2 py-1.5 hover:bg-[#463E7A] transition-all duration-300">
          <img src={HeartIcon} />
          <span className="text-[#D9D1F4] font-medium text-xs">
            Roobet Games
          </span>
        </div>
        <div className="flex items-center gap-4 px-2 py-1.5 hover:bg-[#463E7A] transition-all duration-300">
          <img src={KangarooIcon} />
          <span className="text-[#D9D1F4] font-medium text-xs">Popolar</span>
        </div>
        <div className="flex items-center gap-4 px-2 py-1.5 hover:bg-[#463E7A] transition-all duration-300">
          <img src={HeartIcon} />
          <span className="text-[#D9D1F4] font-medium text-xs">Slots</span>
          <div className="bg-[#191939] text-[#D9D1F4] text-[11px] px-2 ml-auto py-0.5 rounded-md font-bold">
            LIVE
          </div>
        </div>
        <div className="flex items-center gap-4 px-2 py-1.5 hover:bg-[#463E7A] transition-all duration-300">
          <img src={KangarooIcon} />
          <span className="text-[#D9D1F4] font-medium text-xs">Blackjack</span>
        </div>
        <div className="flex items-center gap-4 px-2 py-1.5 hover:bg-[#463E7A] transition-all duration-300 ">
          <img src={HeartIcon} />
          <span className="text-[#D9D1F4] font-medium text-xs">Roulette</span>
        </div>
        <div className="flex items-center gap-4 px-2 py-1.5 hover:bg-[#463E7A] transition-all duration-300">
          <img src={HeartIcon} />
          <span className="text-[#D9D1F4] font-medium text-xs">
            Roobet Games
          </span>
        </div>
        <div className="flex items-center gap-4 px-2 py-1.5 hover:bg-[#463E7A] transition-all duration-300">
          <img src={HeartIcon} />
          <span className="text-[#D9D1F4] font-medium text-xs">
            Roobet Games
          </span>
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="border-2 border-transparent cursor-pointer rounded-2xl hover:border-white">
      <img
        className="rounded-2xl"
        src={
          "https://roobet.com/cdn-cgi/image/dpr=1,width=195,height=260,quality=90,blur=0,fit=cover/https://roobet-dev-public-images-prod.s3.amazonaws.com/housegames:linearmines-EXAHDP212.png"
        }
      />
    </div>
  );
};

export const Leaderboard = () => {
  const [nodes, setNodes] = useState([
    <Row />,
    <Row />,
    <Row />,
    <Row />,
    <Row />,
    <Row />,
    <Row />,
    <Row />,
  ]);

  function generateGUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  return (
    <div className="flex flex-col my-7">
      <div className="flex items-center gap-4">
        <div className="text-white border-b-2 cursor-pointer border-[#7841EE] text-sm w-40 pb-2 font-bold text-center">
          All
        </div>

        <div className="text-[#B4A6E2] cursor-pointer hover:text-white text-sm w-40 pb-2 font-bold text-center">
          High Wins
        </div>

        <div className="text-[#B4A6E2] cursor-pointer hover:text-white text-sm w-40 pb-2 font-bold text-center">
          Licky Wins
        </div>

        <div className="text-[#B4A6E2] cursor-pointer hover:text-white text-sm w-40 pb-2 font-bold text-center">
          My Wagers
        </div>
      </div>

      <div className="bg-[#2C2852] p-3 border-t-2 border-[#090C1D]">
        <div className="grid grid-cols-6">
          <span className="text-sm font-bold text-white">GAME</span>
          <span className="text-sm font-bold text-white">USERNAME</span>
          <span className="text-sm font-bold text-white">TIME</span>
          <span className="text-sm font-bold text-white">WAGER</span>
          <span className="text-sm font-bold text-white">MULTIPLIER</span>
          <span className="text-sm font-bold text-white">PAYOUT</span>
        </div>
      </div>

      <div className="bg-[#191939] px-3 relative overflow-hidden rounded-b-2xl">
        <div className="grid grid-cols-6 gap-y-1 gap-x-4">
          {nodes.map((x) => {
            return <React.Fragment key={generateGUID()}>{x}</React.Fragment>;
          })}
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[70px] bg-gradient-to-t from-[#191939] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const Row = () => {
  return (
    <>
      <div className="flex items-center gap-2 px-2 text-sm font-bold text-white">
        <img
          className="object-cover w-10 h-10 mt-1 rounded-sm"
          src={
            "https://roobet.com/cdn-cgi/image/dpr=1,width=195,height=260,quality=90,blur=0,fit=cover/https://roobet-dev-public-images-prod.s3.amazonaws.com/housegames:linearmines-EXAHDP212.png"
          }
        />
        <span>Mission X</span>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-white">
        <img
          className="rounded-2xl"
          src={
            "https://roobet.com/cdn-cgi/image/dpr=1,width=25.6,height=16,quality=85/https://roobet.com/assets/images/rewards/levelcons/gold4.e39065e4f086541002f5.png"
          }
        />
        <span>SweetFlips</span>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-white">
        <span>10:22 AM</span>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-white">
        <span>$3,000.00</span>

        <img
          className="w-4 h-4"
          src="https://roobet.com/assets/images/newDesignIcons/BTC.711b31f916ce0bd60736.svg"
        />
      </div>

      <div className="flex items-center gap-2 text-sm font-bold text-[#64E300]">
        <span>2.25x</span>
      </div>

      <div className="flex items-center gap-2 text-sm font-bold text-[#64E300]">
        <span>$3,000.00</span>
      </div>
    </>
  );
};
