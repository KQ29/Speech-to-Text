# 🎤 Speech-to-Text Application with Automatic Punctuation

This project is a **Speech-to-Text** web application that converts spoken words into text. It automatically inserts punctuation based on pauses in speech, with commas inserted after short pauses and periods after longer pauses. It also supports manual punctuation using voice commands like "comma" or "period."

## ✨ Features

- **📝 Automatic Punctuation**:
  - Comma (`,`) is inserted after a **1.5-second** pause.
  - Period (`.`) is inserted after a **3-second** pause.
  - Intelligent handling of punctuation placement, avoiding unnecessary punctuation after short segments or silence.
  
- **🎙️ Manual Punctuation Commands**:
  - You can say **"comma"**, **"period"**, **"question mark"**, or **"exclamation mark"** to insert punctuation at specific points in the speech.
  
- **⏳ Real-time Transcription**:
  - As you speak, the app shows interim results and final transcriptions, updating dynamically in the result container.

- **💾 Download Feature**:
  - Once the transcription is complete, you can download the result as a `.txt` file.

## 🛠️ Technologies Used

- **HTML5, CSS3, JavaScript**: Front-end of the web application.
- **Web Speech API**: Used for speech recognition.
- **JavaScript for Logic**: Includes custom logic to handle automatic punctuation based on pauses and voice commands.

## 🚀 How It Works

1. **Start Listening**: Press the **"Start Listening"** button, and the app will begin capturing your speech.
2. **Speech Recognition**: The app continuously listens and transcribes your speech. If you pause for 1.5 seconds, a comma is inserted. If you pause for 3 seconds, a period is inserted.
3. **Manual Commands**: You can manually add punctuation by speaking commands like **"comma"**, **"period"**, etc.
4. **Download Transcription**: Once done, you can clear the results or download the transcription as a `.txt` file.

## 📝 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KQ29/speech-to-text-app.git
   cd speech-to-text-app
2. **Open in Browser**:

Simply open `index.html` in your browser. No additional setup is required.

3. **Start Speaking**:

Press the **"Start Listening"** button, and begin speaking. Watch as your speech is converted into text with punctuation automatically inserted.

## 📂 Project Files

- **`index.html`**: Main HTML structure.
- **`Speech-To-Text.css`**: Styles for the app.
- **`Speech-To-Text.js`**: Main JavaScript file to handle speech recognition and punctuation.
- **`punctuationSupport.js`**: Custom logic for handling automatic punctuation based on speech pauses and commands.
- **`Languages.js`**: Handles the selection of different languages for speech recognition.

## 🚧 Future Improvements

- Add support for additional punctuation marks like colons (`:`) or semicolons (`;`).
- Extend functionality to detect sentence structure and adjust punctuation accordingly.
- Add more language support for non-English transcriptions.

## 🐞 Known Issues

- Occasionally, minor punctuation errors can occur depending on speech clarity and recognition accuracy.
- The Web Speech API is browser-dependent and works best on Chrome.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
