import React from "react";
import "./LandingPage.css";
import wingo from "./Assets/wingo.png";
import casino from "./Assets/casino.png";
import slots from "./Assets/slots.png";
import sports from "./Assets/sports.png";
import {
  FaWhatsapp,
  FaBolt,
  FaShieldAlt,
  FaHeadset,
  FaGift,
  FaTelegram
} from "react-icons/fa";

const games = [
  {
    title: "Wingo",
    img: wingo,
  },
  {
    title: "Slots",
    img: slots,
  },
  {
    title: "Latest Game",
    img: casino,
  },
  {
    title: "Sports",
    img: sports,
  },
];

const winners = [
  { name: "vik***gat", amount: "₹9,142,913.36" },
  { name: "Mem***MEE", amount: "₹6,372,800.00" },
  { name: "Mem***GYY", amount: "₹5,932,,000.00" },
  { name: "sam***win", amount: "₹1,250,000" },
  { name: "dev***pro", amount: "₹980,500.00" },
];

export default function LandingPage() {
  return (
    <main className="lp-root">
     
      <div className="bg-gradient" aria-hidden="true" />
      <div className="bg-pattern" aria-hidden="true" />
      <div className="bg-particles" aria-hidden="true" />

     
      <header className="hero-section ">
        <div className="hero-inner">
          <h1 className="headline">
            Play <span>•</span> Win <span>•</span> Repeat
          </h1>
          <p className="subhead">
            ABD909 brings you the hottest live games, lightning payouts, and
            daily bonuses—designed for winners.
          </p>

        <div className="icon-btn">
           <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Get your gaming ID on WhatsApp"
          >
            <FaWhatsapp className="btn-ico" /> 
            Get Your ID on WhatsApp
          </a>
            <a
             href="https://t.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Get your gaming ID on WhatsApp"
          >
            <FaTelegram className="btn-ico" /> 
            Get Your ID on Telegram
          </a>
        </div>
        

          <p className="micro-badge">Limited time: 100% first-deposit bonus</p>
        </div>
      </header>

    
      <section className="section features">
        <div className="feature glass">
          <FaBolt className="ico" aria-hidden="true" />
          <h3>Instant Play</h3>
          <p>Zero friction—launch games in seconds and stay in the action.</p>
        </div>
        <div className="feature glass">
          <FaShieldAlt className="ico" aria-hidden="true" />
          <h3>Secure & Fair</h3>
          <p>Bank-grade security and fair play you can trust, 24/7.</p>
        </div>
        <div className="feature glass">
          <FaHeadset className="ico" aria-hidden="true" />
          <h3>24/7 Support</h3>
          <p>Real humans on chat whenever you need a hand.</p>
        </div>
        <div className="feature glass">
          <FaGift className="ico" aria-hidden="true" />
          <h3>Daily Bonuses</h3>
          <p>Cashbacks, boosts, and surprise drops—win more, play more.</p>
        </div>
      </section>

      
      <section className="section games">
        <div className="section-head">
          <h2>Play the Fan Favourites</h2>
          <p>Jump into trending titles with one tap.</p>
        </div>

        <div className="game-grid">
          {games.map((g) => (
            <article className="game-card glass" key={g.title}>
              <img src={g.img} alt={`${g.title} preview`} loading="lazy" className="game-image"/>
              <div className="game-info">
                <h3>{g.title}</h3>
                <button className="btn btn-outline">Play Now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

  
      <section className="section winners">
        <div className="section-head">
          <h2>Recent Big Wins</h2>
          <p>Proof that luck favours the bold—are you next?</p>
        </div>

        <div className="board glass">
          {winners.map((w, i) => (
            <div className="row" key={i}>
              <span className="user">{w.name}</span>
              <span className="amount">{w.amount}</span>
            </div>
          ))}
        </div>
      </section>

     
      <section className="section cta">
        <h2>Ready to Make Your Move?</h2>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
          aria-label="Start ID on WhatsApp"
        >
          <FaWhatsapp className="btn-ico" /> 
          Start ID on WhatsApp
        </a>
        <p className="legal">18+ only. Play responsibly.</p>
      </section>

      
      <footer className="footer">
        © 2025 ABD909 · All rights reserved
      </footer>
    </main>
  );
}
