import React, { useState, useEffect } from 'react';
import { X , Mail, Plus, Gift, Users,  ChevronRight, ChevronLeft, LogOut, Globe, ClipboardCheck, Wallet, Clock,  Trophy, Link, Share2, AlertTriangle } from 'lucide-react';

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
      { name: 'SUPER CHARGE', image: '/Rabet/buffalocharge.png', vip: true },
      { name: 'PATTI', image: '/Rabet/patti.png', vip: false },
      { name: 'FORTUNE Snake', image: '/Rabet/snake.png', vip: false },
      { name: 'CHICKEN CROSS', image: '/Rabet/chickenroads.png', vip: true },
      { name: 'CHICKEN ROAD', image: '/Rabet/chickenroads.png', vip: true },
      { name: 'BIG DOGUE', image: '/Rabet/squidgame.png', vip: false },
      { name: 'PLINKO', image: '/Rabet/plinko.png', vip: false },
      { name: 'JACKPOT JOKER', image: '/Rabet/jackpotjoker.png', vip: true },
      { name: 'FORTUNE GEMS', image: '/Rabet/fortunegems.png', vip: true },
    ],
    slots: [
      { name: 'MONEY COMES', image: '/Rabet/MoneyComing.png', vip: true },
      { name: 'JACKPOT JOKER', image: '/Rabet/jackpotjoker.png', vip: true },
      { name: 'OLYMPUS', image: '/Rabet/thegodsofolympus.png', vip: false },
      { name: 'COLOREX SLOTS', image: '/Rabet/Keno.png', vip: true },
      { name: 'GOLDEN SHOWDOWN', image: '/Rabet/captainbounty.png', vip: false },
      { name: 'KINGS BOUNTY', image: '/Rabet/captainbounty.png', vip: false },
    ],
    poker: [
      { name: 'PATTI', image: '/Rabet/patti.png', vip: false },
      { name: 'RUMMY', image: '/Rabet/Rummy.png', vip: false },
      { name: 'PENALTY KICK', image: '/Rabet/penaltykick.png', vip: false },
      { name: 'MINES', image: '/Rabet/WildBandito.png', vip: false },
      { name: 'KENO', image: '/Rabet/Keno.png', vip: true },
      { name: 'HOLDEM', image: '/Rabet/holdem.png', vip: false },
    ],
    pg: [
      { name: 'FORTUNE TIGER', image: '/Rabet/fortuneOX.png', vip: true },
      { name: 'FORTUNE OX', image: '/Rabet/SuperAce.png', vip: false },
      { name: 'FORTUNE RABBIT', image: '/Rabet/rabbit.png', vip: false },
      { name: 'FORTUNE MOUSE', image: '/Rabet/FortuneMouse.png', vip: false },
      { name: 'DRAGON HATCH', image: '/Rabet/DragonHatch.png', vip: false },
      { name: 'WILD BANDITO', image: '/Rabet/WildBandito.png', vip: false },
    ],
    massBet: [
      { name: 'BIG DOGUE', image: '/Rabet/squidgame.png', vip: false },
      { name: 'BSAT T WAR', image: '/Rabet/dragonfortune.png', vip: false },
      { name: 'PENALTY KICK', image: '/Rabet/penaltykick.png', vip: false },
      { name: 'ULTIMATE TEXAS', image: '/Rabet/Mahjongways2.png', vip: false },
      { name: 'JHANDI MUNDA', image: '/Rabet/JhandiMunda.png', vip: false },
      { name: '3 PATTI', image: '/Rabet/Happy3patti.png', vip: false },
    ],
    jili: [
      { name: 'MONEY COMES', image: '/Rabet/MoneyComing.png', vip: false },
      { name: 'FORTUNE GEMS', image: '/Rabet/fortunegems.png', vip: false },
      { name: 'FORTUNE GEMS 2', image: '/Rabet/FortuneGems3.png', vip: false },
      { name: 'SUPER ACE', image: '/Rabet/SuperAce.png', vip: false },
      { name: 'BIG BASS BONANZA', image: '/Rabet/bigbassfishing.png', vip: false },
      { name: 'WAYS', image: '/Rabet/Mahjongways2.png', vip: false },
    ],
    fishing: [
      { name: 'AIR STAR', image: '/Rabet/allstarfishing.png', vip: true },
      { name: 'HAPPY FISHING', image: '/Rabet/allstarfishing.png', vip: true },
      { name: 'BOMBING FISHING', image: '/Rabet/bombingfishing.png', vip: true },
      { name: 'BOOM LEGEND', image: '/Rabet/Boom Legend.png', vip: true },
      { name: 'DINOSAUR TYCOON', image: '/Rabet/snake.png', vip: true },
      { name: 'DRAGON FORTUNE', image: '/Rabet/dragonfortune.png', vip: true },
    ],
    video: [
      { name: 'GRAND CASINO HOLDEM', image: '/Rabet/richwheel.png', vip: true },
      { name: '6+POKER', image: '/Rabet/redblack.png', vip: true },
      { name: 'BAC BO', image: '/Rabet/BACKBO.png', vip: true },
      { name: 'BACCARAT CONTROL', image: '/Rabet/controlsqueeze.png', vip: true },
      { name: 'BACCARAT PERFECT PAIR', image: '/Rabet/controlsqueeze.png', vip: true },
      { name: 'BACCARAT SQUEEZE', image: '/Rabet/Mahjongways2.png', vip: true },
    ],
  };

  const categoryTabs = [
    { id: 'all', icon: '/Rabet/All.png', label: 'ALL' },
    { id: 'hot', icon: '/Rabet/hot.png', label: 'HOT' },
    { id: 'slots', icon: '/Rabet/777.png', label: 'SLOTS' },
    { id: 'poker', icon: '/Rabet/cards.png', label: 'POKER' },
    { id: 'pg', icon: '/Rabet/PG.png', label: 'PG' },
    { id: 'mass', icon: '⚽', label: 'Mass Bet' },
    { id: 'jili', icon: '/Rabet/JILI.png', label: 'JILI' },
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
    <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-all">
      <div className="aspect-[3/4] bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Image or Emoji */}
        {game.image && game.image.endsWith('.png') ? (
          <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
        ) : (
          <div className="relative z-10">
            <span className="text-7xl md:text-8xl drop-shadow-2xl filter brightness-110">{game.image}</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      {game.vip && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
          VIP1
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
        <p className="text-white font-bold text-sm text-center drop-shadow-lg">{game.name}</p>
      </div>
    </div>
  );

  const GameSection = ({ title, games, icon }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-3 md:px-4">
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl px-3 md:px-4 py-2">
          {icon && icon.endsWith('.png') ? (
            <img src={icon} alt={title} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
          ) : (
            <span className="text-xl md:text-2xl">{icon}</span>
          )}
          <h2 className="text-white font-bold text-base md:text-lg">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <button className="w-7 h-7 md:w-8 md:h-8 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-all">
              <ChevronLeft size={16} className="text-white md:w-[20px]" />
            </button>
            <button className="w-7 h-7 md:w-8 md:h-8 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-all">
              <ChevronRight size={16} className="text-white md:w-[20px]" />
            </button>
          </div>
          <button className="w-7 h-7 md:w-8 md:h-8 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-all">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-white/90 rounded-[2px]"></div>
              <div className="w-1.5 h-1.5 bg-white/90 rounded-[2px]"></div>
              <div className="w-1.5 h-1.5 bg-white/90 rounded-[2px]"></div>
              <div className="w-1.5 h-1.5 bg-white/30 rounded-[2px]"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 px-3 md:px-4">
        {games.slice(0, 6).map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#642aff] via-purple-950 to-[#a74e4e] text-white font-sans relative w-full">
      {/* Sidebar */}
      <div className={`fixed inset-0 z-[2000] transition-all duration-300 ${showSidebar ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setShowSidebar(false)}
        ></div>
        <div className={`absolute left-0 top-0 bottom-0 w-72 bg-gradient-to-b from-indigo-950 to-purple-950 shadow-2xl transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6">
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X size={20} />
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center border-2 border-white/20">
                  <span className="text-2xl">🐶</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-indigo-950"></div>
              </div>
              <div>
                <p className="text-white font-bold">Rabet897513</p>
                <p className="text-purple-300 text-sm">ID: 897513</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded">VIP 1</span>
                </div>
              </div>
            </div>

            {/* VIP Progress */}
            <div className="bg-purple-900/30 rounded-xl p-4 mb-6 border border-purple-500/30">
              <p className="text-white text-sm mb-2">Just ₹200 to VIP1!</p>
              <div className="w-full bg-purple-950 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <p className="text-purple-300 text-xs">Bet ₹0 / ₹10</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                { icon: '💳', label: 'Deposit' },
                { icon: '💰', label: 'Withdraw' },
                { icon: '👥', label: 'Invite' },
                { icon: '✓', label: 'Check-in' },
                { icon: '👑', label: 'VIP' },
                { icon: '📊', label: 'Bets' },
                { icon: '📱', label: 'Bind Phone', badge: 'NEW' },
                { icon: '🎁', label: 'Events' },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center gap-1 relative">
                  <div className="w-12 h-12 bg-purple-800/50 rounded-xl flex items-center justify-center hover:bg-purple-700 transition-all">
                    <span className="text-xl">{action.icon}</span>
                  </div>
                  {action.badge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded">{action.badge}</span>
                  )}
                  <span className="text-white text-xs">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Language & Logout */}
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-purple-900/30 rounded-xl hover:bg-purple-800/50 transition-all">
                <div className="flex items-center gap-2">
                  <Globe size={20} className="text-purple-300" />
                  <span className="text-white">language</span>
                </div>
                <span className="text-purple-300">English</span>
              </button>
              <button className="w-full flex items-center gap-2 p-3 bg-purple-900/30 rounded-xl hover:bg-purple-800/50 transition-all">
                <LogOut size={20} className="text-purple-300" />
                <span className="text-white">Log Out</span>
              </button>
            </div>

            {/* Version */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="text-blue-400 font-bold text-lg mb-1">Rabet</div>
              <div className="text-purple-400 text-xs">v1.0.68</div>
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
      <div className="p-3 md:p-4 flex items-center justify-between gap-2 bg-[#2d0b5a] shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSidebar(true)}
            className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 active:scale-95 transition-all overflow-hidden"
          >
            <img src="/Rabet/menubutton.png" alt="Menu" className="w-6 h-6 object-contain" />
          </button>

          {/* User Profile - Always visible on mobile */}
          <div className="flex items-center gap-2 bg-white/5 rounded-2xl px-2 py-1.5 backdrop-blur-sm border border-white/10">
            <div className="relative flex-shrink-0">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-lg">�</span>
              </div>
              <div className="absolute -bottom-1 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#2d0b5a]"></div>
              {/* VIP Label at bottom of avatar */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#4a268a] text-[8px] font-black px-1.5 py-0.5 rounded-full border border-yellow-500/50 text-white whitespace-nowrap">
                VIP 0
              </div>
            </div>
            <div className="ml-1 min-w-[70px]">
              <p className="text-white font-black text-[11px] leading-none mb-0.5">Rabet897513</p>
              <p className="text-white/60 text-[9px] font-medium leading-none">ID: 897513</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mail Button */}
          <button
            onClick={() => setShowMailPanel(true)}
            className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-lg relative flex-shrink-0 active:scale-95 transition-all"
          >
            <Mail className="text-white" size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
              3
            </span>
          </button>

          {/* Balance Section - Integrated */}
          <div className="flex items-center bg-[#1d0b3a] rounded-xl overflow-hidden border border-white/5 shadow-inner">
            <div className="flex items-center gap-1.5 px-3 py-1.5">
              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#3b1a00] text-[10px] font-black">₹</span>
              </div>
              <span className="text-white font-bold text-sm">57.90</span>
            </div>
            <button
              onClick={() => setActiveTab('withdraw')}
              className="bg-blue-500 hover:bg-blue-400 p-2 flex items-center justify-center transition-colors active:scale-95"
            >
              <Plus className="text-white" size={16} />
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

          {/* FLOATING JACKPOT PILLS - UPDATED TO MATCH SCREENSHOT */}
          <div
            className={`fixed top-[140px] md:top-[160px] right-2 md:right-4 z-[998] flex flex-col gap-2 transition-all duration-1000 ${showJackpots ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
          >
            {[
              { amount: "3,850", user: "R****3", game: "Fortune Gems 2", image: "/Rabet/fortunegems.png", color: "from-[#8a6dfd] to-[#7352fc]" },
              { amount: "2,998.2", user: "R****2", game: "Fortune Gems 2", image: "/Rabet/FortuneGems3.png", color: "from-[#8a6dfd] to-[#7352fc]" },
              { amount: "3,597", user: "R****8", game: "Crazy 777", image: "/Rabet/MoneyComing.png", color: "from-[#8a6dfd] to-[#7352fc]" },
            ].map((jackpot, index) => (

              <div
                key={index}
                className={`relative flex items-center justify-between pl-14 pr-4 py-2 
                  bg-gradient-to-r ${jackpot.color}
                  rounded-xl shadow-lg w-[260px] md:w-[280px]
                  border border-white/20 backdrop-blur-md
                  transform transition-all duration-700
                  ${showJackpots ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Confetti/Sparkle effects */}
                <div className="absolute top-0 right-4 w-4 h-4 text-yellow-300 animate-pulse">✨</div>
                <div className="absolute bottom-1 right-12 w-3 h-3 text-pink-300 animate-bounce">🎈</div>

                {/* Left icon - square image */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-[68px] h-[68px] rounded-xl bg-purple-900 flex items-center justify-center shadow-xl border-2 border-[#4fc3ff] overflow-hidden z-10 transition-transform hover:scale-105">
                  <img src={jackpot.image} alt={jackpot.game} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center flex-1 justify-center">
                  {/* JACKPOT Title */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="text-white font-black text-xl italic tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_-1px_-1px_0_#ff9500,_1px_-1px_0_#ff9500,_-1px_1px_0_#ff9500,_1px_1px_0_#ff9500] uppercase">
                      JACKPOT
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-4 h-4 bg-gray-200/20 rounded-full flex items-center justify-center">
                      <span className="text-[10px] text-white">👤</span>
                    </div>
                    <span className="text-white font-bold text-xs opacity-90">{jackpot.user}</span>
                  </div>

                  {/* Amount Pill */}
                  <div className="mt-1 bg-black/30 px-6 py-1 rounded-full border border-white/10 shadow-inner w-full text-center">
                    <span className="text-white font-black text-lg tracking-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
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
                        <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
                          <span className="text-7xl md:text-9xl drop-shadow-2xl">{slide.emoji}</span>
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
          <div className="py-4">
            <GameSection title="HOT" games={games.hot} icon="/Rabet/hot.png" />
            <GameSection title="SLOTS" games={games.slots} icon="/Rabet/777.png" />
            <GameSection title="POKER" games={games.poker} icon="/Rabet/cards.png" />
            <GameSection title="PG" games={games.pg} icon="/Rabet/PG.png" />
            <GameSection title="Mass Bet" games={games.massBet} icon="⚽" />
            <GameSection title="JILI" games={games.jili} icon="/Rabet/JILI.png" />
            <GameSection title="Fishing" games={games.fishing} icon="/Rabet/fish.png" />
            <GameSection title="Video" games={games.video} icon="/Rabet/video.png" />

            {/* Sports Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3 px-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl px-4 py-2">
                  <span className="text-2xl">⚽</span>
                  <h2 className="text-white font-bold text-lg">SPORTS</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 bg-purple-800/50 rounded-lg flex items-center justify-center">
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button className="w-8 h-8 bg-purple-800/50 rounded-lg flex items-center justify-center">
                    <ChevronRight size={20} className="text-white" />
                  </button>
                </div>
              </div>
              <div className="px-4">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { flag: '/Rabet/cricket.png', sport: 'Cricket' },
                    { flag: '/Rabet/Cricket2.png', sport: 'Cricket' },
                    { flag: '/Rabet/Cricket3.png', sport: 'Cricket' },
                    { flag: '🇵🇰', sport: 'Pakistan' },
                    { flag: '/Rabet/Basketball.png', sport: 'BasketBall' },
                    { flag: '/Rabet/Cricket4.png', sport: 'Cricket' },
                  ].map((item, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-video bg-purple-900/40">
                      {item.flag && item.flag.endsWith('.png') ? (
                        <img src={item.flag} alt={item.sport} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600 to-blue-700">
                          <span className="text-6xl drop-shadow-2xl">{item.flag}</span>
                        </div>
                      )}

                      <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg z-10">
                        VIP3
                      </div>

                      {/* Name label that only shows on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">{item.sport}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Provider Logos */}
                <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-4 backdrop-blur-sm border border-purple-500/30">
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { name: 'bsn', icon: null },
                      { name: 'CMD', icon: null },
                      { name: 'CQ9', icon: null },
                      { name: 'JDB', icon: '/Rabet/jdb.png' },
                      { name: 'JILI', icon: '/Rabet/JILI.png' },
                      { name: 'PG SOFT', icon: '/Rabet/PG.png' },
                      { name: 'RICH88', icon: null },
                      { name: 'SBOBET', icon: null },
                      { name: 'PRAGMATIC', icon: null },
                      { name: 'PLAYTECH', icon: null },
                      { name: 'CASINO', icon: null }
                    ].map((provider, i) => (
                      <div key={i} className="bg-purple-950/50 rounded-lg p-2 flex items-center justify-center h-12 hover:bg-purple-900/50 transition-colors">
                        {provider.icon ? (
                          <img src={provider.icon} alt={provider.name} className="max-w-full max-h-8 object-contain" />
                        ) : (
                          <span className="text-yellow-500 font-bold text-[10px] uppercase">{provider.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* VIP Tab */}
      {activeTab === 'vip' && (
        <div className="px-4 py-6 pb-32">
          {/* Redesigned VIP Status Card to match Image */}
          <div className="relative bg-gradient-to-br from-[#fdf4db] via-[#f7e4b5] to-[#dec385] rounded-[2rem] p-6 mb-6 shadow-2xl overflow-hidden border border-[#e6c17a]">
            {/* Glossy Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#633a11] font-black text-3xl italic tracking-tighter">VIP0</span>
                    <span className="text-[#8b5e34] text-xs font-bold whitespace-nowrap">XP to Level Up</span>
                  </div>
                  <p className="text-[#7a4823] text-sm font-black mt-2">Just ₹200 to VIP1!</p>
                </div>

                {/* Silver Circular Badge */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 p-1 shadow-lg ring-4 ring-white/30">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center border-2 border-gray-100/50 shadow-inner">
                    <span className="text-3xl font-black text-gray-700">0</span>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-end mb-1 px-1">
                    <div className="w-4"></div> {/* Spacer */}
                    <span className="text-[#633a11] text-[10px] font-black">VIP1</span>
                  </div>
                  <div className="w-full bg-[#4d2d11] rounded-full h-3 border border-white/20 shadow-inner">
                    <div className="bg-[#4d2d11] h-full rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1 px-1">
                    <span className="text-[#633a11] text-[10px] font-black">Bet</span>
                    <span className="text-white/40 text-[10px] font-black"><span className="text-red-500">0</span>/10</span>
                  </div>
                  <div className="w-full bg-[#4d2d11] rounded-full h-3 border border-white/20 shadow-inner">
                    <div className="bg-[#4d2d11] h-full rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>

              {/* Deposit Button centered */}
              <div className="flex justify-center">
                <button
                  onClick={() => setActiveTab('recharge')}
                  className="bg-[#7a4823] hover:bg-[#633a11] text-white py-3.5 px-12 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all transform hover:-translate-y-0.5"
                >
                  Deposit Now
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-5 pb-4 px-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedVipLevel(i)}
                  className={`flex-shrink-0 w-28 md:w-32 h-36 md:h-40 rounded-[2rem] flex flex-col items-center justify-center transition-all border-2 relative overflow-hidden group
                    ${selectedVipLevel === i
                      ? 'bg-gradient-to-b from-[#4a268a] to-[#251347] border-[#ffd700] scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(234,179,8,0.3)]'
                      : 'bg-[#1a0b2e]/60 border-white/5 opacity-70 hover:opacity-100 hover:border-white/20'}`}
                >
                  {/* Selection glow */}
                  {selectedVipLevel === i && (
                    <div className="absolute inset-0 bg-yellow-500/5 animate-pulse"></div>
                  )}

                  <div className="w-20 h-20 md:w-24 md:h-24 mb-2 p-1 relative z-10 transition-transform group-hover:scale-110 duration-300">
                    <img src={`/Rabet/${i}.png`} alt={`VIP ${i}`} className="w-full h-full object-contain filter drop-shadow-[0_5px_10px_rgba(0,0,0,0.4)]" />
                  </div>
                  <p className={`text-sm md:text-base font-black relative z-10 transition-colors ${selectedVipLevel === i ? 'text-[#ffd700]' : 'text-purple-300'}`}>
                    VIP {i}
                  </p>

                  {/* Indicator dot */}
                  {selectedVipLevel === i && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#ffd700] rounded-full shadow-[0_0_8px_#ffd700]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl p-1 mb-4">
            <div className="bg-purple-900 rounded-xl p-6">
              <h2 className="text-yellow-400 text-xl font-bold mb-2">VIP1 <span className="text-white">Unlock Withdrawals</span></h2>
              <div className="bg-purple-800 rounded-2xl p-6 text-center">
                <p className="text-gray-300 text-sm mb-2">Withdrawable Amount</p>
                <p className="text-white text-4xl font-bold">₹50</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 rounded-2xl font-bold mb-4">Deposit ₹200</button>
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
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-500/20'
                : 'bg-[#1a0b3d] text-gray-400 border border-white/5'
                }`}
            >
              <Wallet size={20} /> Deposit
            </button>
            <button
              onClick={() => setShowDepositTab(false)}
              className={`py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg ${!showDepositTab
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-500/20'
                : 'bg-[#1a0b3d] text-gray-400 border border-white/5'
                }`}
            >
              <Wallet size={20} /> Withdrawal
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
                      { amt: 200, extra: 80 },
                      { amt: 300, extra: 150 },
                      { amt: 500, extra: 300 },
                      { amt: 1000, extra: 700 },
                      { amt: 2000, extra: 1600 },
                      { amt: 3000, extra: 2400 },
                      { amt: 5000, extra: 4500 },
                      { amt: 10000, extra: 10000 },
                    ].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDepositAmount(item.amt)}
                        className={`relative rounded-2xl p-3 flex flex-col items-center justify-center transition-all border-2 h-20 ${selectedDepositAmount === item.amt
                          ? 'bg-gradient-to-br from-[#fff6e5] to-[#fef0d1] border-[#ff9500] shadow-md shadow-orange-200'
                          : 'bg-white border-purple-50'
                          }`}
                      >
                        {item.badge && (
                          <div className="absolute -top-2 -left-1 bg-orange-600 text-[8px] text-white px-2 py-0.5 rounded-full font-black shadow-sm z-10">
                            {item.badge}
                          </div>
                        )}
                        <span className={`text-base font-black ${selectedDepositAmount === item.amt ? 'text-[#ff9500]' : 'text-purple-900'}`}>₹{item.amt}</span>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-pink-500 text-[10px]">🎁</span>
                          <span className="text-gray-400 text-[9px] font-bold italic">Extra {item.extra}</span>
                        </div>
                        {selectedDepositAmount === item.amt && (
                          <div className="absolute top-0 right-1 w-4 h-4 bg-orange-500 flex items-center justify-center rounded-bl-lg rounded-tr-lg">
                            <span className="text-white text-[8px]">✓</span>
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
                <div className="relative bg-white rounded-[2rem] p-8 text-center shadow-sm border border-purple-100 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gray-100/50 -translate-y-4"></div>
                  <div className="relative z-10 space-y-4">
                    <button className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto shadow-xl ring-8 ring-purple-100 active:scale-95 transition-all">
                      <Plus className="text-white" size={40} />
                    </button>
                    <p className="text-indigo-900 font-black text-lg">Link Bank Card</p>
                  </div>
                </div>

                {/* Withdrawable Amount Display */}
                <div className="text-center">
                  <p className="text-indigo-900 font-bold text-base mb-1">Withdrawable Amount</p>
                  <p className="text-[#ff9500] text-5xl font-black italic drop-shadow-sm">₹50</p>
                </div>

                {/* Withdrawal Info List */}
                <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-purple-100">
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-purple-900 font-black text-sm pl-1 border-l-4 border-purple-600 leading-none h-4">
                      Withdrawal Info
                    </h4>
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center">
                        <p className="text-gray-500 font-bold text-xs">• Max Withdrawable Amount</p>
                        <p className="text-indigo-900 font-black text-sm">₹0</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-500 font-bold text-xs">• Remaining Withdrawable Limit</p>
                        <p className="text-indigo-900 font-black text-sm">₹0</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-500 font-bold text-xs">• Selected Amount</p>
                        <p className="text-orange-600 font-black text-sm">₹{selectedWithdrawalAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amount Selection Grid */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-purple-900 font-black text-sm pl-1 border-l-4 border-purple-600 leading-none h-4">
                    Withdrawable Amount
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[100, 300, 500, 1000, 2000, 3000, 5000, 10000, 20000].map((amt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedWithdrawalAmount(amt)}
                        className={`relative rounded-xl py-4 flex items-center justify-center transition-all bg-white shadow-sm border border-purple-50 group active:scale-95 ${selectedWithdrawalAmount === amt ? 'bg-gradient-to-b from-[#ffefc2] to-[#fdcb48] border-[#fff000]' : ''}`}
                      >
                        <span className={`text-base font-black ${selectedWithdrawalAmount === amt ? 'text-[#ff9500]' : 'text-indigo-900'}`}>₹{amt}</span>
                        {selectedWithdrawalAmount === amt && (
                          <div className="absolute top-0 right-0 w-5 h-5 bg-pink-500 flex items-center justify-center rounded-bl-lg rounded-tr-lg shadow-sm">
                            <span className="text-white text-[10px]">✓</span>
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
                  <p className="text-center text-purple-900 font-black text-sm">
                    Become <span className="text-pink-600">VIP</span> to Withdraw Instantly
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Bottom Summary Bar (For Deposit) */}
          {showDepositTab && (
            <div className="fixed bottom-16 left-0 right-0 bg-white p-4 pb-8 flex items-center justify-between border-t border-purple-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] rounded-t-[2.5rem] z-20">
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-purple-900 font-black text-sm">Deposit Amount</span>
                  <span className="text-orange-500 font-black text-xl">{selectedDepositAmount}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-400 text-xs font-bold">Received:</span>
                  <span className="text-yellow-600 font-bold text-xs ring-1 ring-yellow-200 px-1.5 rounded-md bg-yellow-50">₹ {selectedDepositAmount}</span>
                  <span className="text-gray-400 font-bold text-xs">+</span>
                  <span className="text-pink-500 font-bold text-xs ring-1 ring-pink-200 px-1.5 rounded-md bg-pink-50">🎁 {[
                    { amt: 100, extra: 80 },
                    { amt: 200, extra: 80 },
                    { amt: 300, extra: 150 },
                    { amt: 500, extra: 300 },
                    { amt: 1000, extra: 700 },
                    { amt: 2000, extra: 1600 },
                    { amt: 3000, extra: 2400 },
                    { amt: 5000, extra: 4500 },
                    { amt: 10000, extra: 10000 },
                  ].find(i => i.amt === selectedDepositAmount)?.extra || 0}</span>
                  <span className="text-gray-400 font-bold text-xs">=</span>
                  <span className="text-purple-600 font-black text-xs">{selectedDepositAmount + ([
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
                className="bg-purple-600 text-white px-8 py-3.5 rounded-2xl font-black shadow-lg shadow-purple-200 active:scale-95 transition-all"
              >
                Deposit
              </button>
            </div>
          )}
        </div>
      )}

      {/* Agent Tab */}
      {activeTab === 'agent' && (
        <div className="min-h-screen bg-[#f8f5ff] pb-40 text-gray-800">
          {/* Header Tabs - Saturated purple style */}
          <div className="px-4 py-4 flex gap-3 bg-[#1a0b3d] shadow-lg sticky top-0 z-10">
            <button
              onClick={() => setShowAgentRules(false)}
              className={`flex-1 py-3 rounded-xl font-black flex items-center justify-center gap-2 transition-all ${!showAgentRules
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-[#2d144d] text-gray-400 border border-white/5'
                }`}
            >
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Wallet size={16} className={!showAgentRules ? 'text-white' : 'text-gray-400'} />
              </div>
              Commission
            </button>
            <button
              onClick={() => setShowAgentRules(true)}
              className={`flex-1 py-3 rounded-xl font-black flex items-center justify-center gap-2 transition-all ${showAgentRules
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-[#2d144d] text-gray-400 border border-white/5'
                }`}
            >
              <div className="bg-white/20 p-1.5 rounded-lg">
                <ClipboardCheck size={16} className={showAgentRules ? 'text-white' : 'text-gray-400'} />
              </div>
              Rules
            </button>
          </div>

          <div className="overflow-y-auto">
            {!showAgentRules ? (
              // COMMISSION TAB
              <div className="space-y-5 px-4 pt-5 pb-10">
                {/* Withdrawable Commission */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100 overflow-hidden relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Wallet size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-black text-purple-900">Withdrawable Commission</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 bg-purple-600 rounded-2xl py-4 px-6 flex items-center justify-center shadow-md">
                      <span className="text-white text-3xl font-black">₹0</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#ff9a3d] to-[#ffb144] hover:from-[#ff8c2d] hover:to-[#ffa234] text-white px-8 py-5 rounded-2xl font-black text-lg shadow-lg active:scale-95 transition-all">
                      Withdraw
                    </button>
                  </div>
                  <p className="text-[#ff9500] text-sm mt-4 font-bold flex items-center gap-1.5">
                    <span className="text-lg leading-none">★</span> Independent withdrawal system, open to all
                  </p>
                </div>

                {/* Earn by Inviting Friends */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Gift size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-black text-purple-900">Earn by inviting friends</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-center relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
                      <p className="text-white text-xl font-black">₹5/person</p>
                      <p className="text-white/80 text-[10px] font-bold mt-1 tracking-wider uppercase">Invitation Reward</p>
                      <div className="mt-2 text-3xl">👤</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-center relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
                      <p className="text-white text-xl font-black">+10%</p>
                      <p className="text-white/80 text-[10px] font-bold mt-1 tracking-wider uppercase">Commission Reward</p>
                      <div className="mt-2 text-3xl">🪙</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-4 text-center font-bold">
                    Get 5 per invite + up to 10% of their deposits, win or lose. Start now!
                  </p>
                </div>

                {/* Invite Details */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-black text-purple-900">Invite Details (Successful Registrations)</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3 pl-1">
                        <p className="text-purple-900 font-black text-sm">Direct Invites:<span className="text-orange-500 ml-1">0 Profile</span></p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#e8faff] rounded-xl p-4 text-center border border-[#b8e8f5]">
                          <p className="text-[#0089a7] text-[10px] font-black uppercase tracking-tighter">Today's Sign-ups</p>
                          <p className="text-[#0089a7] text-2xl font-black mt-1">0</p>
                        </div>
                        <div className="bg-[#e8faff] rounded-xl p-4 text-center border border-[#b8e8f5]">
                          <p className="text-[#0089a7] text-[10px] font-black uppercase tracking-tighter">This Week's Sign-ups</p>
                          <p className="text-[#0089a7] text-2xl font-black mt-1">0</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3 pl-1">
                        <p className="text-purple-900 font-black text-sm">Indirect Invites:<span className="text-orange-500 ml-1">0 Profile</span></p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#fff4e8] rounded-xl p-4 text-center border border-[#f5dab8]">
                          <p className="text-[#c07000] text-[10px] font-black uppercase tracking-tighter">Today's Sign-ups</p>
                          <p className="text-[#c07000] text-2xl font-black mt-1">0</p>
                        </div>
                        <div className="bg-[#fff4e8] rounded-xl p-4 text-center border border-[#f5dab8]">
                          <p className="text-[#c07000] text-[10px] font-black uppercase tracking-tighter">This Week's Sign-ups</p>
                          <p className="text-[#c07000] text-2xl font-black mt-1">0</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-[10px] mt-6 italic font-bold text-center border-t border-dashed border-gray-100 pt-4">
                    To join as a subordinate, the invitee must place a bet.
                  </p>
                </div>

                {/* Total Rewards */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-[10px] text-white">🏆</div>
                    </div>
                    <h3 className="font-black text-purple-900 text-lg">Total Rewards:<span className="text-purple-600 ml-2">₹0</span></h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white border-2 border-purple-50 rounded-2xl p-3 flex items-center gap-3 shadow-sm hover:border-purple-200 transition-all">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-lg">💸</div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-[9px] font-black uppercase">Invitation Reward</p>
                        <p className="text-blue-600 font-black text-lg">₹0</p>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-purple-50 rounded-2xl p-3 flex items-center gap-3 shadow-sm hover:border-purple-200 transition-all">
                      <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-lg">👛</div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-[9px] font-black uppercase">Total Commission</p>
                        <p className="text-orange-600 font-black text-lg">₹0</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invite Link */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Link size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-black text-purple-900">Invite Link</h3>
                  </div>
                  <div className="bg-purple-50/50 rounded-2xl p-4 flex items-center justify-between border border-purple-100 shadow-inner">
                    <p className="text-purple-900 font-bold text-sm truncate mr-4">
                      https://www.akbet8.com?shareCode=4R3MF0
                    </p>
                    <button className="text-purple-600 p-2 bg-white rounded-lg shadow-sm active:scale-90 transition-all">
                      <ClipboardCheck size={20} />
                    </button>
                  </div>
                </div>

                {/* This Week's Details */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-purple-600 rounded-md flex items-center justify-center text-[10px] text-white italic">D</div>
                    </div>
                    <h3 className="font-black text-purple-900">This Week's Details</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white border-2 border-purple-50 rounded-2xl p-5 text-center shadow-sm">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Trophy size={16} className="text-purple-300" />
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-tight">Team Deposit</p>
                      </div>
                      <p className="text-purple-900 text-2xl font-black">0/300</p>
                    </div>
                    <div className="bg-white border-2 border-purple-50 rounded-2xl p-5 text-center shadow-sm">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Users size={16} className="text-purple-300" />
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-tight">Number of invitees</p>
                      </div>
                      <p className="text-purple-900 text-2xl font-black">0/1</p>
                    </div>
                  </div>
                  <div className="space-y-1 pl-1">
                    <p className="text-orange-500 font-black text-[11px] italic">
                      Enjoy a 10% commission rate this week
                    </p>
                    <p className="text-gray-400 font-bold text-[10px]">
                      If conditions are met before the trial ends, enjoy a 15% commission rate
                    </p>
                  </div>
                </div>

                {/* Commission Rules Table IN COMMISSION TAB */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <ClipboardCheck size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-black text-purple-900">Commission Rules</h3>
                  </div>

                  <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-sm">
                    <table className="w-full text-[11px] text-center border-collapse">
                      <thead className="bg-[#f2f4ff] text-purple-900 font-black">
                        <tr>
                          <th className="py-3 px-1 border-r border-white font-black">Agent Commission</th>
                          <th className="py-3 px-1 border-r border-white font-black">Weekly Invites</th>
                          <th className="py-3 px-1 font-black">Downline Deposits</th>
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
                          <tr key={i} className={`font-bold ${i % 2 === 0 ? 'bg-white' : 'bg-[#fcfcff]'}`}>
                            <td className="py-3 px-1 text-purple-600 font-black border-r border-purple-50">{row.rate}</td>
                            <td className="py-3 px-1 text-purple-900 border-r border-purple-50">{row.invites}</td>
                            <td className="py-3 px-1 text-purple-900">{row.deposits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-400 text-[10px] mt-4 font-bold pl-1 italic">
                    Commission based on invites & deposits
                  </p>
                </div>
              </div>
            ) : (
              // RULES TAB
              <div className="space-y-6 px-4 pt-5 pb-40">
                {/* Agent Rules Flowchart */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-black text-purple-900">Agent Rules Flowchart</h3>
                  </div>

                  <div className="relative flex flex-col items-center py-4">
                    {/* Top Level (A) */}
                    <div className="relative z-10 mb-8 items-center flex flex-col">
                      <div className="w-14 h-14 rounded-full border-4 border-orange-200 overflow-hidden bg-orange-50 p-1">
                        <div className="w-full h-full rounded-full bg-orange-100 flex items-center justify-center text-2xl font-black text-orange-400">A</div>
                      </div>
                      <div className="mt-2 bg-white border border-gray-200 rounded-lg px-3 py-1 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Invite Friends</p>
                      </div>
                    </div>

                    {/* Level 1 Connections */}
                    <div className="absolute top-[4.5rem] w-32 h-20 border-x-2 border-t-2 border-gray-100 rounded-t-3xl pointer-events-none"></div>

                    {/* Level 1 (B and C) */}
                    <div className="flex justify-between w-full px-4 mb-20 relative z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-4 border-blue-100 overflow-hidden bg-blue-50 p-1">
                          <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-xl font-black text-blue-400">B</div>
                        </div>
                        <div className="mt-2 bg-purple-50 rounded-lg px-2 py-1 text-center">
                          <p className="text-[8px] font-black text-purple-700">Commission up to 50%</p>
                        </div>
                        {/* Recursive small avatars */}
                        <div className="flex gap-1 mt-4">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border-2 border-green-100 bg-green-50 flex items-center justify-center text-[10px] text-green-400 font-bold">D</div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-4 border-blue-100 overflow-hidden bg-blue-50 p-1">
                          <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-xl font-black text-blue-400">C</div>
                        </div>
                        <div className="mt-2 bg-purple-50 rounded-lg px-2 py-1 text-center">
                          <p className="text-[8px] font-black text-purple-700">10% Commission</p>
                        </div>
                        <div className="flex gap-1 mt-14">
                          <div className="w-6 h-6 rounded-full border-2 border-green-100 bg-green-50 flex items-center justify-center text-[10px] text-green-400 font-bold">E</div>
                        </div>
                      </div>
                    </div>

                    {/* Flow Notes */}
                    <div className="absolute top-[18rem] left-1/2 -translate-x-1/2 w-48 text-[9px] text-gray-400 font-bold text-center italic">
                      Indirect subordinates generate hierarchy commissions
                    </div>
                  </div>
                </div>

                {/* Agent Benefits */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Gift size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-black text-purple-900">Agent Benefits</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-orange-500 font-black text-sm mb-3">1. Earn commission by inviting friends</h4>
                      <ul className="space-y-2 list-none pl-1">
                        {[
                          "Friend registers and bets as your subordinate, you earn ₹5 reward. More subordinates, more income.",
                          "Rewards settle daily, unlock and accumulate after referrals' deposits, claim anytime on 'My Agent' page.",
                          "Commissions freeze if referrals are below VIP1; automatically unlock when they reach VIP1.",
                          "Deposit reward limits per referral unlock as shown on the event page."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2 text-purple-800/70 text-[11px] font-bold leading-relaxed">
                            <span className="text-purple-300 mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-orange-500 font-black text-sm mb-3">2. Agent Commission</h4>
                      <p className="text-purple-800/70 text-[11px] font-bold mb-4 pl-1">
                        Commission rate depends on last week's invitations and deposit amounts.
                      </p>

                      <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-sm">
                        <table className="w-full text-[10px] text-center border-collapse">
                          <thead className="bg-[#f8f9ff] text-gray-400 font-black">
                            <tr>
                              <th className="py-2.5 px-0.5 border-r border-white font-black uppercase tracking-tighter">Rate</th>
                              <th className="py-2.5 px-0.5 border-r border-white font-black uppercase tracking-tighter">Weekly Invites</th>
                              <th className="py-2.5 px-0.5 border-r border-white font-black uppercase tracking-tighter">Deposits</th>
                              <th className="py-2.5 px-0.5 border-r border-white font-black uppercase tracking-tighter">Earned</th>
                              <th className="py-2.5 px-0.5 font-black uppercase tracking-tighter">Reward</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { rate: '10%', invites: '0', deposits: '0', earned: '0', reward: '5' },
                              { rate: '15%', invites: '1 - 4', deposits: '300', earned: '45', reward: '10' },
                              { rate: '20%', invites: '5 - 10', deposits: '1,500', earned: '300', reward: '20' },
                              { rate: '25%', invites: '11 - 20', deposits: '3,300', earned: '825', reward: '30' },
                              { rate: '30%', invites: '21 - 40', deposits: '6,300', earned: '1,890', reward: '40' },
                              { rate: '35%', invites: '41 - 70', deposits: '12,300', earned: '4,305', reward: '50' },
                              { rate: '40%', invites: '71 - 100', deposits: '21,000', earned: '8,400', reward: '60' },
                              { rate: '45%', invites: '101 - 200', deposits: '30,300', earned: '13,635', reward: '70' },
                              { rate: '50%', invites: '201 - 500', deposits: '60,300', earned: '30,150', reward: '80' },
                              { rate: '55%', invites: '501 - 1000', deposits: '150,300', earned: '82,665', reward: '90' },
                              { rate: '60%', invites: '1001+', deposits: '300,000', earned: '180,000', reward: '100' },
                            ].map((row, i) => (
                              <tr key={i} className={`font-bold ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafaff]'}`}>
                                <td className="py-2.5 px-0.5 text-orange-500 font-black border-r border-purple-50">{row.rate}</td>
                                <td className="py-2.5 px-0.5 text-purple-900 border-r border-purple-50">{row.invites}</td>
                                <td className="py-2.5 px-0.5 text-purple-900 border-r border-purple-50">{row.deposits}</td>
                                <td className="py-2.5 px-0.5 text-purple-900 border-r border-purple-50">{row.earned}</td>
                                <td className="py-2.5 px-0.5 text-purple-900 font-black">{row.reward}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Standard Rules List */}
                  <div className="mt-8 space-y-5">
                    <ul className="space-y-2 list-none pl-1">
                      {[
                        "1. Withdraw if you VIP≥2",
                        "2. Low deposits/invites? Commission drops a level (e.g., 20% to 15%)",
                        "3. New agents start at 10%"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-purple-900/60 text-[11px] font-black">
                          <span className="text-purple-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h4 className="text-orange-500 font-black text-sm mb-2">Downline Commission Structure</h4>
                      <p className="text-purple-900/50 text-[11px] font-bold leading-relaxed pl-3 border-l-2 border-orange-100">
                        • In a multi-level downline structure, for example, D, E, F, G are subordinates of C; C is a subordinate of B; and B is a subordinate of A. If C deposits 1000, invites 150 people, and earns a commission of 1000 × 10% = 100, then: B (C's upline) earns 10% commission from C's commission (100 × 10% = 10). A (B's upline) earns 10% commission from B's commission (10 × 10% = 1).
                      </p>
                      <div className="mt-2 space-y-1 pl-3">
                        <p className="text-purple-800/60 text-[11px] font-bold">• Settlement: Real-time, withdraw anytime via agent panel.</p>
                        <p className="text-purple-800/60 text-[11px] font-bold">• Withdrawal: No restrictions.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-orange-500 font-black text-sm mb-2">Agent Privileges</h4>
                      <p className="text-purple-800/60 text-[11px] font-bold pl-3 border-l-2 border-orange-100">
                        • View new downlines, totals, today's and total rewards on the agent page. Click list for details.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-[#f8f9ff] rounded-3xl p-6 shadow-sm border border-purple-100 flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-orange-500 font-black">
                      <AlertTriangle size={18} />
                      <h3 className="text-sm">Important Notes</h3>
                    </div>
                    <ul className="space-y-3 list-none">
                      {[
                        "Deposits from new player promos do not count toward commission.",
                        "Only users joining via your QR code or link will be counted as referrals.",
                        "Each player is limited to one IP, device, phone number, and account. Abuse may lead to restrictions.",
                        "For questions, contact our 24/7 support team."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-purple-900/60 text-[11px] font-bold leading-relaxed">
                          <span className="text-purple-300 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-gradient-to-r from-[#ff9a3d] to-[#ffb144] hover:from-[#ff8c2d] hover:to-[#ffa234] text-white w-full py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 active:scale-95 transition-all">
                    Invite Friends
                  </button>
                </div>

                {/* Floating TOP Icon */}
                <div className="flex justify-end pr-4 -mt-10 mb-10 relative z-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Trophy className="text-white" size={24} />
                      <span className="text-[8px] text-white font-black tracking-widest mt-0.5">TOP</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Bottom Actions */}
          <div className="fixed bottom-16 left-0 right-0 p-4 bg-white z-40 pb-10 rounded-t-[2.5rem] border-t border-purple-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
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
          </div>
        </div>
      )}

      {/* Events Tab Panel */}
      {activeTab === 'events' && (
        <div className="px-4 py-6 pb-32">
          <h1 className="text-3xl font-black text-white mb-6">Promotions & Events</h1>
          <div className="space-y-4">
            {[
              { color: 'from-orange-600 to-red-600', bg: '/Rabet/firstdepositoffer.png', status: 'Active' },
              { color: 'from-green-600 to-emerald-600', bg: '/Rabet/vip3for500.png', status: 'Available' },
              { color: 'from-blue-600 to-cyan-600', bg: '/Rabet/FirstTopup.png', status: 'Active' },
              { color: 'from-purple-600 to-indigo-600', bg: '/Rabet/invitationchallenge2000.png', status: 'Active' },
              { color: 'from-yellow-600 to-orange-600', bg: '/Rabet/GetpromoCode.png', status: 'Coming Soon' },
              { color: 'from-pink-600 to-rose-600', bg: '/Rabet/upto50.png', status: 'Active' },
            ].map((event, i) => (
              <div key={i} className="flex flex-col h-72 rounded-[2rem] overflow-hidden shadow-2xl bg-white mb-6">
                {/* 80% Image Section */}
                <div className="h-[75%] w-full overflow-hidden">
                  <img
                    src={event.bg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 20% Interactive Area */}
                <div className="h-[25%] w-full flex items-center justify-between px-6 py-4">
                  <div className="flex flex-col">
                    <p className="text-gray-700 font-bold text-sm leading-tight">Become an Agent!</p>
                    <p className="text-gray-500 font-medium text-xs">Earn Millions Monthly</p>
                  </div>
                  <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-md active:scale-95 transition-all">
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showMailPanel && (
        <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center">
          <div className="bg-[#1a0b2e] w-full max-w-lg h-full md:h-[95vh] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-white/10">
            {/* Header Area */}
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                {/* Balance Indicator at top left */}
                <div className="bg-[#2d144d] px-3 py-1.5 rounded-lg flex items-center gap-2 border border-purple-500/30">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] text-black font-bold">₹</div>
                  <span className="text-white font-bold">50</span>
                </div>

                {/* Close Button - Square purple with circular style */}
                <button
                  onClick={() => setShowMailPanel(false)}
                  className="w-10 h-10 bg-[#3d2563] rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center px-2">
                <h2 className="text-white font-bold text-2xl tracking-wide">Mail</h2>
              </div>
            </div>

            {/* Content Area - Rounded container */}
            <div className="flex-1 mx-3 mb-3 bg-[#e8e4fe] rounded-[2.5rem] flex flex-col items-center justify-center p-6 shadow-inner overflow-hidden">
              <div className="flex flex-col items-center -translate-y-8">
                {/* Empty State Illustration */}
                <div className="relative mb-8 w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl scale-125"></div>
                  {/* Custom SVG Illustration for Mailbox */}
                  <svg className="w-32 h-32 text-[#8b8cf7] drop-shadow-2xl" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5l-9-4zm0 18H5V7.4l7 3.1 7-3.1V19h-7z" />
                    <path className="animate-bounce" d="M7 12l2-1 3 1.5 3-1.5 2 1V14l-5 2.5L7 14v-2z" opacity="0.6" />
                  </svg>
                  <div className="absolute top-0 right-4 animate-pulse">✨</div>
                  <div className="absolute bottom-4 left-0 text-purple-300">✦</div>
                </div>

                <h3 className="text-[#6c6ebf] font-bold text-xl mb-1 mt-4">No Messages</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons - Hidden on Mobile */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
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

      {activeTab === 'agent' && !hasSeenAgentReward && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setHasSeenAgentReward(true)}
        >
          <div
            className="relative w-full max-w-[360px] flex flex-col items-center animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button Top Right */}
            <button
              onClick={() => setHasSeenAgentReward(true)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 flex items-center justify-center text-white/90 hover:text-white transition-all bg-white/10 hover:bg-white/20 rounded-full border border-white/20"
            >
              <X size={28} strokeWidth={3} />
            </button>

            {/* Header Section (Deep Purple) */}
            <div className="w-full bg-[#6d28d9] rounded-t-[2.5rem] pt-10 pb-10 flex flex-col items-center relative overflow-visible border-x-[6px] border-t-[6px] border-[#c084fc]/20 shadow-[0_-20px_50px_rgba(109,40,217,0.3)]">
              {/* Decorative Stars and Sparkles */}
              <div className="absolute -left-3 top-12 text-pink-400 text-2xl animate-pulse">✦</div>
              <div className="absolute -right-2 top-24 text-white text-xl animate-bounce">✧</div>
              <div className="absolute left-1/4 -top-4 text-purple-200 text-xl">✦</div>

              {/* Title */}
              <h2 className="text-[26px] font-black text-white tracking-tight mb-2 leading-none">
                New Agent Reward
              </h2>

              {/* Status Pill */}
              <div className="bg-[#fb2c8d] px-5 py-1.5 rounded-full shadow-[0_5px_15px_rgba(251,44,141,0.4)] border border-white/20">
                <span className="text-white font-black text-[12px] italic uppercase tracking-wider">
                  Super agent activated!
                </span>
              </div>

              {/* Gold Bag Illustration Area */}
              <div className="absolute -right-8 -top-10 w-48 h-48 pointer-events-none z-20">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* The Bag Styling (Simplified CSS + Emoji version for high impact) */}
                  <div className="relative">
                    <span className="text-9xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)] select-none">💰</span>
                    {/* Floating elements from the bag */}
                    <div className="absolute top-2 right-0 text-3xl animate-bounce [animation-delay:-0.5s]">🪙</div>
                    <div className="absolute -top-4 left-4 text-3xl animate-bounce">🪙</div>
                    <div className="absolute -top-6 -left-4 text-2xl rotate-12">🎉</div>
                    <div className="absolute bottom-10 -right-4 text-2xl animate-pulse">✨</div>
                    <div className="absolute top-1/2 -right-8 text-blue-400 text-xl animate-spin-slow">✦</div>
                    <div className="absolute top-1/4 -left-10 text-green-400 text-xl">✨</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inner Content Card (White) */}
            <div className="w-full bg-white rounded-[2.5rem] -mt-6 relative z-10 p-5 flex flex-col gap-4 shadow-2xl border-x-[6px] border-b-[6px] border-[#c084fc]/20">
              {/* Connecting Metal Rings */}
              <div className="absolute -top-[22px] left-12 flex flex-col gap-1.5 pointer-events-none">
                <div className="w-3 h-7 bg-gradient-to-b from-purple-100 to-purple-300 rounded-full border border-purple-400 shadow-sm"></div>
              </div>
              <div className="absolute -top-[22px] right-12 flex flex-col gap-1.5 pointer-events-none">
                <div className="w-3 h-7 bg-gradient-to-b from-purple-100 to-purple-300 rounded-full border border-purple-400 shadow-sm"></div>
              </div>

              {/* Current Reward Box (Teal/Mint) */}
              <div className="bg-[#e0fbef] rounded-3xl p-5 border border-[#a7f3d0]/50 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 bg-[#14b8a6] text-white px-3 py-1.5 rounded-xl text-[13px] font-black mb-4 shadow-sm">
                  <span className="text-base text-yellow-300">👑</span> Current
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-[#0d9488] font-black text-sm">
                      <div className="w-6 h-6 bg-[#14b8a6]/20 rounded-lg flex items-center justify-center text-base">⚡</div>
                      Current Commission Rate
                    </div>
                    <span className="text-[#0d9488] font-black text-base">10%</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#14b8a6]/10 pt-2">
                    <div className="flex items-center gap-2.5 text-[#0d9488] font-black text-sm">
                      <div className="w-6 h-6 bg-[#14b8a6]/20 rounded-lg flex items-center justify-center text-base">👤</div>
                      Invitation Reward
                    </div>
                    <span className="text-[#0d9488] font-black text-base">₹5/person</span>
                  </div>
                </div>
              </div>

              {/* Target Reward Box (Orange/Yellow - After Claim) */}
              <div className="bg-gradient-to-b from-[#ffa31a] via-[#ff8c00] to-[#ff5100] rounded-[2rem] p-5 relative overflow-hidden shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)] group">
                {/* Background Dots/Pattern */}
                <div className="absolute top-4 left-4 grid grid-cols-3 gap-1 opacitiy-30">
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                </div>

                <div className="inline-flex items-center gap-2 text-white/95 font-black text-lg mb-2 relative z-10 px-1">
                  <span className="text-xl">👑</span> After claim
                </div>

                <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
                  <div className="text-6xl drop-shadow-md drop-shadow-white/20">💵</div>
                  <span className="text-white text-[56px] font-black italic tracking-tighter drop-shadow-2xl">₹50</span>
                </div>

                <div className="space-y-3 relative z-10 px-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-[#4a2400]/80 font-black text-[13px]">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center text-base text-white">⚡</div>
                      Current Commission Rate
                    </div>
                    <span className="text-white font-black text-xl">50%</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-2">
                    <div className="flex items-center gap-2.5 text-[#4a2400]/80 font-black text-[13px]">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center text-base text-white">👤</div>
                      Invitation Reward
                    </div>
                    <span className="text-white font-black text-xl">₹20/person</span>
                  </div>
                </div>

                {/* Big Glossy Arrow pointing up/right */}
                <div className="absolute bottom-4 -right-1 opacity-90 select-none pointer-events-none transform -rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <path d="M20 80L75 25M75 25H40M75 25V60" stroke="white" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                    <path d="M20 80L75 25M75 25H40M75 25V60" stroke="#ffd900" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(255,217,0,0.8)]" />
                  </svg>
                </div>
              </div>

              {/* Main Receive Button */}
              <button
                onClick={() => {
                  alert("Super Agent Status Activated! Rewards claimed.");
                  setHasSeenAgentReward(true);
                }}
                className="w-full bg-gradient-to-r from-[#2ee69c] via-[#10b981] to-[#34d399] hover:brightness-110 text-white font-black py-4 rounded-2xl text-[28px] shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all active:scale-95 leading-none mt-2"
              >
                Receive
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-950 via-purple-950/95 to-transparent backdrop-blur-lg border-t border-purple-500/30 z-40">
        <div className="flex justify-around items-center p-2 md:p-4 max-w-6xl mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-0.5 md:gap-1 transition-all ${activeTab === 'home' ? 'scale-110' : ''
              }`}
          >
            <div
              className={`w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'home'
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl shadow-purple-500/50'
                : 'bg-purple-900/30'
                }`}
            >
              <svg className="w-6 md:w-7 h-6 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className={`text-xs font-semibold ${activeTab === 'home' ? 'text-white' : 'text-gray-400'}`}>
              HOME
            </span>
          </button>

          <button
            onClick={() => setActiveTab('vip')}
            className={`flex flex-col items-center gap-0.5 md:gap-1 transition-all ${activeTab === 'vip' ? 'scale-110' : ''
              }`}
          >
            <div
              className={`w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'vip'
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl shadow-purple-500/50'
                : 'bg-purple-900/30'
                }`}
            >
              <span className="text-xl md:text-2xl">👑</span>
            </div>
            <span className={`text-xs font-semibold ${activeTab === 'vip' ? 'text-white' : 'text-gray-400'}`}>
              VIP
            </span>
          </button>

          <button
            onClick={() => setActiveTab('withdraw')}
            className={`flex flex-col items-center gap-0.5 md:gap-1 transition-all ${activeTab === 'withdraw' ? 'scale-110' : ''
              }`}
          >
            <div
              className={`w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'withdraw'
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl shadow-purple-500/50'
                : 'bg-purple-900/30'
                }`}
            >
              <span className="text-xl md:text-2xl">💳</span>
            </div>
            <span className={`text-xs font-semibold ${activeTab === 'withdraw' ? 'text-white' : 'text-gray-400'}`}>
              Withdraw
            </span>
          </button>

          <button
            onClick={() => setActiveTab('agent')}
            className={`flex flex-col items-center gap-0.5 md:gap-1 transition-all ${activeTab === 'agent' ? 'scale-110' : ''
              }`}
          >
            <div
              className={`w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'agent'
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl shadow-purple-500/50'
                : 'bg-purple-900/30'
                }`}
            >
              <Users className={activeTab === 'agent' ? 'text-white' : 'text-gray-400'} size={20} />
            </div>
            <span className={`text-xs font-semibold ${activeTab === 'agent' ? 'text-white' : 'text-gray-400'}`}>
              Agent
            </span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`flex flex-col items-center gap-0.5 md:gap-1 transition-all ${activeTab === 'events' ? 'scale-110' : ''
              }`}
          >
            <div
              className={`w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center transition-all ${activeTab === 'events'
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl shadow-purple-500/50'
                : 'bg-purple-900/30'
                }`}
            >
              <Gift className={activeTab === 'events' ? 'text-white' : 'text-gray-400'} size={20} />
            </div>
            <span className={`text-xs font-semibold ${activeTab === 'events' ? 'text-white' : 'text-gray-400'}`}>
              Events
            </span>
          </button>
        </div>
      </div>

      {/* Spacer for bottom nav */}
      <div className="h-20 md:h-24"></div>
    </div>


  );
}
