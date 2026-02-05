import { useEffect } from 'react';

const ParticlesBackground = () => {
	useEffect(() => {
		const createHeart = () => {
			const heart = document.createElement('div');
			heart.className = 'floating-heart';
			heart.innerHTML = '💖';
			heart.style.left = Math.random() * 100 + 'vw';
			heart.style.animationDuration = Math.random() * 3 + 4 + 's';
			heart.style.fontSize = Math.random() * 20 + 10 + 'px';
			heart.style.opacity = Math.random() * 0.5 + 0.3;

			const container = document.getElementById('hearts-container');
			if (container) {
				container.appendChild(heart);

				setTimeout(() => {
					heart.remove();
				}, 7000);
			}
		};

		const interval = setInterval(createHeart, 300);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			id="hearts-container"
			className="hearts-background"
		></div>
	);
};

export default ParticlesBackground;
