🛡️ Stree Raksha — Women Safety Web App

Stree Raksha is a lightweight, mobile-style web application designed to enhance women’s safety.
It provides emergency SOS functionality, location simulation, and dummy heart rate tracking — all through an intuitive, responsive frontend interface.

This app is frontend-only, built using HTML, CSS, and JavaScript, and designed to be easily deployed on Firebase Hosting or any static web platform.

🌟 Features
🔊 Volume Button Simulation

Simulates physical volume buttons on a mobile phone:

Press any button 3 times: Displays a popup saying “🚨 SOS message sent to contacts!”

Press any button 5 times: Plays a loud siren sound (dummy siren file).

A simple press counter resets automatically after inactivity.

🚨 Panic SOS Button

A large red circular Panic Button placed in the center of the app interface.

When pressed, it displays a modal popup saying:

“SOS message and location sent to emergency contacts.”

Shows a mock location (e.g., Latitude: 12.9716, Longitude: 77.5946).

Can include a short vibration animation or blinking border for emphasis.

❤️ Heart Rate Tracking (Dummy Feature)

Simulated health monitoring section for demonstration purposes.

Heart Rate Tracking: ON indicator

Add Device and Set Threshold buttons

When a threshold is exceeded, a popup appears:

“⚠️ Heart rate threshold exceeded! Sending emergency alert...”

(Note: No real sensor or device integration — this is a mock UI flow.)

🧠 Tech Stack
Technology	Purpose
HTML5	App structure & UI layout
CSS3 (Flexbox/Grid)	Responsive, mobile-style design
JavaScript (Vanilla)	Event handling & UI logic
Firebase Hosting (optional)	Deployment platform
Audio (MP3/WAV)	Siren sound playback
🎨 UI & Design

The app is built to look and feel like a smartphone application even on desktop browsers:

Mobile viewport width (~360px–420px)

Rounded corners and soft shadows

Red and black theme for urgency

Single-page layout (no navigation required)

Layout Overview
--------------------------------
| 🔴  Stree Raksha (Header)     |
|                              |
| ⬆️ Volume Up       Volume Down ⬇️ |
|                              |
|   🆘  [ Panic Button ]         |
|                              |
|  ❤️ Heart Rate Tracking ON    |
|   [ Add Device ] [ Threshold ]|
|                              |
|  “Safety is Power 💪” (Footer) |
--------------------------------

⚙️ Functionality (Frontend Simulation)
Action	Output
Press volume button 3×	Toast: “SOS message sent!”
Press volume button 5×	Play siren sound
Press Panic button	Popup with mock location
Set heart rate threshold	Simulated emergency alert

All actions are frontend-only simulations, handled using alert(), toast, or modal dialogs.

🚀 Getting Started
🧩 1. Clone the Repository
git clone https://github.com/<your-username>/stree-raksha.git
cd stree-raksha

🧰 2. Open in a Code Editor

Use VS Code, Sublime Text, or any preferred editor.

🧪 3. Run Locally

Open the file index.html directly in your browser.
Or run a local server:

npx live-server

☁️ 4. Deploy to Firebase Hosting (Optional)
firebase init
firebase deploy

📁 Project Structure
stree-raksha/
│
├── index.html           # Main UI layout
├── style.css            # App styling
├── script.js            # Core UI interactions
├── assets/
│   ├── siren.mp3        # Dummy siren sound
│   └── icons/           # Icons for buttons
└── README.md            # This documentation

🧱 Key JavaScript Functions
Function	Description
handleVolumePress()	Counts button presses & triggers actions
sendSOSMessage()	Displays popup alert
playSiren()	Plays siren sound
simulateHeartRate()	Triggers mock threshold warning
getMockLocation()	Returns sample coordinates
📱 Responsiveness

The app uses CSS Flexbox and media queries to ensure it adapts to all screen sizes.
When viewed on a desktop, it appears centered in a phone-shaped container.

🧩 Future Enhancements

✅ Real-time GPS integration
✅ SMS/Call API for real SOS delivery
✅ Integration with wearables for real heart-rate data
✅ Dark mode and accessibility support
✅ Backend for contact management

👩‍💻 Contributors

Abhijit — Creator & Frontend Developer

Contributions, forks, and pull requests are welcome!

⚠️ Disclaimer

This application is a frontend prototype intended for educational and demo purposes only.
It does not send real emergency messages or track actual locations.
For real safety apps, backend integration and verified APIs are required.

🧡 Acknowledgment

“Safety is not a privilege — it’s a right.”
Stree Raksha is inspired by the collective goal of empowering women with technology-driven safety tools.
