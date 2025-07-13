const moon = document.getElementById('moon');
const message = document.getElementById('message');
const final = document.getElementById('final');
const gift = document.getElementById('gift');
const btn = document.getElementById('nextBtn');

// Only messages now (no need to change moon appearance)
const messages = [
  "In the beginning, there was only darkness... but then came you.",
  "You became the first light in my sky — gentle, mysterious, magical.",
  "With you, every moment felt like the universe aligning for us.",
  "Even when we’re apart, the moon reminds me of your warmth and light."
];

let currentStep = 0;

btn.addEventListener('click', () => {
  // Step 1 to 4: Show poetic messages
  if (currentStep < messages.length) {
    message.textContent = messages[currentStep];
    message.classList.add('show');
    currentStep++;

    btn.textContent = (currentStep === messages.length) ? "Read the Final Letter" : "Next Phase";

  // Step 5: Final romantic message
  } else if (currentStep === messages.length) {
    message.classList.remove('show');
    moon.style.boxShadow = '0 0 60px rgba(255,255,255,0.8)';
    final.innerHTML = "You are the moonlight to my darkest nights,<br>the calm to my chaos.<br>With you, even silence feels like a song.<br>I love you endlessly, Diyanshi.";
    final.classList.add('show');
    btn.textContent = "Reveal My Gift";
    currentStep++;

  // Step 6: Reveal the final gift
  } else {
    gift.innerHTML = 'Forever yours.<br><a href="https://drive.google.com/file/d/1Dew6Utm98n1Wunuy5PZAVsJRG8Cab0Is/view?usp=sharing" style="color:#fff; text-decoration:underline;">Click here to see the moon I made just for you 🌙</a>';
    gift.classList.add('show');
    btn.style.display = "none";
  }
});
