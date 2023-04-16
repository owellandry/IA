import { getAnswer } from './app.js';

async function submitQuestion() {
  const question = document.getElementById('question').value;
  const answer = await getAnswer(question, 'davinci');
  document.getElementById('answer').innerHTML = answer;
}
