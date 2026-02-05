const SuccessCard = ({ rejectionCount, onShare, onRestart }) => {
	return (
		<div className="container">
			<div className="card success-card">
				<div className="card-glow success-glow"></div>

				<div className="success-character">
					<div className="jumping-character">
						<span className="character-happy">🥰</span>
						<div className="heart-burst">
							<span>💖</span>
							<span>💕</span>
							<span>💗</span>
							<span>💝</span>
							<span>💘</span>
							<span>❤️</span>
						</div>
					</div>
				</div>

				<h1 className="success-title">
					<span className="success-line">🎉 YAYYY! 🎉</span>
					<span className="success-main">You Said YES!</span>
				</h1>

				<div className="success-stats">
					<div className="stat">
						<div className="stat-value">{rejectionCount}</div>
						<div className="stat-label">Rejection Attempts</div>
					</div>
					<div className="stat">
						<div className="stat-value">100%</div>
						<div className="stat-label">Happiness Level</div>
					</div>
					<div className="stat">
						<div className="stat-value">♾️</div>
						<div className="stat-label">Love Points</div>
					</div>
				</div>

				<p className="success-message">
					I knew you couldn't resist! 😍
					<br />
					{rejectionCount > 0 && (
						<small>
							After <span>{rejectionCount}</span> failed attempts to say no...
							😏
						</small>
					)}
				</p>

				<div className="love-letter">
					<div className="letter-icon">💌</div>
					<p className="letter-text">
						"Some people are worth melting for... but you're worth{' '}
						<span className="highlight">everything</span>! ❤️"
					</p>
				</div>

				<div className="action-buttons">
					<button
						className="share-btn"
						onClick={onShare}
					>
						<span>📱 Share This</span>
					</button>
					<button
						className="restart-btn"
						onClick={onRestart}
					>
						<span>🔄 Send to Someone Else</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SuccessCard;
