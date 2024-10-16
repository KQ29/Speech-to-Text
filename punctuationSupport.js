let lastRecognizedTime = Date.now(); // Initialize the time for pause detection

// Function to process punctuation and handle pauses between results
function processPunctuation(transcript, currentTime) {
    transcript = transcript.trim(); // Remove unnecessary leading/trailing spaces

    // If there's no meaningful speech, don't add punctuation
    if (!transcript || transcript.length <= 1) {
        return transcript + ' '; // Just return the transcript without punctuation
    }

    // Replace voice commands with punctuation
    transcript = transcript.replace(/\bcomma\b/gi, ',');
    transcript = transcript.replace(/\bperiod\b/gi, '.');
    transcript = transcript.replace(/\bquestion mark\b/gi, '?');
    transcript = transcript.replace(/\bexclamation mark\b/gi, '!');

    // Automatically add a comma if there's a short pause (1.5 seconds)
    if (currentTime - lastRecognizedTime >= 1500 && currentTime - lastRecognizedTime < 3000) {
        // Ensure no space before comma
        transcript = transcript.trim();
        if (!transcript.endsWith(',')) { // Avoid double commas
            transcript += ',';
        }
    }

    // Automatically add a period if there's a longer pause (3 seconds or more)
    if (currentTime - lastRecognizedTime >= 3000) {
        // Ensure no space before period
        transcript = transcript.trim();
        if (!transcript.endsWith('.')) { // Avoid double periods
            transcript += '.';
        }
    }

    lastRecognizedTime = currentTime; // Update the last recognized time for the next check

    return transcript + ' '; // Return the processed text with punctuation and space after
}
