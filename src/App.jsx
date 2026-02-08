import { useState } from "react";
import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import QuestionCard from "./components/QuestionCard";
import RejectionMeter from "./components/RejectionMeter";
import SoundToggle from "./components/SoundToggle";
import SuccessCard from "./components/SuccessCard";

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesBtnSize, setYesBtnSize] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mood, setMood] = useState("Hopeful");
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

  // Get URL parameters for personalization
  const urlParams = new URLSearchParams(window.location.search);
  const recipientName = urlParams.get("name");

  const sadMessages = [
    "Oh no... 🥺",
    "Please reconsider? 💔",
    "I'm getting sadder... 😢",
    "My heart is breaking... 💔",
    "But... but... 😭",
    "I made cookies... 🍪",
    "Think about it... 💭",
    "Are you sure? 😔",
    "This hurts... 💔",
    "One more chance? 🙏",
  ];

  const moods = [
    "Hopeful",
    "Nervous",
    "Worried",
    "Sad",
    "Heartbroken",
    "Devastated",
    "Crying",
    "Desperate",
    "Giving Up",
    "Last Hope",
  ];

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);
    setYesBtnSize((prev) => prev + 0.3);

    // Update mood
    const moodIndex = Math.min(newCount, moods.length - 1);
    setMood(moods[moodIndex]);

    // Move No button to random position
    const container = document.querySelector(".buttons-container");
    if (container) {
      const maxX = window.innerWidth - 150;
      const maxY = window.innerHeight - 100;
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      setNoBtnPosition({ x: newX, y: newY });
    }
  };

  const handleYesClick = async () => {
    setShowSuccess(true);
    // Create confetti effect
    createConfetti();

    // Submit to Netlify Forms
    try {
      const formData = new FormData();
      formData.append("form-name", "valentine-responses");
      formData.append("response", "YES");
      formData.append("recipientName", recipientName || "Anonymous");
      formData.append("rejectionCount", noClickCount);
      formData.append("timestamp", new Date().toISOString());

      await fetch("/", {
        method: "POST",
        body: formData,
      });
      console.log("Response tracked! 💕");
    } catch (error) {
      console.log("Tracking failed, but love still succeeds! 💝");
    }
  };

  const createConfetti = () => {
    const colors = ["#ff6b9d", "#ffa69e", "#c06c84", "#ff8fab", "#ffe6f0"];
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.className = "confetti-piece";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
      }, i * 30);
    }
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const shareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: "💝 Will You Be My Valentine?",
        text: "Check out this cute Valentine app!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard! 📋");
    }
  };

  const restart = () => {
    setShowSuccess(false);
    setNoClickCount(0);
    setYesBtnSize(1);
    setMood("Hopeful");
  };

  return (
    <div className="App">
      <ParticlesBackground />

      {/* Hidden Netlify Form for tracking responses */}
      <form name="valentine-responses" data-netlify="true" hidden>
        <input type="text" name="response" />
        <input type="text" name="recipientName" />
        <input type="text" name="rejectionCount" />
        <input type="text" name="timestamp" />
      </form>

      {!showSuccess && (
        <>
          <RejectionMeter
            attemptCount={noClickCount}
            message={
              noClickCount > 0
                ? sadMessages[
                    Math.min(noClickCount - 1, sadMessages.length - 1)
                  ]
                : "Try to click 'No'... I dare you 😏"
            }
          />

          <QuestionCard
            recipientName={recipientName}
            mood={mood}
            yesBtnSize={yesBtnSize}
            noClickCount={noClickCount}
            noBtnPosition={noBtnPosition}
            onYesClick={handleYesClick}
            onNoClick={handleNoClick}
          />
        </>
      )}

      {showSuccess && (
        <SuccessCard
          rejectionCount={noClickCount}
          onShare={shareApp}
          onRestart={restart}
        />
      )}

      <SoundToggle enabled={soundEnabled} onToggle={toggleSound} />
    </div>
  );
}

export default App;
