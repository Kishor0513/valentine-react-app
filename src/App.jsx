import { useState, useCallback } from 'react';
import './App.css';
import DuduBubuCouple from './components/DuduBubuCouple';
import ParticlesBackground from './components/ParticlesBackground';
import QuestionCard from './components/QuestionCard';
import SoundToggle from './components/SoundToggle';
import SuccessCard from './components/SuccessCard';
import ValentineWeekBanner from './components/ValentineWeekBanner';
import DayBackground from './components/DayBackground';

function App() {
	const [currentDay, setCurrentDay] = useState(0);
	const [weekCompleted, setWeekCompleted] = useState(false);
	const [noClickCount, setNoClickCount] = useState(0);
	const [yesBtnSize, setYesBtnSize] = useState(1);
	const [showSuccess, setShowSuccess] = useState(false);
	const [soundEnabled, setSoundEnabled] = useState(true);
	const [mood, setMood] = useState('Hopeful');
	const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

	// Personalized for Fenshika 💕
	const recipientName = 'Fenshika';

	const sadMessages = [
		'Fenshika, please... 🥺',
		'My heart belongs to you 💔',
		"Don't break Dudu's heart... 😢",
		'I brought your favorite flowers... 🌹',
		"But... we're perfect together... 😭",
		"I'll wait for you forever... 💫",
		'Just one chance, Fenshika? 💭',
		"You're my only Valentine 😔",
		"This Valentine's week without you... 💔",
		'Please, my dear Fenshika 🙏',
	];

	const moods = [
		'Hopeful',
		'Nervous',
		'Worried',
		'Sad',
		'Heartbroken',
		'Devastated',
		'Crying',
		'Desperate',
		'Giving Up',
		'Last Hope',
	];

	const handleDayChange = useCallback((updateFunc) => {
		setCurrentDay((prev) => {
			const nextDay = updateFunc(prev);
			// If we've completed all 8 days, show the final question
			if (nextDay === 0 && prev === 7) {
				setWeekCompleted(true);
			}
			return nextDay;
		});
	}, []);

	const handleNoClick = () => {
		const newCount = noClickCount + 1;
		setNoClickCount(newCount);
		setYesBtnSize((prev) => prev + 0.3);

		// Update mood
		const moodIndex = Math.min(newCount, moods.length - 1);
		setMood(moods[moodIndex]);

		// Move No button to random position
		const container = document.querySelector('.buttons-container');
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
			formData.append('form-name', 'valentine-responses');
			formData.append('response', 'YES');
			formData.append('recipientName', recipientName || 'Anonymous');
			formData.append('rejectionCount', noClickCount);
			formData.append('timestamp', new Date().toISOString());

			await fetch('/', {
				method: 'POST',
				body: formData,
			});
			console.log('Response tracked! 💕');
		} catch (error) {
			console.log('Tracking failed, but love still succeeds! 💝');
		}
	};

	const createConfetti = () => {
		const colors = ['#ff6b9d', '#ffa69e', '#c06c84', '#ff8fab', '#ffe6f0'];
		for (let i = 0; i < 100; i++) {
			setTimeout(() => {
				const confetti = document.createElement('div');
				confetti.className = 'confetti-piece';
				confetti.style.left = Math.random() * 100 + 'vw';
				confetti.style.backgroundColor =
					colors[Math.floor(Math.random() * colors.length)];
				confetti.style.animationDelay = Math.random() * 3 + 's';
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
				title: '💝 Will You Be My Valentine?',
				text: 'Check out this cute Valentine app!',
				url: window.location.href,
			});
		} else {
			navigator.clipboard.writeText(window.location.href);
			alert('Link copied to clipboard! 📋');
		}
	};

	const restart = () => {
		setShowSuccess(false);
		setNoClickCount(0);
		setYesBtnSize(1);
		setMood('Hopeful');
		setWeekCompleted(false);
		setCurrentDay(0);
	};

	return (
		<div className="App">
			<DayBackground currentDay={currentDay} />
			<ParticlesBackground />

			{/* Hidden Netlify Form for tracking responses */}
			<form
				name="valentine-responses"
				data-netlify="true"
				hidden
			>
				<input
					type="text"
					name="response"
				/>
				<input
					type="text"
					name="recipientName"
				/>
				<input
					type="text"
					name="rejectionCount"
				/>
				<input
					type="text"
					name="timestamp"
				/>
			</form>

			{!weekCompleted && !showSuccess && (
				<>
					{/* Valentine Week Banner - Centered and Prominent */}
					<ValentineWeekBanner
						currentDay={currentDay}
						onDayChange={handleDayChange}
					/>
				</>
			)}

			{weekCompleted && !showSuccess && (
				<>
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
					recipientName={recipientName}
					rejectionCount={noClickCount}
					onShare={shareApp}
					onRestart={restart}
				/>
			)}

			<SoundToggle
				enabled={soundEnabled}
				onToggle={toggleSound}
			/>
		</div>
	);
}

export default App;
