document.addEventListener('DOMContentLoaded', () => {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    const languageSelect = document.getElementById('language');
    const resultContainer = document.querySelector('.result p.resultText');
    const startListeningButton = document.querySelector('.btn.record');
    const recordButtonText = document.querySelector('.btn.record p');
    const clearButton = document.querySelector('.btn.clear');
    const downloadButton = document.querySelector('.btn.download');

    let recognizing = false;
    let finalTranscript = ''; // Store the full transcript with punctuation.

    languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.text = language.name;
        languageSelect.add(option);
    });

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = languageSelect.value;

    languageSelect.addEventListener('change', () => {
        recognition.lang = languageSelect.value;
    });

    startListeningButton.addEventListener('click', toggleSpeechRecognition);

    clearButton.addEventListener('click', clearResults);

    downloadButton.disabled = true;

    recognition.onresult = (event) => {
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                // Add punctuation support using the function from punctuationSupport.js
                finalTranscript += processPunctuation(transcript);
                downloadButton.disabled = false;
            } else {
                interimTranscript += transcript;
            }
        }
        resultContainer.textContent = finalTranscript + interimTranscript; // Display full text with interim results.
    };

    recognition.onend = () => {
        recognizing = false;
        startListeningButton.classList.remove('recording');
        recordButtonText.textContent = 'Start Listening';
    };

    downloadButton.addEventListener('click', downloadResult);

    function toggleSpeechRecognition() {
        if (recognizing) {
            recognition.stop();
        } else {
            recognition.start();
        }

        recognizing = !recognizing;
        startListeningButton.classList.toggle('recording', recognizing);
        recordButtonText.textContent = recognizing ? 'Stop Listening' : 'Start Listening';
    }

    function clearResults() {
        finalTranscript = ''; // Clear full transcript as well.
        resultContainer.textContent = '';
        downloadButton.disabled = true;
    }

    function downloadResult() {
        const resultText = resultContainer.textContent;

        const blob = new Blob([resultText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'Your-Text.txt';
        a.style.display = 'none';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
});
