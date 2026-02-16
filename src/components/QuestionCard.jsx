import { useEffect, useRef, useState } from 'react';

const QuestionCard = ({
	recipientName,
	mood,
	yesBtnSize,
	noClickCount,
	noBtnPosition,
	onYesClick,
	onNoClick,
}) => {
	const noBtnRef = useRef(null);
	// Detect mobile device
	const [isMobile] = useState(() => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));


	useEffect(() => {
		if (isMobile || !noBtnRef.current) return;

		const handleMouseMove = (e) => {
			const btn = noBtnRef.current;
			if (!btn) return;

			const rect = btn.getBoundingClientRect();
			const btnCenterX = rect.left + rect.width / 2;
			const btnCenterY = rect.top + rect.height / 2;

			const distance = Math.sqrt(
				Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2)
			);

			// If mouse is within 100px of the button, move it away
			if (distance < 100) {
				onNoClick(); // Trigger the position update
			}
		};

		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	}, [isMobile, onNoClick]);

	const getHearts = () => {
		const count = Math.max(5 - noClickCount, 1);
		return '💖'.repeat(count);
	};

	const getFunFact = () => {
		const facts = [
			'💡 Fenshika, every moment with you would be magical! ✨',
			'💡 My heart beats faster just thinking about you! 💓',
			"💡 You make every day feel like Valentine's Day! 🌹",
			'💡 Together we could create beautiful memories! 📸',
			"💡 Fenshika + Me = Perfect Valentine's Week! 💕",
			'💡 Your smile lights up my world! 🌟',
			'💡 This is destiny calling... answer it! 💫',
			'💡 Love is in the air, can you feel it? 💘',
			'💡 My heart chose you from the start! 💖',
			'💡 Say yes and make this the best Valentine ever! 🎉',
		];
		return facts[Math.min(noClickCount, facts.length - 1)];
	};

	const handleNoButtonInteraction = (e) => {
		if (isMobile) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
		onNoClick();
	};

	return (
		<div className="container">
			<div
				className="card"
				id="questionCard"
			>
				<div className="card-glow"></div>

				<h1 className="question">
					<>
						<span className="question-line">Will you be my Valentine,</span>
						<span className="question-highlight">{recipientName}?</span>
						<span className="question-emoji">💕</span>
					</>
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
								ref={noBtnRef}
								className="no-btn"
								onClick={handleNoButtonInteraction}
								onTouchStart={handleNoButtonInteraction}
								onTouchEnd={handleNoButtonInteraction}
								style={
									noClickCount > 0
										? {
											position: 'fixed',
											left: `${noBtnPosition.x}px`,
											top: `${noBtnPosition.y}px`,
											pointerEvents: isMobile ? 'none' : 'auto',
										}
										: { pointerEvents: isMobile ? 'none' : 'auto' }
								}
							>
								<span className="btn-text">No</span>
							</button>
						)}
					</div>
				</div>

				<p className="subtitle">
					{noClickCount > 5
						? "Fenshika, the 'No' button is running away from us! 💫"
						: "This Valentine's week could be ours! 🌹"}
				</p>

				<div className="fun-fact">{getFunFact()}</div>
			</div>
		</div>
	);
};

export default QuestionCard;

