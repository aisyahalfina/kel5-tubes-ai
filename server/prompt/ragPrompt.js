const SYSTEM_PROMPT = require("./systemPrompt");

const buildPrompt = (context, question) => {

    return `
${SYSTEM_PROMPT}

========================

CONTEXT

${context}

========================

PERTANYAAN

${question}

========================

JAWABAN
`;

};

module.exports = buildPrompt;