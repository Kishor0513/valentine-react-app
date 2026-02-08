const SuccessCard = ({ recipientName, rejectionCount, onShare, onRestart }) => {
	return (
		<div className="container">
			<div className="card success-card">
				<div className="card-glow success-glow"></div>

				<div className="success-character">
					<div className="jumping-character">
						{/* Dudu and Bubu celebrating together */}
						<div className="celebration-couple">
							<span className="dudu-happy">🐻💕</span>
							<span className="heart-center">❤️</span>
							<span className="bubu-happy">🐰💖</span>
						</div>
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
					<span className="success-line">🎉 YES! FENSHIKA SAID YES! 🎉</span>
					<span className="success-main">
						This Valentine's Week is Ours! 💕
					</span>
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
					Fenshika, you've made this the best Valentine's ever! 😍
					<br />
					{rejectionCount > 0 && (
						<small>
							Even after <span>{rejectionCount}</span> attempts to say no, love
							conquered all! 💫
						</small>
					)}
				</p>

				<div className="love-letter">
					<div className="letter-icon">💌</div>
					<p className="letter-text">
						"Dear Fenshika, you're not just my Valentine,
						<br />
						you're my <span className="highlight">everything</span>!<br />
						Let's make this Valentine's week unforgettable! 🌹❤️"
					</p>
				</div>

				<div className="valentine-week-celebration">
					<div className="week-promise">
						<span>🌹 Roses for you everyday</span>
						<span>🍫 Sweet moments together</span>
						<span>🧸 Warm hugs always</span>
						<span>💕 Infinite love forever</span>
					</div>
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
