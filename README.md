# Guess My Number 🎯

A fun and interactive number guessing game built with HTML, CSS, and JavaScript! Test your luck and intuition by trying to guess the secret number between 1 and 20.

## 🎮 What it does

This is a browser-based guessing game where:
- The computer randomly selects a secret number between 1 and 20
- You have 20 attempts to guess the correct number
- You receive feedback whether your guess is too high, too low, or correct
- Your score decreases with each wrong guess
- The game tracks your highest score across multiple rounds
- Visual feedback changes the background color when you win or lose

## 🎯 Game Features

- **Random Number Generation**: Each game generates a new random number between 1-20
- **Score System**: Start with 20 points, lose 1 point per wrong guess
- **Highscore Tracking**: Keeps track of your best score across sessions
- **Input Validation**: Prevents invalid inputs (non-numbers, numbers outside 1-20 range)
- **Visual Feedback**: 
  - Green background when you win
  - Red background when you lose
  - Number box expands to reveal the secret number
- **Reset Functionality**: "Again!" button to start a new round

## 🚀 How to Run

### Method 1: Direct File Opening
1. **Clone or Download** the project files to your computer
2. **Navigate** to the project folder
3. **Double-click** on `index.html` to open it in your default web browser
4. **Start playing** immediately!

### Method 2: Using a Local Server (Recommended)
1. **Open Terminal/Command Prompt** in the project directory
2. **Run a local server**:
   
   **Using Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (if you have it installed):**
   ```bash
   npx http-server
   ```

3. **Open your browser** and go to `http://localhost:8000`
4. **Click** on `index.html` to start the game

### Method 3: Using VS Code Live Server Extension
1. **Install** the "Live Server" extension in VS Code
2. **Right-click** on `index.html`
3. **Select** "Open with Live Server"
4. **The game opens** automatically in your browser

## 🎲 How to Play

1. **Enter a number** between 1 and 20 in the input field
2. **Click "Check!"** to submit your guess
3. **Read the feedback**:
   - "Too high!" - Your guess is above the secret number
   - "Too low!" - Your guess is below the secret number
   - "Correct Number!" - You won! 🎉
4. **Keep guessing** until you find the number or run out of attempts
5. **Click "Again!"** to start a new round with a new secret number

## 📁 Project Structure

```
Guess-My-Number/
├── index.html      # Main HTML structure
├── style.css       # Game styling and layout
├── script.js       # Game logic and interactivity
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Game logic, DOM manipulation, and event handling
- **Google Fonts** - "Press Start 2P" retro gaming font

## 🎨 Game States

- **Initial State**: Dark background, question mark displayed
- **Playing**: Score decreases with wrong guesses
- **Victory**: Green background, secret number revealed, score saved if it's a highscore
- **Game Over**: Red background, secret number revealed, score becomes 0

## 🏆 Scoring System

- **Starting Score**: 20 points
- **Wrong Guess**: -1 point
- **Game Over**: When score reaches 0
- **Highscore**: Best score achieved is saved and displayed

## 🔧 Customization

You can easily modify the game by editing `script.js`:
- Change the number range by modifying the `Math.random() * 20` calculation
- Adjust starting score by changing the initial `score` value
- Modify colors by updating the background color values in the event handlers

## 📱 Browser Compatibility

This game works in all modern web browsers including:
- Chrome
- Firefox
- Safari
- Edge

No additional plugins or installations required!

---

**Enjoy the game and see if you can achieve the perfect score of 20!** 🎯
