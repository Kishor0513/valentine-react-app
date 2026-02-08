import { useEffect } from 'react';

const ValentineWeekBanner = ({ currentDay, onDayChange }) => {
	const valentineWeek = [
		{ day: 'Rose Day', date: 'Feb 7', emoji: '🌹', color: '#ff6b9d' },
		{ day: 'Propose Day', date: 'Feb 8', emoji: '💍', color: '#ff8fab' },
		{ day: 'Chocolate Day', date: 'Feb 9', emoji: '🍫', color: '#8B4513' },
		{ day: 'Teddy Day', date: 'Feb 10', emoji: '🧸', color: '#DEB887' },
		{ day: 'Promise Day', date: 'Feb 11', emoji: '🤝', color: '#FFD700' },
		{ day: 'Hug Day', date: 'Feb 12', emoji: '🤗', color: '#FFA69E' },
		{ day: 'Kiss Day', date: 'Feb 13', emoji: '💋', color: '#FF69B4' },
		{ day: "Valentine's Day", date: 'Feb 14', emoji: '❤️', color: '#FF1493' },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			onDayChange((prev) => (prev + 1) % valentineWeek.length);
		}, 10000); // Changed to 10 seconds
		return () => clearInterval(interval);
	}, [onDayChange]);

	const currentDayData = valentineWeek[currentDay];

	return (
		<div className="valentine-week-carousel">
			<div
				className="carousel-card"
				style={{ '--day-color': currentDayData.color }}
			>
				<div className="carousel-emoji">{currentDayData.emoji}</div>
				<div className="carousel-day-name">{currentDayData.day}</div>
				<div className="carousel-date">{currentDayData.date}</div>
				<div className="carousel-progress">
					<div className="progress-dots">
						{valentineWeek.map((_, index) => (
							<span
								key={index}
								className={`progress-dot ${index === currentDay ? 'active' : ''} ${index < currentDay ? 'completed' : ''}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ValentineWeekBanner;
