const prompt = '';
const model = 'davinci';

const apiKey = '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';
const endpoint = 'https://api.openai.com/v1/engines/' + model + '/completions';

async function getAnswer() {
    const question = document.getElementById("question").value;

    const data = {
        "prompt": prompt + question + '?',
        "temperature": 0.5,
        "max_tokens": 60,
        "n": 1,
        "stop": "\n"
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    const answer = result.choices[0].text.trim();

    console.log(answer);
    if (answer) {
        document.getElementById("answer").innerHTML = answer;
    } else {
        document.getElementById("answer").innerHTML = "Lo siento, no pude entender tu pregunta. Por favor intenta de nuevo.";
    }
}
