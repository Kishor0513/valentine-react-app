const DuduBubuCouple = ({ mood, noClickCount }) => {
	const getDuduExpression = () => {
		if (noClickCount > 7) return '😭';
		if (noClickCount > 4) return '🥺';
		if (noClickCount > 2) return '😊';
		return '😍';
	};

	const getBubuExpression = () => {
		if (noClickCount > 7) return '😰';
		if (noClickCount > 4) return '😌';
		if (noClickCount > 2) return '😊';
		return '🥰';
	};

	return (
		<div className="dudu-bubu-container">
			<div className="couple-scene">
				{/* Dudu (asking) */}
				<div
					className={`dudu character-left ${noClickCount > 5 ? 'sad-bounce' : 'happy-float'}`}
				>
					<div className="character-avatar dudu-avatar">
						<div className="avatar-face">
							<div className="cheeks">
								<span className="cheek left">🌸</span>
								<span className="cheek right">🌸</span>
							</div>
							<div className="eyes">{getDuduExpression()}</div>
							<div className="bear-ears">
								<span className="ear left">🐻</span>
								<span className="ear right">🐻</span>
							</div>
						</div>
						<div className="holding-gift">
							<span className="gift-box">🎁</span>
							<span className="heart-float">💝</span>
						</div>
					</div>
					<div className="character-name">Dudu</div>
				</div>

				{/* Heart between them */}
				<div
					className={`center-heart ${noClickCount > 5 ? 'broken-heart' : 'beating-heart'}`}
				>
					{noClickCount > 5 ? '💔' : '💗'}
					<div className="sparkles">
						<span className="sparkle">✨</span>
						<span className="sparkle">✨</span>
						<span className="sparkle">✨</span>
					</div>
				</div>

				{/* Bubu (Fenshika) */}
				<div
					className={`bubu character-right ${noClickCount > 5 ? 'thinking' : 'happy-float'}`}
				>
					<div className="character-avatar bubu-avatar">
						<div className="avatar-face">
							<div className="cheeks">
								<span className="cheek left">🌺</span>
								<span className="cheek right">🌺</span>
							</div>
							<div className="eyes">{getBubuExpression()}</div>
							<div className="bunny-ears">
								<span className="ear left">🐰</span>
								<span className="ear right">🐰</span>
							</div>
						</div>
						<div className="holding-flower">
							<span className="flower">🌸</span>
						</div>
					</div>
					<div className="character-name">Fenshika</div>
				</div>
			</div>

			{/* Decorative elements */}
			<div className="floating-elements">
				<span
					className="float-item"
					style={{ animationDelay: '0s' }}
				>
					🌹
				</span>
				<span
					className="float-item"
					style={{ animationDelay: '0.5s' }}
				>
					💕
				</span>
				<span
					className="float-item"
					style={{ animationDelay: '1s' }}
				>
					🎀
				</span>
				<span
					className="float-item"
					style={{ animationDelay: '1.5s' }}
				>
					🌸
				</span>
				<span
					className="float-item"
					style={{ animationDelay: '2s' }}
				>
					💖
				</span>
			</div>
		</div>
	);
};

export default DuduBubuCouple;
