const QuestionCard = ({
	recipientName,
	mood,
	yesBtnSize,
	noClickCount,
	noBtnPosition,
	onYesClick,
	onNoClick,
}) => {
	const getHearts = () => {
		const count = Math.max(5 - noClickCount, 1);
		return '💖'.repeat(count);
	};

	const getFunFact = () => {
		const facts = [
			"💡 Fun fact: Clicking 'Yes' increases happiness by 1000%!",
			'💡 Did you know? 9 out of 10 people eventually click Yes!',
			'💡 Scientific fact: You look cuter when you smile!',
			'💡 Fun fact: This button gets bigger every time you say no!',
			'💡 Studies show that saying Yes makes you 100x happier!',
			"💡 The 'No' button is getting tired of running away...",
			'💡 Your finger is getting closer to Yes... I can feel it!',
			'💡 Resistance is futile! The Yes button calls to you!',
			'💡 At this point, just click Yes already! 😂',
			'💡 The universe wants you to click Yes!',
		];
		return facts[Math.min(noClickCount, facts.length - 1)];
	};

	return (
		<div className="container">
			<div
				className="card"
				id="questionCard"
			>
				<div className="card-glow"></div>

				<div className="character-container">
					<div className="character-scene">
						<div className="character">
							<div className="character-body">
								<div className="character-head">
									<div className="character-eyes">
										<span className="eye">👀</span>
									</div>
									<div className="character-mouth">
										{noClickCount > 7
											? '😭'
											: noClickCount > 4
												? '😢'
												: noClickCount > 2
													? '😟'
													: '😊'}
									</div>
								</div>
								<div className="character-hands">
									<span className="hand left">🤚</span>
									<div className="heart-gift">💝</div>
									<span className="hand right">🤚</span>
								</div>
							</div>
						</div>
						<div className="roses">
							<span className="rose">🌹</span>
							<span className="rose">🌹</span>
							<span className="rose">🌹</span>
						</div>
					</div>
				</div>

				<h1 className="question">
					{recipientName ? (
						<>
							<span className="question-line">Will you be my Valentine,</span>
							<span className="question-highlight">{recipientName}?</span>
							<span className="question-emoji">💕</span>
						</>
					) : (
						<>
							<span className="question-line">Will you be</span>
							<span className="question-highlight">my Valentine?</span>
							<span className="question-emoji">💕</span>
						</>
					)}
				</h1>

				<div className="mood-indicator">
					<div className="mood-text">
						Mood: <span>{mood}</span>
					</div>
					<div className="mood-hearts">{getHearts()}</div>
				</div>

				<div className="buttons-container">
					<div className="buttons">
						<button
							className="yes-btn"
							onClick={onYesClick}
							style={{ transform: `scale(${yesBtnSize})` }}
						>
							<span className="btn-text">Yes! 💖</span>
							<span className="btn-shimmer"></span>
						</button>

						{noClickCount < 10 && (
							<button
								className="no-btn"
								onClick={onNoClick}
								style={
									noClickCount > 0
										? {
												position: 'fixed',
												left: `${noBtnPosition.x}px`,
												top: `${noBtnPosition.y}px`,
											}
										: {}
								}
							>
								<span className="btn-text">No</span>
							</button>
						)}
					</div>
				</div>

				<p className="subtitle">
					{noClickCount > 5
						? "The 'No' button is running out of places to hide! 😏"
						: 'Choose wisely! 😊'}
				</p>

				<div className="fun-fact">{getFunFact()}</div>
			</div>
		</div>
	);
};

export default QuestionCard;
