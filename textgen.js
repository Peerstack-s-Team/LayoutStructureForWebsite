const sentences = [
    "The most important moment of your life is now.",
    "The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now.",
    "This, too, will pass.",
    "You will not be punished for your anger, you will be punished by your anger.",
    "Peace comes from within. Do not seek it without.",
    "The smaller your reality, the more convinced you are that you know everything.",
    "The past has no power over the present moment.",
    "If the facts don't fit the theory, change the facts."
];

function generateText(desiredLength = 300) {
    let genedContent = [];
    let currentLength = 0;

    while (currentLength < desiredLength) {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        const randomSentence = sentences[randomIndex];

        genedContent.push(randomSentence);
        currentLength += randomSentence.length + 1;

        if (genedContent.length > 50 || (currentLength > desiredLength && genedContent.length > 1)) {
            break;
        }
    }
    return genedContent.join(" ");
}


function fillAllParagraphs() {
    const paragraphs = document.querySelectorAll('.generated-paragraph');

    paragraphs.forEach(p => {
        const minLen = 180;
        const maxLen = 600;
        const randomLength = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;

        p.textContent = generateText(randomLength);
    });
}

document.addEventListener('DOMContentLoaded', fillAllParagraphs);