import React, { useState, useEffect } from 'react';
import { X, Mail, Plus, Gift, Users, ChevronRight, ChevronLeft, LogOut, Globe, ClipboardCheck, Wallet, Clock, Download, Trophy, Link, Share2, AlertTriangle, Info, Star } from 'lucide-react';

export default function RabetClone() {
  const [showBanner, setShowBanner] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVipLevel, setSelectedVipLevel] = useState(0);
  const [selectedDepositAmount, setSelectedDepositAmount] = useState(500);
  const [selectedWithdrawalAmount, setSelectedWithdrawalAmount] = useState(100);
  const [showDepositTab, setShowDepositTab] = useState(true);
  const [showAgentRules, setShowAgentRules] = useState(false);
  const [showMailPanel, setShowMailPanel] = useState(false);
  const [showJackpots, setShowJackpots] = useState(false);
  const [showWithdrawPanel, setShowWithdrawPanel] = useState(false);
  const [showAgentRewardPopup, setShowAgentRewardPopup] = useState(true);
  const [hasSeenAgentReward, setHasSeenAgentReward] = useState(false);

  useEffect(() => {
    if (activeTab === 'home') {
      // Fade in when home tab is shown
      const fadeIn = setTimeout(() => {
        setShowJackpots(true);
      }, 800);

      // Fade out after 6 seconds
      const fadeOut = setTimeout(() => {
        setShowJackpots(false);
      }, 6800);

      return () => {
        clearTimeout(fadeIn);
        clearTimeout(fadeOut);
      };
    }
  }, [activeTab]);

  const games = {
    hot: [
      { name: 'BUFFALO CHARGE', image: '/Rabet/buffalocharge.png', vip: false },
      { name: 'PATTI', image: '/Rabet/patti.png', vip: false },
      { name: 'FORTUNE GEMS 2', image: '/Rabet/FortuneGems3.png', vip: false },
      { name: 'CHICKEN ROAD', image: '/Rabet/chickenroads.png', vip: true },
      { name: 'CHICKEN ROAD 2', image: '/Rabet/chickenroads.png', vip: true },
      { name: 'BIG BATTLE', image: '/Rabet/squidgame.png', vip: false },
      { name: 'PLINKO', image: '/Rabet/plinko.png', vip: false },
      { name: 'JACKPOT JOKER', image: '/Rabet/jackpotjoker.png', vip: true },
      { name: 'FORTUNE GEMS 3', image: '/Rabet/FortuneGems3.png', vip: true },
    ],
    slots: [
      { name: 'MONEY COMING', image: '/Rabet/MoneyComing.png', vip: false },
      { name: 'JACKPOT JOKER', image: '/Rabet/jackpotjoker.png', vip: true },
      { name: 'OLYMPUS 1000', image: '/Rabet/thegodsofolympus.png', vip: false },
      { name: 'EXPLORER SLOTS', image: '/Rabet/Keno.png', vip: true },
      { name: 'WILD BOUNTY SHOWDOWN', image: '/Rabet/captainbounty.png', vip: false },
      { name: 'CAPTAIN\'S BOUNTY', image: '/Rabet/captainbounty.png', vip: false },
    ],
    fishing: [
      { name: 'ALL-STAR', image: '/Rabet/allstarfishing.png', vip: true },
      { name: 'HAPPY FISHING', image: '/Rabet/allstarfishing.png', vip: true },
      { name: 'BOMBING FISHING', image: '/Rabet/bombingfishing.png', vip: true },
      { name: 'BOOM LEGEND', image: '/Rabet/Boom Legend.png', vip: true },
      { name: 'DINOSAUR TYCOON', image: '/Rabet/snake.png', vip: true },
      { name: 'DRAGON FORTUNE', image: '/Rabet/dragonfortune.png', vip: true },
    ],
    video: [
      { name: '2 HAND CASINO HOLD\'EM', image: '/Rabet/richwheel.png', vip: true },
      { name: '6+POKER', image: '/Rabet/redblack.png', vip: true },
      { name: 'BAC BO', image: '/Rabet/BACKBO.png', vip: true },
      { name: 'BACCARAT CONTROL SQUEEZE', image: '/Rabet/controlsqueeze.png', vip: true },
      { name: 'BACCARAT SIDEBET PERFECT PAIR', image: '/Rabet/controlsqueeze.png', vip: true },
      { name: 'BACCARAT SQUEEZE', image: '/Rabet/Mahjongways2.png', vip: true },
    ],
    sports: [
      { name: 'CRICKET', image: '/Rabet/cricket.png', vip: true },
      { name: 'CRICKET', image: '/Rabet/Cricket2.png', vip: true },
      { name: 'CRICKET', image: '/Rabet/Cricket3.png', vip: true },
      { name: 'PAKISTAN', image: '🇵🇰', vip: true },
      { name: 'SOUTH AFRICA', image: '/Rabet/Basketball.png', vip: true },
      { name: 'BASKETBALL', image: '/Rabet/Cricket4.png', vip: true },
    ],
    poker: [
      { name: 'PATTI', image: '/Rabet/patti.png', vip: false },
      { name: 'RUMMY', image: '/Rabet/Rummy.png', vip: false },
      { name: 'PENALTY KICK', image: '/Rabet/penaltykick.png', vip: false },
      { name: 'MINES', image: '/Rabet/WildBandito.png', vip: false },
      { name: 'KENO', image: '/Rabet/Keno.png', vip: true },
      { name: 'HOLDEM', image: '/Rabet/holdem.png', vip: false },
    ],
    pg: [],
    massBet: [],
    jili: [],
  };

  const categoryTabs = [
    { id: 'all', icon: '/Rabet/All.png', label: 'ALL' },
    { id: 'hot', icon: '/Rabet/hot.png', label: 'HOT' },
    { id: 'slots', icon: '/Rabet/777.png', label: 'SLOTS' },
    { id: 'poker', icon: '/Rabet/cards.png', label: 'POKER' },
    { id: 'pg', icon: '/Rabet/PG.png', label: 'PG' },
    { id: 'mass', icon: '⚽', label: 'Mass Bet' },
  ];

  const slides = [
    {
      title: 'FIRST TOP-UP',
      subtitle: 'Rebate Up To',
      percentage: '200%!',
      image: '/Rabet/firstdepositoffer.png',
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
    },
    {
      title: 'WEEKLY CASHBACK',
      subtitle: 'Get Back Up To',
      percentage: '10%!',
      image: '/Rabet/FirstTopup.png',
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
    },
    {
      title: 'VIP BONUS',
      subtitle: 'Exclusive Rewards Up To',
      percentage: '150%!',
      image: '/Rabet/GetpromoCode.png',
      gradient: 'from-yellow-600 via-orange-600 to-red-600',
    },
    {
      title: 'DAILY RELOAD',
      subtitle: 'Boost Your Deposit By',
      percentage: '50%!',
      image: '/Rabet/2000 supremedeposit.png',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    },
    {
      title: 'REFERRAL SPECIAL',
      subtitle: 'Earn Up To',
      percentage: '₹500!',
      image: '/Rabet/invitationchallenge2000.png',
      gradient: 'from-pink-600 via-rose-600 to-red-600',
    },
    {
      title: 'JACKPOT HUNT',
      subtitle: 'Win Up To',
      percentage: '500%!',
      image: '/Rabet/upto50.png',
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
    },
    {
      title: 'LOYALTY POINTS',
      subtitle: 'Redeem For Up To',
      percentage: '200% Bonus!',
      image: '/Rabet/vip3for500.png',
      gradient: 'from-cyan-600 via-sky-600 to-blue-600',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const GameCard = ({ game }) => (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-all bg-[#1a0b3d] border border-white/5">
      <div className="aspect-[3/4] flex items-center justify-center relative overflow-hidden">
        {game.image && game.image.endsWith('.png') ? (
          <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
        ) : (
          <div className="relative z-10">
            <span className="text-5xl md:text-6xl drop-shadow-2xl">{game.image || '🎮'}</span>
          </div>
        )}
      </div>
      {game.vip && (
        <div className="absolute top-1 left-1 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-lg z-10">
          Vip1
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <p className="text-white font-black text-[10px] text-center drop-shadow-lg leading-tight uppercase tracking-tighter">{game.name}</p>
      </div>
    </div>
  );

  const GameSection = ({ title, games, icon }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2 px-3">
        <div className="flex items-center gap-2 bg-[#1a0b3d] rounded-xl px-4 py-1.5 border border-white/5 shadow-lg">
          {icon && icon.endsWith('.png') ? (
            <img src={icon} alt={title} className="w-5 h-5 object-contain" />
          ) : (
            <span className="text-xl">{icon}</span>
          )}
          <h2 className="text-white font-black text-sm tracking-widest uppercase">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-1">
            <button className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 hover:bg-white/10 transition-all">
              <ChevronLeft size={16} className="text-white/40" />
            </button>
            <button className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 hover:bg-white/10 transition-all">
              <ChevronRight size={16} className="text-white/40" />
            </button>
          </div>
          <button className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 hover:bg-white/10 transition-all">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-[1px]"></div>
              <div className="w-1.5 h-1.5 bg-white/60 rounded-[1px]"></div>
              <div className="w-1.5 h-1.5 bg-white/60 rounded-[1px]"></div>
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-[1px]"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-3">
        {(games || []).slice(0, 6).map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0518] flex justify-center items-start overflow-x-hidden">
      <div className="w-full max-w-[480px] min-h-screen bg-gradient-to-br from-[#642aff] via-purple-950 to-[#a74e4e] text-white font-sans relative shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col">
        {/* Sidebar Overlay */}
        <div className={`fixed inset-0 z-[2000] flex justify-center transition-all duration-300 ${showSidebar ? 'visible' : 'invisible'}`}>
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setShowSidebar(false)}
          ></div>
          <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[480px] h-full pointer-events-none`}>
            <div className={`absolute left-0 top-0 bottom-0 w-72 bg-[#1a0b3d] shadow-2xl transition-transform duration-300 pointer-events-auto ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="p-6 relative h-full flex flex-col">
                <button
                  onClick={() => setShowSidebar(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white"
                >
                  <X size={20} />
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-4 mb-6 mt-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center border-2 border-white/10 overflow-hidden">
                      <img src="/Rabet/vipo.png" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    {/* VIP Label at bottom of avatar - Improved styling */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#5c4ae3] to-[#3a2dbb] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#fecb48]/40 text-[#fecb48] whitespace-nowrap shadow-md z-10 italic">
                      VIP 0
                    </div>
                    {/* Status Dot */}
                    <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a0b3d]"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-black text-lg">Rabet897513</p>
                      <button className="text-white/40">
                        <img src="/Rabet/Msg button.png" alt="Edit" className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-white font-bold text-sm">ID:897513 <span className="text-white/40 ml-1">🖊️</span></p>
                  </div>
                </div>

                {/* VIP Progress */}
                <div className="mb-6">
                  <p className="text-white text-sm font-bold mb-2">Just ₹200 to VIP1!</p>
                  <div className="w-full bg-[#0a0518] rounded-full h-2 mb-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-gray-400 text-xs font-bold">Bet <span className="text-white">₹0</span> / <span className="text-purple-400">₹10</span></p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-x-2 gap-y-4 mb-8">
                  {[
                    { icon: '/Rabet/wallet.png', label: 'Deposit' },
                    { icon: '/Rabet/walletagain.png', label: 'Withdraw' },
                    { icon: '/Rabet/agent.png', label: 'Invite' },
                    { icon: '/Rabet/ClipboardCheck.png', label: 'Check-In' },
                    { icon: '/Rabet/vipo.png', label: 'VIP' },
                    { icon: '/Rabet/Note.png', label: 'Beta' },
                    { icon: '/Rabet/Dotted circle.png', label: 'Bind Phone', badge: '₹10' },
                    { icon: '/Rabet/gift.png', label: 'Events' },
                  ].map((action, i) => (
                    <button key={i} className="flex flex-col items-center gap-1.5 relative">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all border border-white/5">
                        {action.icon.endsWith('.png') ? (
                          <img src={action.icon} alt={action.label} className="w-6 h-6 object-contain" />
                        ) : (
                          <span className="text-xl">{action.icon}</span>
                        )}
                      </div>
                      {action.badge && (
                        <div className="absolute -top-3 right-0 bg-gradient-to-r from-orange-400 to-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-lg shadow-lg flex items-center gap-0.5 z-20">
                          <span className="text-[8px]">🎁</span> {action.badge}
                        </div>
                      )}
                      <span className="text-white/60 text-[10px] font-bold text-center leading-tight">{action.label}</span>
                    </button>
                  ))}
                </div>

                {/* Standard Links */}
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5">
                    <div className="flex items-center gap-3">
                      <Globe size={20} className="text-purple-400" />
                      <span className="text-white font-bold text-sm">language</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-white/60 font-bold text-xs">English</span>
                      <ChevronRight size={14} className="text-white/40" />
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5">
                    <LogOut size={20} className="text-purple-400" />
                    <span className="text-white font-bold text-sm">Log Out</span>
                  </button>
                </div>

                {/* Version & Logo */}
                <div className="mt-auto pt-10 pb-6 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <img src="/Rabet/rabet.png" alt="Rabet Logo" className="h-8 object-contain mb-1" />
                    <p className="text-purple-400/60 text-xs font-bold">v1.0.70</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Banner */}
        {showBanner && (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Download to get ₹30. Login in app to claim.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Download
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}



        {/* Header */}
        {/* Header - Consolidated with Balance and Profile */}
        <div className="p-3 md:p-4 flex items-center justify-between gap-2 bg-[#1a0b3d] shadow-lg sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSidebar(true)}
              className="w-12 h-12 bg-[#2d1b4d] rounded-2xl flex items-center justify-center flex-shrink-0 active:scale-95 transition-all border border-white/10 hover:bg-white/20 shadow-lg"
            >
              <div className="w-8 h-8 bg-[#5e35b1] rounded-lg flex items-center justify-center">
                <img src="/Rabet/menubutton.png" alt="Menu" className="w-5 h-5 object-contain" />
              </div>
            </button>

            {/* User Profile - Always visible on mobile */}
            <div className="flex items-center gap-2 px-1">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center border border-white/20 overflow-hidden">
                  <img src="/Rabet/vipo.png" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1a0b3d]"></div>
                {/* VIP Label at bottom of avatar - Improved for Image */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#5c4ae3] to-[#3a2dbb] text-[9px] font-black px-2 py-0.5 rounded-full border border-[#fecb48]/40 text-[#fecb48] whitespace-nowrap shadow-md z-20 italic">
                  VIP 0
                </div>
              </div>
              <div className="ml-1">
                <p className="text-white font-black text-[11px] leading-none mb-0.5">Rabet897513</p>
                <p className="text-white/60 text-[9px] font-medium leading-none">ID: 897513</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mail Button */}
            {/* Mail/Msg Button - Updated to match Image */}
            <button
              onClick={() => setShowMailPanel(true)}
              className="w-12 h-12 bg-[#5e35b1] rounded-2xl flex items-center justify-center shadow-lg relative flex-shrink-0 active:scale-95 transition-all border border-white/20"
            >
              <img src="/Rabet/Msg button.png" alt="Messages" className="w-7 h-7 object-contain" />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#ff4d4d] rounded-full text-white text-[11px] flex items-center justify-center font-black border-2 border-[#1a0b3d] shadow-sm">
                3
              </span>
            </button>

            {/* Balance Section - Refined for Image */}
            <div className="flex items-center bg-[#0a0518] rounded-[1.2rem] overflow-hidden border border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] h-11">
              <div className="flex items-center gap-2 px-3">
                <div className="w-6 h-6 bg-[#ffc107] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(255,193,7,0.3)]">
                  <span className="text-black text-[12px] font-black italic">₹</span>
                </div>
                <span className="text-white font-black text-base tracking-tighter">57.90</span>
              </div>
              <button
                onClick={() => setActiveTab('recharge')}
                className="bg-[#42a5f5] hover:bg-[#64b5f6] h-full px-3 flex items-center justify-center transition-all active:scale-95 shadow-[inset_-2px_0_5px_rgba(255,255,255,0.2)]"
              >
                <Plus className="text-white" size={20} strokeWidth={4} />
              </button>
            </div>
          </div>
        </div>

        {/* Home Tab Panel */}
        {activeTab === 'home' && (
          <>
            {/* Video Promo Bar */}
            <div className="mx-4 my-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-3 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👍</span>
                  <span className="text-white font-bold">Rabet Video intro • MP4</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-white hover:text-gray-200">⛶</button>
                  <button className="text-white hover:text-gray-200">⛶</button>
                </div>
              </div>
            </div>

            {/* FLOATING JACKPOT PILLS - FIXED POSITIONING FOR MOBILE FRAME */}
            <div
              className={`absolute top-[140px] right-2 z-[998] flex flex-col gap-2 transition-all duration-1000 ${showJackpots ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
            >
              {[
                { amount: "3,283.8", user: "R****9", game: "AZTEC", image: "/Rabet/aztec.png", color: "from-[#4fc3ff] to-[#7352fc]" },
                { amount: "5,000", user: "R****8", game: "OLYMPUS 1000", image: "/Rabet/thegodsofolympus.png", color: "from-[#4fc3ff] to-[#7352fc]" },
                { amount: "3,800", user: "R****5", game: "Fortune Gems 3", image: "/Rabet/FortuneGems3.png", color: "from-[#4fc3ff] to-[#7352fc]" },
              ].map((jackpot, index) => (

                <div
                  key={index}
                  className={`relative flex items-center justify-between pl-14 pr-4 py-1.5 
                  bg-gradient-to-r ${jackpot.color}
                  rounded-xl shadow-lg w-[220px]
                  border border-white/30 backdrop-blur-md
                  transform transition-all duration-700
                  ${showJackpots ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Confetti/Sparkle effects */}
                  <div className="absolute top-1 right-2 w-3 h-3 text-pink-300 animate-pulse">✨</div>
                  <div className="absolute bottom-1 left-16 w-3 h-3 text-yellow-300 animate-bounce">🎈</div>

                  {/* Left icon - square image */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-purple-900 flex items-center justify-center shadow-2xl border-2 border-[#4fc3ff] overflow-hidden z-10 transition-transform hover:scale-105">
                    <img src={jackpot.image} alt={jackpot.game} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center flex-1 justify-center relative">
                    {/* JACKPOT Title */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 w-full text-center">
                      <span className="text-white font-black text-lg italic tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_-1.5px_-1.5px_0_#ff9500,_1.5px_-1.5px_0_#ff9500,_-1.5px_1.5px_0_#ff9500,_1.5px_1.5px_0_#ff9500] uppercase">
                        JACKPOT
                      </span>
                    </div>

                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-3.5 h-3.5 bg-gray-200/20 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white">👤</span>
                      </div>
                      <span className="text-white font-bold text-[10px] opacity-90">{jackpot.user}</span>
                    </div>

                    {/* Amount Pill */}
                    <div className="mt-1 bg-[#1a0b3d]/60 px-4 py-1 rounded-full border border-white/10 shadow-inner w-full text-center">
                      <span className="text-white font-black text-base tracking-tight italic">
                        ₹{jackpot.amount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Promo Slider - Implemented as carousel with auto-swipe */}
            <div className="px-4 py-3">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full min-h-[180px] md:min-h-[240px] relative rounded-3xl overflow-hidden">
                      <div className="absolute inset-0">
                        {slide.image && slide.image.endsWith('.png') ? (
                          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex flex-col items-center justify-center p-6 text-center`}>
                            <h3 className="text-white font-black text-2xl mb-1 uppercase tracking-tighter">{slide.title}</h3>
                            <p className="text-white/80 text-sm font-bold uppercase">{slide.subtitle}</p>
                            <p className="text-yellow-400 text-4xl font-black mt-2 drop-shadow-lg">{slide.percentage}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="px-4 py-3 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 min-w-max">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className="flex items-center gap-2 bg-gradient-to-br from-purple-800/50 to-indigo-800/50 rounded-xl px-4 py-2 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all shadow-lg whitespace-nowrap"
                  >
                    {tab.icon && tab.icon.endsWith('.png') ? (
                      <img src={tab.icon} alt={tab.label} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                    ) : (
                      <span className="text-xl">{tab.icon}</span>
                    )}
                    <span className="text-white text-sm font-semibold">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Game Sections */}
            <div className="py-2">
              <GameSection title="HOT" games={games.hot} icon="/Rabet/hot.png" />
              <GameSection title="SLOTS" games={games.slots} icon="/Rabet/777.png" />
              <GameSection title="Fishing" games={games.fishing} icon="/Rabet/fish.png" />
              <GameSection title="Video" games={games.video} icon="/Rabet/video.png" />

              {/* Sports Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3 px-3">
                  <div className="flex items-center gap-2 bg-[#1a0b3d] rounded-xl px-4 py-2 border border-white/5">
                    <img src="/Rabet/football logo.png" alt="Sports" className="w-6 h-6 object-contain" />
                    <h2 className="text-white font-black text-sm tracking-widest">SPORTS</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 mr-2">
                      <button className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                        <ChevronLeft size={18} className="text-white/40" />
                      </button>
                      <button className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                        <ChevronRight size={18} className="text-white/40" />
                      </button>
                    </div>
                    <button className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-[1px]"></div>
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-[1px]"></div>
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-[1px]"></div>
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-[1px]"></div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="px-3">
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {games.sports.map((item, i) => (
                      <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-square bg-[#1a0b3d] border border-white/5">
                        <img src={item.image.startsWith('/Rabet') ? item.image : '/Rabet/cricket.png'} alt={item.name} className="w-full h-full object-cover" />

                        <div className="absolute top-1 left-1 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-lg z-10">
                          Vip3
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Provider Logos */}
                  <div className="bg-[#1a0b3d]/40 rounded-3xl p-6 backdrop-blur-sm border border-white/5 mb-8">
                    <div className="grid grid-cols-4 gap-x-4 gap-y-6 items-center justify-items-center opacity-70">
                      {/* Row 1 */}
                      <img src="/Rabet/bb4b432e-309d-4662-9445-535af0f20d73.png" alt="Provider 1" className="h-3 object-contain" />
                      <img src="/Rabet/a054dece-1bfc-41c9-a20d-4ef9ad894dfc.png" alt="Provider 2" className="h-3 object-contain" />
                      <img src="/Rabet/60512d64-d820-4a56-97aa-9fc420b69173.png" alt="Provider 3" className="h-3 object-contain" />
                      <img src="/Rabet/6484ca34-725b-4d7e-a7e1-cb04d68c64b4.png" alt="Provider 4" className="h-3 object-contain" />

                      {/* Row 2 */}
                      <img src="/Rabet/JILI.png" alt="JILI" className="h-5 object-contain" />
                      <img src="/Rabet/PG.png" alt="PG" className="h-5 object-contain" />
                      <img src="/Rabet/530e8a6b-609e-4261-8935-080878c43cc2.png" alt="Provider 5" className="h-5 object-contain" />
                      <img src="/Rabet/ef76e812-bab1-4048-9fcf-20d732590c93.png" alt="Provider 6" className="h-5 object-contain" />

                      {/* Row 3 */}
                      <img src="/Rabet/a53bac69-7adf-4909-b408-71c66d4233e8.png" alt="Provider 7" className="h-3 object-contain" />
                      <img src="/Rabet/932a09b8-11c7-439b-85a1-5bed650c4d40.png" alt="Provider 8" className="h-3 object-contain" />
                      <img src="/Rabet/42121a5a-16a4-46b1-b4b4-a5589dc1d34a.png" alt="Provider 9" className="h-3 object-contain" />
                      <div className="flex items-center gap-1">
                        <img src="/Rabet/642abfd6-f2e4-4692-8883-8f590b8a457c.png" alt="Provider" className="h-4 object-contain" />
                        <span className="text-white font-black text-[10px]">CASINO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* VIP Tab */}
        {activeTab === 'vip' && (
          <div className="px-4 py-6 pb-32 bg-[#2d0b5a] min-h-screen">
            {/* VIP Status Card with Sunburst Background */}
            <div className="relative bg-[#f7e4b5] rounded-[2.5rem] p-6 mb-6 shadow-2xl overflow-hidden border-2 border-[#e6c17a]/50">
              {/* Sunburst Pattern */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: 'radial-gradient(circle at center, #ffd700 0%, transparent 70%)',
                  backgroundImage: 'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, #ffd700 15deg 30deg)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#633a11] font-black text-3xl italic tracking-tighter">VIP0</span>
                      <div className="flex flex-col">
                        <span className="text-[#8b5e34] text-[10px] font-bold leading-tight uppercase tracking-wider">Experience</span>
                        <span className="text-[#7a4823] text-[9px] font-black uppercase italic">To Level Up</span>
                      </div>
                    </div>
                  </div>

                  {/* Silver Circular Badge */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 p-1 shadow-lg ring-4 ring-white/30">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center border-2 border-gray-100/50 shadow-inner">
                      <span className="text-2xl font-black text-gray-700">0</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#7a4823] text-sm font-black mb-6">Just <span className="text-[#e21a84]">₹200</span> to VIP1!</p>

                {/* Progress Bars */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between items-center mb-1 px-1">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4d2d11]"></div>
                        <span className="text-[#633a11] text-[10px] font-black uppercase">XP</span>
                      </div>
                      <span className="text-[#633a11] text-[10px] font-black">VIP1</span>
                    </div>
                    <div className="w-full bg-[#4d2d11]/20 rounded-full h-3 border border-[#4d2d11]/10 overflow-hidden">
                      <div className="bg-[#4d2d11] h-full rounded-full transition-all duration-1000" style={{ width: '5%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1 px-1">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4d2d11]"></div>
                        <span className="text-[#633a11] text-[10px] font-black uppercase">Bet</span>
                      </div>
                      <span className="text-[#633a11] text-[10px] font-black">0/10</span>
                    </div>
                    <div className="w-full bg-[#4d2d11]/20 rounded-full h-3 border border-[#4d2d11]/10 overflow-hidden">
                      <div className="bg-[#4d2d11] h-full rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Level Selector */}
            <div className="mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-3 pb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVipLevel(i)}
                    className={`flex-shrink-0 w-24 h-32 rounded-[2rem] flex flex-col items-center justify-center transition-all border-2 relative overflow-hidden
                    ${selectedVipLevel === i
                        ? 'bg-gradient-to-b from-[#4a268a] to-[#251347] border-[#ffd700] shadow-[0_5px_20px_rgba(255,215,0,0.3)]'
                        : 'bg-[#1a0b2e]/60 border-white/5 opacity-80'}`}
                  >
                    <div className={`w-16 h-16 mb-2 relative z-10 ${selectedVipLevel === i ? 'scale-110 shadow-glow' : 'opacity-60'}`}>
                      <img src={`/Rabet/${i}.png`} alt={`VIP ${i}`} className="w-full h-full object-contain" />
                    </div>
                    <p className={`text-xs font-black relative z-10 ${selectedVipLevel === i ? 'text-[#ffd700]' : 'text-purple-400'}`}>
                      VIP {i}
                    </p>
                    {selectedVipLevel === i && (
                      <div className="absolute bottom-2 w-1 h-1 bg-[#ffd700] rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Withdrawable Amount Card with Pattern */}
            <div className="relative bg-[#3d1a7d] rounded-[2rem] p-6 mb-6 overflow-hidden border border-white/10 shadow-xl">
              {/* Circular pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}></div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                    <div className="w-8 h-8 text-yellow-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.5 8C12.3284 8 13 7.32843 13 6.5C13 5.67157 12.3284 5 11.5 5C10.6716 5 10 5.67157 10 6.5C10 7.32843 10.6716 8 11.5 8Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" />
                        <path d="M10 10H13V17H10V10Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">Withdrawable Amount</p>
                    <p className="text-white text-3xl font-black">₹50</p>
                  </div>
                </div>
                <div className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-[10px] font-black border border-yellow-500/20 uppercase">
                  VIP1 Required
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('recharge')}
              className="w-full bg-gradient-to-r from-[#ff9a44] to-[#ff4b2b] text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-orange-600/20 mb-6 active:scale-95 transition-all"
            >
              Deposit ₹200
            </button>

            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Safe & Fast Transactions</span>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Withdraw Tab */}
        {activeTab === 'withdraw' && (
          <div className="min-h-screen bg-[#2d0b5a] flex flex-col">
            {/* Header Section */}
            <div className="p-4 flex items-center justify-between">
              <div className="bg-[#1a0b3d] rounded-full px-4 py-2 flex items-center gap-2 border border-white/10 shadow-lg">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-[10px] text-white">₹</span>
                </div>
                <span className="text-white font-black text-sm">50</span>
              </div>
              <button className="w-10 h-10 bg-[#1a0b3d] rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                <ClipboardCheck className="text-white" size={20} />
              </button>
            </div>

            {/* Tab Switcher */}
            <div className="px-4 mb-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowDepositTab(true)}
                className={`py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg ${showDepositTab
                  ? 'bg-gradient-to-r from-[#9b51e0] to-[#8b5cf6] text-white shadow-purple-500/20'
                  : 'bg-[#1a0b3d] text-gray-400 border border-white/5'
                  }`}
              >
                <div className="bg-white/20 p-1 rounded-lg">
                  <Wallet size={18} />
                </div>
                Deposit
              </button>
              <button
                onClick={() => setShowDepositTab(false)}
                className={`py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg ${!showDepositTab
                  ? 'bg-gradient-to-r from-[#9b51e0] to-[#8b5cf6] text-white shadow-purple-500/20'
                  : 'bg-[#1a0b3d] text-gray-400 border border-white/5'
                  }`}
              >
                <div className="bg-white/20 p-1 rounded-lg">
                  <Wallet size={18} />
                </div>
                Withdrawal
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-[#f5f6fa] rounded-t-[2.5rem] p-4 pb-36 overflow-y-auto">
              {showDepositTab ? (
                /* DEPOSIT SECTION */
                <div className="space-y-4">
                  {/* Payment Method Selector */}
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-purple-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Wallet className="text-purple-600" size={20} />
                      </div>
                      <span className="text-purple-900 font-bold">Payment Method</span>
                    </div>
                    <span className="text-purple-900 font-black">UPI</span>
                  </div>

                  {/* Deposit Amount Section */}
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-purple-900 font-black text-sm pl-1">
                      <div className="w-1.5 h-4 bg-purple-600 rounded-full"></div>
                      Deposit Amount
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { amt: 100, extra: 80, badge: 'Once Only' },
                        { amt: 200, extra: 80, gift: true },
                        { amt: 300, extra: 150, gift: true },
                        { amt: 500, extra: 300, gift: true },
                        { amt: 1000, extra: 700, gift: true },
                        { amt: 2000, extra: 1600, gift: true },
                        { amt: 3000, extra: 2400, gift: true },
                        { amt: 5000, extra: 4500, gift: true },
                        { amt: 10000, extra: 10000, gift: true },
                      ].map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDepositAmount(item.amt)}
                          className={`relative rounded-xl p-3 flex flex-col items-center justify-center transition-all border-2 h-20 shadow-sm ${selectedDepositAmount === item.amt
                            ? 'bg-gradient-to-br from-[#fff6e5] to-[#fecb48] border-[#ff9500]'
                            : 'bg-white border-purple-100'
                            }`}
                        >
                          {item.badge && (
                            <div className="absolute -top-1.5 -left-1.5 bg-orange-600 text-[8px] text-white px-2 py-0.5 rounded-md font-black shadow-sm z-10 italic">
                              {item.badge}
                            </div>
                          )}
                          {item.gift && (
                            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 z-10">
                              <img src="/Rabet/gift.png" alt="Gift" className="w-full h-full object-contain" />
                            </div>
                          )}
                          <span className={`text-base font-black ${selectedDepositAmount === item.amt ? 'text-[#a35e00]' : 'text-[#8b5cf6]'}`}>₹{item.amt.toLocaleString()}</span>
                          <div className="flex flex-col items-center mt-0.5">
                            <span className={`text-[9px] font-bold ${selectedDepositAmount === item.amt ? 'text-[#ff9500]' : 'text-[#ff5100]'}`}>Extra {item.extra.toLocaleString()}</span>
                          </div>
                          {selectedDepositAmount === item.amt && (
                            <div className="absolute top-0 right-0 w-5 h-5 bg-[#fb2c8d] flex items-center justify-center rounded-bl-lg">
                              <span className="text-white text-[10px] font-black italic">✓</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Join Event Section */}
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-purple-900 font-black text-sm pl-1">
                      <div className="w-1.5 h-4 bg-purple-600 rounded-full"></div>
                      Join Event
                    </h4>
                    <div className="relative bg-gradient-to-r from-[#fff3db] to-[#ffe5ae] rounded-2xl p-4 flex items-center gap-4 border border-[#ff9500]/30 shadow-sm">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-inner">
                        <span className="text-3xl">🎁</span>
                      </div>
                      <div>
                        <p className="text-orange-900 font-black text-sm">First</p>
                        <p className="text-orange-900 font-black text-sm">Deposit</p>
                      </div>
                      <div className="absolute top-0 right-1 w-6 h-6 bg-orange-500 flex items-center justify-center rounded-bl-xl rounded-tr-xl">
                        <span className="text-white text-[12px]">✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Channel Section */}
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-purple-900 font-black text-sm pl-1">
                      <div className="w-1.5 h-4 bg-purple-600 rounded-full"></div>
                      Payment Channel
                    </h4>
                    <div className="bg-white rounded-2xl p-4 flex items-center justify-between border-2 border-purple-100 shadow-sm relative overflow-hidden group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center border border-purple-100">
                          <span className="text-2xl text-purple-700">🏛️</span>
                        </div>
                        <div>
                          <p className="text-purple-900 font-black">Pay4</p>
                          <p className="text-purple-300 text-xs font-bold italic flex items-center gap-1">
                            <Clock size={12} /> 1-1 Minute
                          </p>
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center shadow-sm">
                        <span className="text-white text-[12px]">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* WITHDRAWAL SECTION */
                <div className="space-y-6">
                  {/* Link Bank Card Area */}
                  <div className="relative bg-[#ebe8fe] rounded-[2.5rem] p-8 text-center shadow-sm border border-purple-100 overflow-hidden mb-6">
                    <div className="absolute top-0 left-0 w-full h-24 bg-[#dad3ff] -translate-y-4"></div>
                    <div className="relative z-10 space-y-4">
                      <button className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto shadow-xl ring-8 ring-white/30 active:scale-95 transition-all">
                        <Plus className="text-white" size={32} strokeWidth={3} />
                      </button>
                      <p className="text-[#3d2563] font-black text-sm">Link Bank Card</p>
                    </div>
                  </div>

                  {/* Withdrawable Amount Display */}
                  <div className="text-center mb-8">
                    <p className="text-[#3d2563] font-black text-sm mb-1 italic">Withdrawable Amount</p>
                    <p className="text-[#ff9500] text-5xl font-black italic drop-shadow-sm tracking-tighter">₹57.9</p>
                  </div>

                  {/* Withdrawal Info List */}
                  <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-purple-100">
                    <div className="space-y-3">
                      <h4 className="flex items-center gap-2 text-[#3d2563] font-black text-xs pl-1 border-l-4 border-[#8b5cf6] leading-none h-3 italic">
                        Withdrawal Info
                      </h4>
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between items-center">
                          <p className="text-gray-500 font-bold text-[10px]">• Max Withdrawable Amount</p>
                          <p className="text-[#8b5cf6] font-black text-sm">₹20,000</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-500 font-bold text-[10px]">• Remaining Withdrawable Limit</p>
                          <p className="text-[#ff5100] font-black text-sm">₹0</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-500 font-bold text-[10px]">• Selected Amount</p>
                          <p className="text-[#ff5100] font-black text-sm">₹1,000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card Banner */}
                  <div className="bg-[#fefce8] border border-[#fef08a] rounded-xl p-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#fbbf24] p-1.5 rounded-lg">
                        <Wallet className="text-white" size={16} />
                      </div>
                      <p className="text-[#854d0e] font-black text-xs italic">Withdraw Experience Card</p>
                    </div>
                    <div className="w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-white text-[10px] font-black">✓</span>
                    </div>
                  </div>

                  {/* Amount Selection Grid */}
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-[#3d2563] font-black text-xs pl-1 border-l-4 border-[#8b5cf6] leading-none h-3 italic">
                      Withdrawable Amount
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[1000, 2000, 3000, 5000, 10000, 20000].map((amt, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedWithdrawalAmount(amt)}
                          className={`relative rounded-xl py-4 flex items-center justify-center transition-all bg-white shadow-sm border border-purple-100 group active:scale-95 ${selectedWithdrawalAmount === amt ? 'bg-gradient-to-b from-[#fff6e5] to-[#fecb48] border-[#ff9500]' : ''}`}
                        >
                          {i < 3 && (
                            <div className="absolute -top-1.5 -left-1.5 bg-[#fb2c8d] text-[8px] text-white px-2 py-0.5 rounded-md font-black shadow-sm z-10 italic">
                              Card
                            </div>
                          )}
                          <span className={`text-base font-black ${selectedWithdrawalAmount === amt ? 'text-[#a35e00]' : 'text-[#3d2563]'}`}>₹{amt.toLocaleString()}</span>
                          {selectedWithdrawalAmount === amt && (
                            <div className="absolute top-0 right-0 w-5 h-5 bg-[#fb2c8d] flex items-center justify-center rounded-bl-lg">
                              <span className="text-white text-[10px] font-black italic">✓</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button Area */}
                  <div className="space-y-4 pt-4">
                    <button className="w-full bg-[#8b5cf6] text-white py-4 rounded-2xl font-black text-xl shadow-xl shadow-purple-200 active:scale-95 transition-all">
                      Withdrawal
                    </button>
                    <p className="text-center text-[#3d2563] font-bold text-sm italic">
                      Become <span className="text-[#8b5cf6] font-black">VIP</span> to Withdraw Instantly
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Bottom Summary Bar (For Deposit) */}
            {showDepositTab && (
              <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-[#f8f6ff] p-4 pb-10 flex items-center justify-between border-t border-purple-100 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] rounded-t-[2.5rem] z-20">
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#3d2563] font-black text-sm">Deposit Amount</span>
                    <span className="text-[#ff9500] font-black text-2xl">{selectedDepositAmount}</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-gray-500 text-[10px] font-bold">Received:</span>
                    <div className="bg-yellow-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center text-[7px] text-white">₹</div>
                      <span className="text-[#a35e00] font-black text-[10px]">{selectedDepositAmount}</span>
                    </div>
                    <span className="text-purple-400 font-black">+</span>
                    <div className="bg-pink-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <img src="/Rabet/gift.png" alt="Gift" className="w-3 h-3 object-contain" />
                      <span className="text-[#fb2c8d] font-black text-[10px]">{([
                        { amt: 100, extra: 80 },
                        { amt: 200, extra: 80 },
                        { amt: 300, extra: 150 },
                        { amt: 500, extra: 300 },
                        { amt: 1000, extra: 700 },
                        { amt: 2000, extra: 1600 },
                        { amt: 3000, extra: 2400 },
                        { amt: 5000, extra: 4500 },
                        { amt: 10000, extra: 10000 },
                      ].find(i => i.amt === selectedDepositAmount)?.extra || 0)}</span>
                    </div>
                    <span className="text-purple-400 font-black">=</span>
                    <span className="text-[#8b5cf6] font-black text-[11px]">{selectedDepositAmount + ([
                      { amt: 100, extra: 80 },
                      { amt: 200, extra: 80 },
                      { amt: 300, extra: 150 },
                      { amt: 500, extra: 300 },
                      { amt: 1000, extra: 700 },
                      { amt: 2000, extra: 1600 },
                      { amt: 3000, extra: 2400 },
                      { amt: 5000, extra: 4500 },
                      { amt: 10000, extra: 10000 },
                    ].find(i => i.amt === selectedDepositAmount)?.extra || 0)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowDepositTab(true)}
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-3.5 rounded-2xl font-black text-lg shadow-xl shadow-purple-200 active:scale-95 transition-all"
                >
                  Deposit
                </button>
              </div>
            )}
          </div>
        )}

        {/* Agent Tab - Redesigned based on Images 0-3 */}
        {activeTab === 'agent' && (
          <div className="min-h-screen bg-[#f8f5ff] pb-40 text-gray-800 flex flex-col">
            {/* Header Tabs - Updated to match Image 0 */}
            <div className="px-4 py-4 flex gap-3 bg-[#1a0b3d] shadow-lg sticky top-0 z-50">
              <button
                onClick={() => setShowAgentRules(false)}
                className={`flex-1 h-14 rounded-2xl font-black flex items-center justify-center gap-2 transition-all duration-300 ${!showAgentRules
                  ? 'bg-gradient-to-r from-[#b068ff] to-[#8b5cf6] text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)]'
                  : 'bg-[#25124d] text-[#8b8cf7] border border-white/5'
                  }`}
              >
                <div className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all ${!showAgentRules ? 'bg-white/20' : 'bg-[#1a0b3d]'}`}>
                  <Wallet size={21} className={!showAgentRules ? 'text-white' : 'text-[#8b8cf7]'} />
                </div>
                <span className="text-xl tracking-tighter uppercase italic">Commission</span>
              </button>
              <button
                onClick={() => setShowAgentRules(true)}
                className={`flex-1 h-14 rounded-2xl font-black flex items-center justify-center gap-2 transition-all duration-300 ${showAgentRules
                  ? 'bg-gradient-to-r from-[#b068ff] to-[#8b5cf6] text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)]'
                  : 'bg-[#25124d] text-[#8b8cf7] border border-white/5'
                  }`}
              >
                <div className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all ${showAgentRules ? 'bg-white/20' : 'bg-[#1a0b3d]'}`}>
                  <Info size={21} className={showAgentRules ? 'text-white' : 'text-[#8b8cf7]'} />
                </div>
                <span className="text-xl tracking-tighter uppercase italic">Rules</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {!showAgentRules ? (
                <div className="px-3 py-6 space-y-6">
                  {/* Withdrawable Commission Card */}
                  <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-purple-100/50">
                    <div className="flex items-center gap-2 mb-6 text-purple-900 font-black uppercase text-[15px] italic tracking-tight opacity-80">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                        <Wallet size={20} />
                      </div>
                      Withdrawable Commission
                    </div>
                    <div className="flex gap-4 items-center mb-6">
                      <div className="flex-[1.5] h-14 bg-[#392f8d] rounded-2xl flex items-center px-5 shadow-inner border border-white/5">
                        <span className="text-white font-black text-2xl tracking-tighter">₹0</span>
                      </div>
                      <button className="flex-1 h-14 bg-gradient-to-r from-[#ff9a3d] to-[#ffb144] hover:from-[#ff8c2d] hover:to-[#ffa234] text-white rounded-2xl font-black text-xl italic shadow-lg shadow-orange-500/20 active:scale-95 transition-all">
                        Withdraw
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-3 bg-orange-50/50 rounded-2xl border border-orange-100/50">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Star size={12} fill="#ff9a3d" className="text-orange-400" />
                      </div>
                      <span className="text-[#a8651d] font-bold text-[11px] uppercase tracking-wide">
                        Independent withdrawal system, open to all
                      </span>
                    </div>
                  </div>
                  {/* Earn by Inviting friends Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] rounded-[2rem] p-5 relative overflow-hidden shadow-lg group">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]"></div>
                      <div className="relative z-10 flex flex-col gap-4">
                        <div className="text-white text-2xl font-black italic tracking-tighter leading-none">
                          ₹5/person
                        </div>
                        <div className="text-white font-black uppercase text-[10px] tracking-widest opacity-90">
                          Invitation Reward
                        </div>
                        <div className="text-5xl self-end mt-2 drop-shadow-lg">👤</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] rounded-[2rem] p-5 relative overflow-hidden shadow-lg group">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]"></div>
                      <div className="relative z-10 flex flex-col gap-4">
                        <div className="text-white text-2xl font-black italic tracking-tighter leading-none">
                          +10%
                        </div>
                        <div className="text-white font-black uppercase text-[10px] tracking-widest opacity-90">
                          Commission Reward
                        </div>
                        <div className="text-5xl self-end mt-2 drop-shadow-lg">🪙</div>
                      </div>
                    </div>
                  </div>

                  {/* Invite Details Boxes */}
                  <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-purple-100/50">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                        <Users size={20} />
                      </div>
                      <h3 className="text-purple-900 font-black text-[15px] italic tracking-tight">Invite Details</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-baseline gap-1 mb-3 pl-1 font-black text-[12px]">
                          <span className="text-purple-900">Direct Invites:</span>
                          <span className="text-orange-500">0 Profile</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-[#e8faff] rounded-2xl p-4 text-center border border-[#b8e8f5]/50 shadow-sm transition-transform active:scale-95">
                            <p className="text-[#0089a7] text-[10px] font-black uppercase tracking-tighter opacity-80">Today's Sign-ups</p>
                            <p className="text-[#0089a7] text-2xl font-black mt-1">0</p>
                          </div>
                          <div className="bg-[#e8faff] rounded-2xl p-4 text-center border border-[#b8e8f5]/50 shadow-sm transition-transform active:scale-95">
                            <p className="text-[#0089a7] text-[10px] font-black uppercase tracking-tighter opacity-80">This Week's Sign-ups</p>
                            <p className="text-[#0089a7] text-2xl font-black mt-1">0</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1 mb-3 pl-1 font-black text-[12px]">
                          <span className="text-purple-900">Indirect Invites:</span>
                          <span className="text-orange-500">0 Profile</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-[#fff4e8] rounded-2xl p-4 text-center border border-[#f5dab8]/50 shadow-sm transition-transform active:scale-95">
                            <p className="text-[#c07000] text-[10px] font-black uppercase tracking-tighter opacity-80">Today's Sign-ups</p>
                            <p className="text-[#c07000] text-2xl font-black mt-1">0</p>
                          </div>
                          <div className="bg-[#fff4e8] rounded-2xl p-4 text-center border border-[#f5dab8]/50 shadow-sm transition-transform active:scale-95">
                            <p className="text-[#c07000] text-[10px] font-black uppercase tracking-tighter opacity-80">This Week's Sign-ups</p>
                            <p className="text-[#c07000] text-2xl font-black mt-1">0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Total Rewards */}
                  <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-purple-100/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center shadow-inner">
                        <span className="text-2xl drop-shadow-sm">🏆</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-purple-900 font-black text-[15px] italic tracking-tight">Total Rewards</h3>
                        <p className="text-purple-600 font-black text-lg -mt-1 tracking-tighter">₹0</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#f2f4ff] rounded-2xl p-4 flex flex-col gap-1 border border-purple-100/50 shadow-sm">
                        <div className="text-blue-500 text-xl">💸</div>
                        <p className="text-gray-400 text-[9px] font-black uppercase tracking-tight">Invitation Reward</p>
                        <p className="text-blue-600 font-black text-xl tracking-tighter leading-none">₹0</p>
                      </div>
                      <div className="bg-[#fff4f2] rounded-2xl p-4 flex flex-col gap-1 border border-orange-100/50 shadow-sm">
                        <div className="text-orange-500 text-xl">👛</div>
                        <p className="text-gray-400 text-[9px] font-black uppercase tracking-tight">Total Commission</p>
                        <p className="text-orange-600 font-black text-xl tracking-tighter leading-none">₹0</p>
                      </div>
                    </div>
                  </div>

                  {/* Invite Link */}
                  <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-purple-100/50">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                        <Link size={20} />
                      </div>
                      <h3 className="text-purple-900 font-black text-[15px] italic tracking-tight">Invite Link</h3>
                    </div>
                    <div className="relative group">
                      <div className="w-full bg-[#f8f5ff] rounded-2xl p-5 border-2 border-dashed border-purple-200 shadow-inner overflow-hidden">
                        <p className="text-purple-900 font-bold text-sm truncate pr-12 opacity-70">
                          https://www.akbet8.com?shareCode=4R3MF0
                        </p>
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-purple-600 shadow-md active:scale-90 transition-all border border-purple-50">
                          <ClipboardCheck size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Week Trial Card */}
                  <div className="bg-gradient-to-r from-purple-900 to-[#1a0b3d] rounded-[2.5rem] p-6 shadow-xl relative overflow-hidden border-2 border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center font-black text-white italic text-lg shadow-inner">D</div>
                      <h3 className="text-white font-black text-[15px] italic tracking-tight">This Week's Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                      <div className="bg-white/5 rounded-2xl p-4 flex flex-col items-center gap-2 border border-white/10 shadow-inner">
                        <Trophy size={16} className="text-yellow-400" />
                        <p className="text-white/40 text-[9px] font-black uppercase tracking-tight">Team Deposit</p>
                        <p className="text-white text-xl font-black">0/300</p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 flex flex-col items-center gap-2 border border-white/10 shadow-inner">
                        <Users size={16} className="text-cyan-400" />
                        <p className="text-white/40 text-[9px] font-black uppercase tracking-tight">Invitees</p>
                        <p className="text-white text-xl font-black">0/1</p>
                      </div>
                    </div>
                    <div className="space-y-2 relative z-10 pl-1">
                      <p className="text-orange-400 font-black text-[12px] italic flex items-center gap-2">
                        Enjoy a 10% commission rate this week
                      </p>
                      <p className="text-white/40 font-bold text-[10px] leading-relaxed">
                        If conditions are met before the trial ends, enjoy a 15% commission rate
                      </p>
                    </div>
                  </div>

                  {/* Commission Rules Table */}
                  <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-purple-100/50">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                        <ClipboardCheck size={20} />
                      </div>
                      <h3 className="text-purple-900 font-black text-[15px] italic tracking-tight">Commission Rules</h3>
                    </div>
                    <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-sm">
                      <table className="w-full text-[11px] text-center border-collapse">
                        <thead className="bg-[#f2f4ff] text-purple-900 font-black">
                          <tr>
                            <th className="py-4 px-1 border-r border-white font-black uppercase italic tracking-tighter">Agent Com</th>
                            <th className="py-4 px-1 border-r border-white font-black uppercase italic tracking-tighter">Invites</th>
                            <th className="py-4 px-1 font-black uppercase italic tracking-tighter">Deposits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { rate: '10%', invites: '0', deposits: '0' },
                            { rate: '15%', invites: '1 - 4', deposits: '300' },
                            { rate: '20%', invites: '5 - 10', deposits: '1,500' },
                            { rate: '25%', invites: '11 - 20', deposits: '3,300' },
                            { rate: '30%', invites: '21 - 40', deposits: '6,300' },
                            { rate: '35%', invites: '41 - 70', deposits: '12,300' },
                            { rate: '40%', invites: '71 - 100', deposits: '21,000' },
                            { rate: '45%', invites: '101 - 200', deposits: '30,300' },
                            { rate: '50%', invites: '201 - 500', deposits: '60,300' },
                            { rate: '55%', invites: '501 - 1000', deposits: '150,300' },
                            { rate: '60%', invites: '1001+', deposits: '300,000' },
                          ].map((row, i) => (
                            <tr key={i} className={`font-bold transition-colors hover:bg-purple-50/30 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fcfcff]'}`}>
                              <td className="py-3 px-1 text-purple-600 font-black border-r border-purple-50">{row.rate}</td>
                              <td className="py-3 px-1 text-purple-800 border-r border-purple-50">{row.invites}</td>
                              <td className="py-3 px-1 text-purple-800">{row.deposits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4-Step How to Earn */}
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-purple-100/50">
                    <h3 className="text-purple-900 font-black text-xl italic tracking-tight text-center mb-8">How to earn commission?</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { icon: '🔗', label: 'Copy Link' },
                        { icon: '📤', label: 'Share Link' },
                        { icon: '👥', label: 'Invite Reg' },
                        { icon: '💰', label: 'Wait Com' },
                      ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-3">
                          <div className="w-14 h-14 bg-[#f8f5ff] rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-purple-50">
                            {step.icon}
                          </div>
                          <span className="text-[9px] font-black text-purple-900 uppercase tracking-tighter leading-tight">{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Extra Space */}
                  <div className="h-6"></div>
                </div>
              ) : (
                /* RULES TAB CONTENT - Based on Image 2 & 3 */
                <div className="px-3 py-6 space-y-6">
                  {/* Agent Rules Flowchart Container */}
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-purple-100/50">
                    <div className="flex items-center justify-center gap-2 mb-10">
                      <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                        <Users size={18} />
                      </div>
                      <h3 className="text-purple-900 font-black text-xl italic tracking-tight uppercase">Flowchart</h3>
                    </div>

                    <div className="relative flex flex-col items-center py-8">
                      {/* Top Level (A) */}
                      <div className="relative z-10 flex flex-col items-center mb-20">
                        <div className="w-20 h-20 rounded-full border-4 border-orange-200 bg-white p-1 shadow-lg transform transition-transform">
                          <div className="w-full h-full rounded-full bg-orange-100 flex items-center justify-center">
                            <span className="text-3xl font-black text-orange-400">A</span>
                          </div>
                        </div>
                        <div className="mt-4 bg-orange-400 text-white rounded-full px-5 py-1.5 shadow-md flex flex-col items-center">
                          <span className="text-[10px] font-black uppercase tracking-widest italic">Invite Friends</span>
                        </div>
                      </div>

                      {/* Level Lines - Fixed SVG positions */}
                      <svg className="absolute top-28 w-full h-40 pointer-events-none" viewBox="0 0 400 160">
                        <path d="M200,0 L200,40 M200,40 L60,40 L60,100 M200,40 L340,40 L340,100 M60,100 L60,140 M340,100 L340,140" fill="none" stroke="#e9d5ff" strokeWidth="3" strokeDasharray="6,4" />
                      </svg>

                      {/* Level 1 (B and C) */}
                      <div className="flex justify-between w-full px-4 relative z-10">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 rounded-full border-4 border-blue-200 bg-white p-1 shadow-md">
                            <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xl font-black text-blue-400">B</span>
                            </div>
                          </div>
                          <div className="bg-blue-100 text-blue-800 rounded-xl px-3 py-1 font-black text-[10px] shadow-sm uppercase italic">Up to 50% Com</div>
                          {/* Recursive small avatars */}
                          <div className="flex gap-2 mt-4">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-200 bg-emerald-50 flex items-center justify-center font-black text-emerald-400 text-sm shadow-sm">D</div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 rounded-full border-4 border-blue-200 bg-white p-1 shadow-md">
                            <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xl font-black text-blue-400">C</span>
                            </div>
                          </div>
                          <div className="bg-blue-100 text-blue-800 rounded-xl px-3 py-1 font-black text-[10px] shadow-sm uppercase italic">10% Commission</div>
                          <div className="w-10 h-10 rounded-full border-2 border-emerald-200 bg-emerald-50 flex items-center justify-center font-black text-emerald-400 text-sm shadow-sm mt-4">E</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Agent Benefits Section */}
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-purple-100/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center shadow-inner">
                        <span className="text-2xl drop-shadow-sm">🎁</span>
                      </div>
                      <h3 className="text-purple-900 font-black text-xl italic tracking-tight uppercase">Agent Benefits</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="flex gap-4 p-5 bg-[#f8f5ff] rounded-3xl border border-purple-50 transition-all hover:bg-purple-100/30">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">🚀</div>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-black text-purple-900 text-sm uppercase italic">1. Invite & Earn</h4>
                          <p className="text-gray-400 text-[11px] font-bold leading-relaxed">The agent invites friends to register, and receives commission immediately when they play.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-5 bg-[#f8f5ff] rounded-3xl border border-purple-50 transition-all hover:bg-purple-100/30">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">💸</div>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-black text-purple-900 text-sm uppercase italic">2. Tiered System</h4>
                          <p className="text-gray-400 text-[11px] font-bold leading-relaxed">The commission rate increases based on the number of invites and total deposits made by your downline.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* VIP Rewards Table in Rules Tab */}
                  <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-purple-100/50">
                    <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-sm">
                      <table className="w-full text-[11px] text-center border-collapse">
                        <thead className="bg-[#f0f2ff] text-purple-900 font-black">
                          <tr>
                            <th className="py-4 px-1 border-r border-white font-black uppercase italic tracking-tighter">Level</th>
                            <th className="py-4 px-1 border-r border-white font-black uppercase italic tracking-tighter">New Users</th>
                            <th className="py-4 px-1 font-black uppercase italic tracking-tighter">Daily Com</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { rate: 'VIP 1', invites: '3', deposits: '₹100' },
                            { rate: 'VIP 2', invites: '5', deposits: '₹200' },
                            { rate: 'VIP 3', invites: '10', deposits: '₹500' },
                            { rate: 'VIP 4', invites: '20', deposits: '₹1,000' },
                            { rate: 'VIP 5', invites: '50', deposits: '₹2,500' },
                          ].map((row, i) => (
                            <tr key={i} className={`font-bold transition-colors hover:bg-purple-50/30 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fcfcff]'}`}>
                              <td className="py-3 px-1 text-purple-600 font-black border-r border-purple-50">{row.rate}</td>
                              <td className="py-3 px-1 text-purple-800 border-r border-purple-50">{row.invites}</td>
                              <td className="py-3 px-1 text-purple-800">{row.deposits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Important Notes Box */}
                  <div className="bg-[#fff4f2] rounded-[2.5rem] p-8 border border-orange-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-md">
                        <Info size={18} strokeWidth={3} />
                      </div>
                      <h3 className="text-orange-950 font-black text-lg italic tracking-tighter uppercase">Important</h3>
                    </div>
                    <ul className="space-y-3 pl-1">
                      <li className="flex items-start gap-2 text-orange-900/70 text-[11px] font-bold leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        Commission is calculated daily at 00:00 and credited automatically.
                      </li>
                      <li className="flex items-start gap-2 text-orange-900/70 text-[11px] font-bold leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        One user per account. Multi-accounting will result in reward disqualification.
                      </li>
                      <li className="flex items-start gap-2 text-orange-900/70 text-[11px] font-bold leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        Terms and conditions apply to all promotion activities.
                      </li>
                    </ul>
                    <button className="w-full mt-8 h-14 bg-gradient-to-r from-[#ff9a44] to-[#ff4b2b] text-white rounded-2xl font-black text-xl italic uppercase tracking-tighter shadow-xl shadow-orange-500/20 active:scale-[0.98] transition-all">
                      Invite Friends
                    </button>
                  </div>

                  <div className="h-10"></div>
                </div>
              )}
            </div >

            {/* Sticky Bottom Actions */}
            < div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-white z-40 pb-10 rounded-t-[2.5rem] border-t border-purple-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]" >
              <div className="flex gap-4">
                <button className="flex-1 bg-[#8b5cf6] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20 active:scale-95 transition-all">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <ClipboardCheck size={18} />
                  </div>
                  <span className="text-xl italic">Copy</span>
                </button>
                <button className="flex-1 bg-gradient-to-r from-[#ff9a3d] to-[#ffb144] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20 active:scale-95 transition-all">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Share2 size={18} />
                  </div>
                  <span className="text-xl italic">Share</span>
                </button>
              </div>
            </div >
          </div >
        )}

        {/* Events Tab Panel */}
        {
          activeTab === 'events' && (
            <div className="px-4 py-6 pb-40 bg-[#2d0b5a] min-h-screen">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <Gift size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-white italic tracking-tight">Promotions</h1>
                  <p className="text-purple-300 text-[10px] font-bold uppercase tracking-widest">Exciting Events & Rewards</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Daily Rebate',
                    desc: 'Get unlimited cashback on every bet!',
                    bg: '/Rabet/firstdepositoffer.png',
                    action: 'Join'
                  },
                  {
                    title: 'Daily Check-in',
                    desc: 'Check in daily to win up to ₹500!',
                    bg: '/Rabet/vip3for500.png',
                    action: 'Claim'
                  },
                  {
                    title: 'First Top-up',
                    desc: 'Double your first deposit instantly!',
                    bg: '/Rabet/FirstTopup.png',
                    action: 'Deposit'
                  },
                  {
                    title: 'Invite Friends',
                    desc: 'Earn ₹50 for every friend joined!',
                    bg: '/Rabet/invitationchallenge2000.png',
                    action: 'Invite'
                  }
                ].map((event, i) => (
                  <div key={i} className="flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-2 border-white/10 group active:scale-[0.98] transition-all">
                    {/* Banner Image Section */}
                    <div className="h-44 w-full overflow-hidden relative">
                      <img
                        src={event.bg}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Info Row Bottom */}
                    <div className="bg-white p-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-[#3d2563] font-black text-lg italic leading-tight">{event.title}</h3>
                        <p className="text-gray-400 text-[10px] font-bold mt-0.5">{event.desc}</p>
                      </div>
                      <button className="bg-gradient-to-r from-[#ff9a44] to-[#ff4b2b] text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg shadow-orange-500/20 active:scale-95 transition-all">
                        {event.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        {
          showMailPanel && (
            <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center overflow-hidden">
              <div className="bg-[#1a0b2e] w-full max-w-[480px] h-full shadow-2xl overflow-hidden flex flex-col relative border border-white/10">
                {/* Header Area */}
                <div className="p-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    {/* Balance Indicator at top left */}
                    <div className="bg-[#1a0b3d] px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10 shadow-lg">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold border border-white/20">₹</div>
                      <span className="text-white font-black text-sm">57.9</span>
                    </div>

                    {/* Close Button - Circular purple style */}
                    <button
                      onClick={() => setShowMailPanel(false)}
                      className="w-10 h-10 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all border-2 border-white/20 shadow-lg active:scale-90"
                    >
                      <X size={24} strokeWidth={3} />
                    </button>
                  </div>

                  <div className="flex items-center px-1">
                    <h2 className="text-white font-black text-2xl tracking-tighter italic">Mail</h2>
                  </div>
                </div>

                {/* Content Area - Rounded container */}
                <div className="flex-1 mx-3 mb-3 bg-[#ebe8fe] rounded-[3rem] flex flex-col items-center justify-center p-6 shadow-inner overflow-hidden border border-white/20">
                  <div className="flex flex-col items-center -translate-y-12">
                    {/* Empty State Illustration */}
                    <div className="relative mb-6 w-56 h-56 flex items-center justify-center">
                      {/* Glowing background */}
                      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-blue-200/40 rounded-full blur-3xl scale-150"></div>

                      {/* Envelope Illustration matching Image 2 */}
                      <div className="relative z-10">
                        <div className="w-40 h-32 bg-[#b8bcfb] rounded-xl flex flex-col justify-end p-2 relative shadow-2xl skew-y-2 transform -rotate-2">
                          <div className="absolute top-0 right-0 left-0 h-16 bg-[#c4c8ff] rounded-t-xl rounded-b-[4rem] border-b-2 border-white/20"></div>
                          <div className="w-full h-1/2 bg-white/40 rounded-lg flex flex-col gap-1 p-2">
                            <div className="w-3/4 h-1 bg-white/60 rounded-full"></div>
                            <div className="w-1/2 h-1 bg-white/60 rounded-full"></div>
                          </div>
                          {/* Animated Sparkles */}
                          <div className="absolute -top-4 -right-4 text-2xl animate-pulse">✨</div>
                          <div className="absolute -bottom-2 -left-6 text-purple-300 text-xl animate-bounce">✦</div>
                          <div className="absolute top-2 -left-10 text-blue-300 text-2xl">✧</div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-[#8b8cf7] font-black text-xl mb-1 tracking-tight italic">No Messages</h3>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {/* Floating Action Buttons - Constrained to Frame */}
        <div className="fixed right-1/2 translate-x-[220px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 max-md:hidden">
          <button className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <Gift className="text-white" size={28} />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Once Only
            </span>
          </button>
          <button className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <Gift className="text-white" size={28} />
          </button>
          <button className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <span className="text-3xl">😊</span>
          </button>
        </div>

        {
          activeTab === 'agent' && !hasSeenAgentReward && (
            <div
              className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
              onClick={() => setHasSeenAgentReward(true)}
            >
              <div
                className="relative w-full max-w-[360px] flex flex-col items-center animate-in fade-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setHasSeenAgentReward(true)}
                  className="absolute -top-12 right-0 z-10 w-10 h-10 flex items-center justify-center text-white/90 hover:text-white transition-all bg-white/10 hover:bg-white/20 rounded-full border border-white/20"
                >
                  <X size={28} strokeWidth={3} />
                </button>

                {/* Header Section */}
                <div className="w-full bg-[#6d28d9] rounded-t-[2.5rem] pt-10 pb-10 flex flex-col items-center relative overflow-visible border-x-[6px] border-t-[6px] border-[#c084fc]/20 shadow-[0_-20px_50px_rgba(109,40,217,0.3)]">
                  {/* Sunburst/Glossy effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                  <div className="absolute -left-3 top-12 text-pink-400 text-2xl animate-pulse">✦</div>
                  <div className="absolute -right-2 top-24 text-white text-xl animate-bounce">✧</div>

                  <h2 className="text-[26px] font-black text-white tracking-tight mb-2 leading-none relative z-10">
                    New Agent Reward
                  </h2>

                  <div className="bg-[#fb2c8d] px-5 py-1.5 rounded-full shadow-[0_5px_15px_rgba(251,44,141,0.4)] border border-white/20 relative z-10">
                    <span className="text-white font-black text-[12px] italic uppercase tracking-wider">
                      Super agent activated!
                    </span>
                  </div>

                  {/* Bag Asset */}
                  <div className="absolute -right-6 -top-12 w-44 h-44 z-20 transition-transform hover:scale-110">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <span className="text-9xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)] pointer-events-none">💰</span>
                      <div className="absolute top-2 right-4 text-3xl animate-bounce">🪙</div>
                      <div className="absolute -top-4 left-6 text-2xl">🎉</div>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full bg-white rounded-[2.5rem] -mt-6 relative z-10 p-5 flex flex-col gap-4 shadow-2xl border-x-[6px] border-b-[6px] border-[#c084fc]/20">
                  {/* Connector Rings */}
                  <div className="absolute -top-[22px] left-12 w-3 h-7 bg-gradient-to-b from-purple-100 to-purple-300 rounded-full border border-purple-400 shadow-sm z-20"></div>
                  <div className="absolute -top-[22px] right-12 w-3 h-7 bg-gradient-to-b from-purple-100 to-purple-300 rounded-full border border-purple-400 shadow-sm z-20"></div>

                  {/* Current Content */}
                  <div className="bg-[#e0fbef] rounded-[2rem] p-5 border border-[#14b8a6]/20">
                    <div className="inline-flex items-center gap-2 bg-[#14b8a6] text-white px-3 py-1 rounded-xl text-[12px] font-black mb-4">
                      <span className="text-sm">👑</span> Current
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#0d9488] font-black text-[13px]">
                          <div className="w-6 h-6 bg-[#14b8a6]/10 rounded-lg flex items-center justify-center">⚡</div>
                          Commission Rate
                        </div>
                        <span className="text-[#0d9488] font-black text-base">10%</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#14b8a6]/10 pt-3">
                        <div className="flex items-center gap-2 text-[#0d9488] font-black text-[13px]">
                          <div className="w-6 h-6 bg-[#14b8a6]/10 rounded-lg flex items-center justify-center">👤</div>
                          Invitation Reward
                        </div>
                        <span className="text-[#0d9488] font-black text-base">₹5/person</span>
                      </div>
                    </div>
                  </div>

                  {/* Upgrade Content (Orange Gradient) */}
                  <div className="bg-gradient-to-b from-[#ff9a44] to-[#ff4b2b] rounded-[2rem] p-5 relative overflow-hidden shadow-lg">
                    <div className="absolute top-4 right-4 text-white/20 font-black text-4xl italic -rotate-12 select-none">UPGRADE</div>
                    <div className="inline-flex items-center gap-2 text-white font-black text-[13px] mb-2 px-1 relative z-10">
                      <span className="text-sm">👑</span> After claim
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
                      <div className="text-5xl">💵</div>
                      <span className="text-white text-5xl font-black italic tracking-tighter drop-shadow-xl">₹50</span>
                    </div>
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 font-black text-[13px]">Commission Rate</span>
                        <span className="text-white font-black text-xl">50%</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/20 pt-2">
                        <span className="text-white/80 font-black text-[13px]">Invitation Reward</span>
                        <span className="text-white font-black text-xl">₹20/person</span>
                      </div>
                    </div>
                  </div>

                  {/* Glossy Green Receive Button */}
                  <button
                    onClick={() => setHasSeenAgentReward(true)}
                    className="w-full relative h-16 bg-[#10b981] hover:bg-[#059669] rounded-2xl flex items-center justify-center group overflow-hidden border-b-4 border-[#065f46] shadow-xl active:translate-y-1 active:border-b-0 transition-all mb-2"
                  >
                    {/* Glossy highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-full blur-[1px]"></div>

                    <span className="text-white font-black text-2xl italic tracking-tighter uppercase relative z-10 drop-shadow-md">
                      Receive
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )
        }

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-[#1a0b3d] border-t border-white/5 z-[1000] pb-safe">
          <div className="flex justify-around items-end p-2 pb-4">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'home' ? 'scale-105' : ''}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'home'
                  ? 'bg-gradient-to-br from-[#642aff] to-purple-800 shadow-[0_4px_15px_rgba(100,42,255,0.4)] border-2 border-white/20'
                  : 'bg-transparent'
                  }`}
              >
                <div className={`flex flex-col items-center ${activeTab === 'home' ? 'mb-1' : ''}`}>
                  <svg className={`w-7 h-7 ${activeTab === 'home' ? 'text-white' : 'text-white/40'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              </div>
              <span className={`text-[10px] font-black tracking-widest ${activeTab === 'home' ? 'text-white' : 'text-white/40'}`}>
                HOME
              </span>
            </button>

            <button
              onClick={() => setActiveTab('vip')}
              className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'vip' ? 'scale-105' : ''}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'vip'
                  ? 'bg-gradient-to-br from-[#642aff] to-purple-800 shadow-[0_4px_15px_rgba(100,42,255,0.4)] border-2 border-white/20'
                  : 'bg-transparent'
                  }`}
              >
                <div className={`flex flex-col items-center ${activeTab === 'vip' ? 'mb-1' : ''}`}>
                  <span className={`text-2xl transition-all ${activeTab === 'vip' ? 'scale-110' : 'opacity-40'}`}>👑</span>
                </div>
              </div>
              <span className={`text-[10px] font-black tracking-widest ${activeTab === 'vip' ? 'text-white' : 'text-white/40'}`}>
                VIP
              </span>
            </button>

            <button
              onClick={() => setActiveTab('withdraw')}
              className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'withdraw' ? 'scale-105' : ''}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'withdraw'
                  ? 'bg-gradient-to-br from-[#642aff] to-purple-800 shadow-[0_4px_15px_rgba(100,42,255,0.4)] border-2 border-white/20'
                  : 'bg-transparent'
                  }`}
              >
                <div className={`flex flex-col items-center ${activeTab === 'withdraw' ? 'mb-1' : ''}`}>
                  <Wallet size={24} className={`transition-all ${activeTab === 'withdraw' ? 'text-white' : 'text-white/40'}`} />
                </div>
              </div>
              <span className={`text-[10px] font-black tracking-widest ${activeTab === 'withdraw' ? 'text-white' : 'text-white/40'}`}>
                WITHDRAW
              </span>
            </button>

            <button
              onClick={() => setActiveTab('agent')}
              className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'agent' ? 'scale-105' : ''}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'agent'
                  ? 'bg-gradient-to-br from-[#642aff] to-purple-800 shadow-[0_4px_15px_rgba(100,42,255,0.4)] border-2 border-white/20'
                  : 'bg-transparent'
                  }`}
              >
                <div className={`flex flex-col items-center ${activeTab === 'agent' ? 'mb-1' : ''}`}>
                  <Users size={24} className={`transition-all ${activeTab === 'agent' ? 'text-white' : 'text-white/40'}`} />
                </div>
              </div>
              <span className={`text-[10px] font-black tracking-widest ${activeTab === 'agent' ? 'text-white' : 'text-white/40'}`}>
                AGENT
              </span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'events' ? 'scale-105' : ''}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'events'
                  ? 'bg-gradient-to-br from-[#642aff] to-purple-800 shadow-[0_4px_15px_rgba(100,42,255,0.4)] border-2 border-white/20'
                  : 'bg-transparent'
                  }`}
              >
                <div className={`flex flex-col items-center ${activeTab === 'events' ? 'mb-1' : ''}`}>
                  <Gift size={24} className={`transition-all ${activeTab === 'events' ? 'text-white' : 'text-white/40'}`} />
                </div>
              </div>
              <span className={`text-[10px] font-black tracking-widest ${activeTab === 'events' ? 'text-white' : 'text-white/40'}`}>
                EVENTS
              </span>
            </button>
          </div>
        </div>

        {/* Spacer for bottom nav */}
        <div className="h-20"></div>
      </div >
    </div >
  );
}

