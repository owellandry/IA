import { getAnswer } from './utils/openai.js';

import openai from 'openai';

const prompt = '¿Cómo puedo aprender a programar en JavaScript?';
const model = 'davinci'; // Selecciona el modelo de OpenAI que deseas utilizar

openai.apiKey = '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';

async function getAnswer(prompt, model) {
  const completions = await openai.complete({
    engine: model,
    prompt: prompt,
    maxTokens: 1024,
    n: 1,
    stop: '\n',
  });

  return completions.choices[0].text.trim();
}

export { getAnswer };
