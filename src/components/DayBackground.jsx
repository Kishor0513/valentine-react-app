import { useEffect } from 'react';

const DayBackground = ({ currentDay }) => {
    const valentineWeek = [
        { day: 'Rose Day', type: 'roses' },
        { day: 'Propose Day', type: 'propose' },
        { day: 'Chocolate Day', type: 'chocolate' },
        { day: 'Teddy Day', type: 'teddy' },
        { day: 'Promise Day', type: 'promise' },
        { day: 'Hug Day', type: 'hug' },
        { day: 'Kiss Day', type: 'kiss' },
        { day: "Valentine's Day", type: 'valentine' },
    ];

    const loveLanguages = [
        'I love you', 'Je t\'aime', 'Te amo', 'Ich liebe dich', 'Ti amo',
        '愛してる', '사랑해', 'Я тебя люблю', 'Ik hou van jou', 'Jag älskar dig',
        'Σ\'αγαπώ', 'Kocham cię', 'Eu te amo', 'Miluji tě', 'Ég elska þig',
        'Seni seviyorum', 'אני אוהב אותך', 'أحبك', 'मैं तुमसे प्यार करता हूँ', 'ฉันรักคุณ',
        '我爱你', 'Tôi yêu bạn', 'Mahal kita', 'Saya cinta kamu', 'Nakupenda',
        'Ndinokuda', 'Ek het jou lief', 'Mən səni sevirəm', 'Volim te', 'Обичам те'
    ];

    const currentType = valentineWeek[currentDay]?.type || 'roses';

    useEffect(() => {
        // Create falling elements
        const container = document.querySelector('.day-background-container');
        if (!container) return;

        const createFallingElement = () => {
            const element = document.createElement('div');
            element.className = `falling-element ${currentType}`;

            if (currentType === 'propose' && Math.random() > 0.6) {
                // 40% chance to show love language on Propose Day
                element.className = 'falling-element love-text';
                element.textContent = loveLanguages[Math.floor(Math.random() * loveLanguages.length)];
            } else {
                element.textContent = getEmoji(currentType);
            }

            element.style.left = Math.random() * 100 + 'vw';
            element.style.animationDuration = (Math.random() * 3 + 4) + 's';
            element.style.animationDelay = Math.random() * 2 + 's';
            element.style.fontSize = (Math.random() * 20 + 30) + 'px';

            container.appendChild(element);

            setTimeout(() => element.remove(), 8000);
        };

        const interval = setInterval(createFallingElement, 300);

        // Initial burst
        for (let i = 0; i < 15; i++) {
            setTimeout(createFallingElement, i * 100);
        }

        return () => clearInterval(interval);
    }, [currentType]);

    const getEmoji = (type) => {
        const emojis = {
            roses: '🌹',
            propose: '💍',
            chocolate: '🍫',
            teddy: '🧸',
            promise: '🤝',
            hug: '🤗',
            kiss: '💋',
            valentine: '❤️',
        };
        return emojis[type] || '❤️';
    };

    const getBackgroundGradient = (type) => {
        const gradients = {
            roses: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 25%, #ffc0d3 50%, #ff8fab 75%, #ff6b9d 100%)',
            propose: 'linear-gradient(135deg, #ffd700 0%, #ffb6c1 25%, #ff69b4 50%, #ffb6c1 75%, #ffd700 100%)',
            chocolate: 'linear-gradient(135deg, #8b4513 0%, #d2691e 25%, #cd853f 50%, #d2691e 75%, #8b4513 100%)',
            teddy: 'linear-gradient(135deg, #deb887 0%, #f4a460 25%, #d2b48c 50%, #f4a460 75%, #deb887 100%)',
            promise: 'linear-gradient(135deg, #ffd700 0%, #ffec8b 25%, #fff68f 50%, #ffec8b 75%, #ffd700 100%)',
            hug: 'linear-gradient(135deg, #ffa69e 0%, #ffb6ab 25%, #ffc5be 50%, #ffb6ab 75%, #ffa69e 100%)',
            kiss: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 25%, #ffb6c1 50%, #ff69b4 75%, #ff1493 100%)',
            valentine: 'linear-gradient(135deg, #ff0000 0%, #ff1493 25%, #ff69b4 50%, #ff1493 75%, #ff0000 100%)',
        };
        return gradients[type] || gradients.roses;
    };

    return (
        <div
            className="day-background-container"
            style={{
                background: getBackgroundGradient(currentType),
                backgroundSize: '400% 400%',
                animation: 'gradientShift 15s ease infinite'
            }}
        />
    );
};

export default DayBackground;
