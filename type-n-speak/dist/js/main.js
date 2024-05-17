// // Init SpeechSynth API
// const synth = window.speechSynthesis;

// // DOM Elements
// const textForm = document.querySelector('form');
// const textInput = document.querySelector('#text-input');
// const voiceSelect = document.querySelector('#voice-select');
// const rate = document.querySelector('#rate');
// const rateValue = document.querySelector('#rate-value');
// const pitch = document.querySelector('#pitch');
// const pitchValue = document.querySelector('#pitch-value');
// const body = document.querySelector('body');
// const playButton = document.querySelector('#playButton');
// const pauseButton = document.querySelector('#pauseButton');
// const stopButton = document.querySelector('#stopButton');
// const volumeControl = document.querySelector('#volumeControl');

// // Browser identifier
// // Firefox 1.0+
// var isFirefox = typeof InstallTrigger !== 'undefined';

// // Chrome 1+
// var isChrome = !!window.chrome && !!window.chrome.webstore;

// // Init voices array
// let voices = [];

// // Function to populate voices
// const populateVoiceList = () => {
//   voices = synth.getVoices();

//   voiceSelect.innerHTML = ''; // Clear previous options

//   voices.forEach(voice => {
//     const option = document.createElement('option');
//     option.textContent = voice.name + ' (' + voice.lang + ')';
//     option.setAttribute('data-lang', voice.lang);
//     option.setAttribute('data-name', voice.name);
//     voiceSelect.appendChild(option);
//   });
// };

// // Populate voices initially
// populateVoiceList();

// // Listen for voiceschanged event
// synth.onvoiceschanged = populateVoiceList;

// // Speak function
// const speak = () => {
//   // Check if speaking
//   if (synth.speaking) {
//     console.error('Already speaking...');
//     return;
//   }
//   if (textInput.value !== '') {
//     // Add background animation
//     body.style.background = '#141414 url(img/wave.gif)';
//     body.style.backgroundRepeat = 'repeat-x';
//     body.style.backgroundSize = '100% 100%';

//     // Get speak text
//     const speakText = new SpeechSynthesisUtterance(textInput.value);

//     // Speak end
//     speakText.onend = e => {
//       console.log('Done speaking...');
//       body.style.background = '#141414';
//     };

//     // Speak error
//     speakText.onerror = e => {
//       console.error('Something went wrong');
//     };

//     // Selected voice
//     const selectedOption = voiceSelect.selectedOptions[0];
//     if (selectedOption) {
//       const selectedVoice = selectedOption.getAttribute('data-name');

//       // Loop through voices
//       voices.forEach(voice => {
//         if (voice.name === selectedVoice) {
//           speakText.voice = voice;
//         }
//       });
//     }

//     // Set pitch and rate
//     speakText.rate = rate.value;
//     speakText.pitch = pitch.value;
//     // Set volume
//     speakText.volume = volumeControl.value;

//     // Speak
//     synth.speak(speakText);
//   }
// };

// // EVENT LISTENERS

// // Text form submit
// textForm.addEventListener('submit', e => {
//   e.preventDefault();
//   speak();
//   textInput.blur();
// });

// // Rate value change
// rate.addEventListener('input', e => (rateValue.textContent = rate.value));

// // Pitch value change
// pitch.addEventListener('input', e => (pitchValue.textContent = pitch.value));

// // Voice select change
// voiceSelect.addEventListener('change', e => speak());

// // Playback controls
// playButton.addEventListener('click', () => {
//   if (!synth.speaking) {
//     speak();
//   }
// });

// pauseButton.addEventListener('click', () => {
//   if (synth.speaking && !synth.paused) {
//     synth.pause();
//   }
// });

// stopButton.addEventListener('click', () => {
//   if (synth.speaking) {
//     synth.cancel();
//   }
// });

// // Volume control
// volumeControl.addEventListener('input', () => {
//   if (synth.speaking) {
//     synth.volume = volumeControl.value;
//   }
// });
























// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

// Init voices array
let voices = [];

// Function to populate voices
const populateVoiceList = () => {
  voices = synth.getVoices();

  voiceSelect.innerHTML = ''; // Clear previous options

  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = voice.name + ' (' + voice.lang + ')';
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
};

// Populate voices initially
populateVoiceList();

// Listen for voiceschanged event
synth.onvoiceschanged = populateVoiceList;

// Speak function
const speak = () => {
  // Check if speaking
  if (synth.speaking) {
    console.error('Already speaking...');
    return;
  }
  if (textInput.value !== '') {
    // Add background animation
    body.style.background = '#141414 url(img/wave.gif)';
    body.style.backgroundRepeat = 'repeat-x';
    body.style.backgroundSize = '100% 100%';

    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    // Speak end
    speakText.onend = e => {
      console.log('Done speaking...');
      body.style.background = '#141414';
    };

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedOption = voiceSelect.selectedOptions[0];
    if (selectedOption) {
      const selectedVoice = selectedOption.getAttribute('data-name');

      // Loop through voices
      voices.forEach(voice => {
        if (voice.name === selectedVoice) {
          speakText.voice = voice;
        }
      });
    }

    // Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    // Speak
    synth.speak(speakText);
  }
};

// EVENT LISTENERS

// Text form submit
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

// Rate value change
rate.addEventListener('input', e => (rateValue.textContent = rate.value));

// Pitch value change
pitch.addEventListener('input', e => (pitchValue.textContent = pitch.value));

// Voice select change
voiceSelect.addEventListener('change', e => speak());





