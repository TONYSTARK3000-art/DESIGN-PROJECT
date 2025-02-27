console.log("Content script loaded!");

// content.js (Handles fetching and displaying questions)
fetch(chrome.runtime.getURL('questions.json'))
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedQuestion = data[randomIndex];
    document.getElementById('question-text').innerText = selectedQuestion.question;
    document.getElementById('correct-answer').innerText = selectedQuestion.answer;
    document.getElementById('correct-answer').style.display = 'none';
  });

document.getElementById('submit-answer').addEventListener('click', function() {
  document.getElementById('correct-answer').style.display = 'block';
});
