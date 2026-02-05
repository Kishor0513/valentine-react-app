const RejectionMeter = ({ attemptCount, message }) => {
	const fillPercentage = Math.min(attemptCount * 10, 100);

	return (
		<div className="rejection-meter">
			<div className="meter-label">
				Rejection Attempts: <span>{attemptCount}</span>
			</div>
			<div className="meter-bar">
				<div
					className="meter-fill"
					style={{ width: `${fillPercentage}%` }}
				></div>
			</div>
			<div className="meter-message">{message}</div>
		</div>
	);
};

export default RejectionMeter;
