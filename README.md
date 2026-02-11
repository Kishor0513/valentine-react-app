# 💝 Valentine React App - Dudu & Bubu Edition

A cute and interactive Valentine's Day web app featuring **Dudu and Bubu**! Perfect for sharing with your special someone (like Fenshika 💕). This app ensures they *can't* say no!

![Valentine App](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Dudu & Bubu Theme**: Adorable animated characters (Dudu the bear & Bubu the bunny) that react to your choices.
- **No Rejection Allowed**: The "No" button playfully runs away when you try to click it!
- **Valentine Week Carousel**: Displays the entire Valentine's week (Rose Day, Propose Day, etc.) with a progress tracker.
- **Dynamic Moods**: Dudu's expression changes (from happy to crying) if you try to reject him.
- **Interactive Animations**:
  - Floating hearts and confetti 🎉
  - Dynamic background gradients that change with the day.
  - "Yes" button grows larger with every rejection attempt.
- **Personalized Success Screen**: A celebration screen with fireworks, a love letter, and share options.
- **Mobile-Friendly**: Fully responsive design for phone and desktop.

## 🎮 How It Works

1. **The Question**: The app asks "Will you be my Valentine?" with Dudu holding a gift.
2. **The Interaction**:
   - If they try to click **"No"**, the button dodges their cursor/finger!
   - Dudu gets sadder with every rejection attempt (but in a cute way).
   - The **"Yes"** button grows larger to encourage the right choice.
3. **The Celebration**:
   - Clicking **"Yes"** triggers a massive confetti explosion!
   - Dudu and Bubu celebrate together with a "Happy" animation.
   - A sweet love letter and fun stats (like "Happiness Level: 100%") appear.

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Kishor0513/valentine-react-app.git

# Navigate to project directory
cd valentine-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 💻 Technologies Used

- ⚛️ **React 18.2**
- ⚡ **Vite 5.0**
- 🎨 **CSS3** (Animations, Gradients, Keyframes)
- 🎭 **Component-based Architecture**

## 📂 Project Structure

```
valentine-react-app/
├── src/
│   ├── components/
│   │   ├── DayBackground.jsx       # Dynamic backgrounds for each day
│   │   ├── DuduBubuCouple.jsx      # Main characters (Dudu & Bubu) animation
│   │   ├── ParticlesBackground.jsx # Floating hearts background effect
│   │   ├── QuestionCard.jsx        # The main question card with Yes/No buttons
│   │   ├── RejectionMeter.jsx      # Tracks how many times "No" was attempted
│   │   ├── SoundToggle.jsx         # Component for handling background music
│   │   ├── SuccessCard.jsx         # The celebration screen after saying Yes
│   │   └── ValentineWeekBanner.jsx # Top carousel showing Valentine week progress
│   ├── App.jsx                     # Main application logic and state
│   ├── App.css                     # Main styling
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 💖 Acknowledgments

- Starring **Dudu** (the bear) and **Bubu** (the bunny).
- Built with love using React and Vite.
- Font: Poppins & Pacifico from Google Fonts.

---

Made with ❤️ for Valentine's Day
