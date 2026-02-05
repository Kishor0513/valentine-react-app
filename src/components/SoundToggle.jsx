const SoundToggle = ({ enabled, onToggle }) => {
	return (
		<button
			className="sound-toggle"
			onClick={onToggle}
		>
			{enabled ? '🔊' : '🔇'}
		</button>
	);
};

export default SoundToggle;
