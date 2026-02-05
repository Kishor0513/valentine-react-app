# 💝 Valentine React App

A fun and interactive Valentine's Day web app built with React and Vite that doesn't allow rejection! Perfect for sharing with your crush or partner.

![Valentine App](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **No Rejection Allowed**: The "No" button runs away when you try to click it!
- **Growing Yes Button**: Gets bigger with each rejection attempt
- **Interactive Animations**: Confetti celebration, pulse effects, floating hearts
- **Rejection Meter**: Tracks how many times they tried to say no
- **Mood Indicator**: Character emotions change based on rejection count
- **Mobile-Friendly**: Responsive design works on all devices
- **URL Personalization**: Add a name parameter to personalize the message
- **Built with React**: Modern component-based architecture

## 🎮 How It Works

1. The app asks "Will you be my Valentine?"
2. Two buttons appear: "Yes" and "No"
3. If someone tries to click "No":
   - The button moves to a random position
   - Sad messages appear
   - The "Yes" button grows bigger
   - After 10 attempts, "No" disappears!
4. When they click "Yes":
   - Celebration with confetti 🎉
   - Cute success message
   - Share button to spread the love

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/valentine-react-app.git

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

### Preview Production Build

```bash
npm run preview
```

## 🎨 Personalization

Add URL parameters to personalize the experience:

- **Add a name**: `?name=Sarah`
- **Full URL**: `http://localhost:5173/?name=YourCrush`

Example: `http://localhost:5173/?name=Alex`

## 💻 Technologies Used

- ⚛️ React 18.2
- ⚡ Vite 5.0
- 🎨 CSS3 with Animations
- 🎭 Component-based Architecture
- 📱 Responsive Design

## 📂 Project Structure

```
valentine-react-app/
├── src/
│   ├── components/
│   │   ├── QuestionCard.jsx
│   │   ├── SuccessCard.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── RejectionMeter.jsx
│   │   └── SoundToggle.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🌟 Features in Detail

### Interactive Character

- Animated character with changing expressions
- Responds to rejection attempts
- Waving hands and floating animation

### Rejection Meter

- Visual progress bar at the top
- Tracks rejection attempts
- Shows funny messages as count increases

### Success Celebration

- Confetti animation
- Stats display (rejection count, happiness level)
- Love letter with inspirational quote
- Share functionality

## 🎯 Perfect For

- Valentine's Day surprises 💕
- Asking someone to be your Valentine
- Fun way to confess feelings
- Sharing on social media
- Making someone smile 😊

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Acknowledgments

- Inspired by viral Valentine's Day meme projects
- Built with love using React and Vite
- Font: Poppins & Pacifico from Google Fonts

## ⭐ Show Your Support

Give a ⭐️ if you liked this project!

---

Made with ❤️ for Valentine's Day
