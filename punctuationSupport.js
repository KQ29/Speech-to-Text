// punctuationSupport.js

// Separate function for adding punctuation based on specific keywords or pauses.
function processPunctuation(transcript) {
    transcript = transcript.trim();

    // Replace voice commands with punctuation.
    transcript = transcript.replace(/\bcomma\b/gi, ',');
    transcript = transcript.replace(/\bperiod\b/gi, '.');
    transcript = transcript.replace(/\bquestion mark\b/gi, '?');
    transcript = transcript.replace(/\bexclamation mark\b/gi, '!');

    // Optionally, automatically add punctuation after pauses or at the end.
    if (transcript.charAt(transcript.length - 1) !== '.' && transcript.length > 0) {
        transcript += '.';
    }

    return transcript + ' '; // Return the processed text with punctuation.
}
