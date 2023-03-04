export const arrayItems = [{
    name: 'Q&A',
    id: 'q&a',
    description: 'Answer questions based on existing knowledge',
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    }
},
{
    name: 'Grammar correction',
    id: 'grammarCorrection',
    description: 'Corrects sentences according to standard English',
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Summarize for a 2nd grader',
    id: 'summary',
    description: 'Translates difficult text into simpler concepts',
    option: {
        model: "text-davinci-003",
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Natural language to OpenAI API',
    id: 'naturalLanguage',
    description: 'Create code to call to the OpenAI API using a natural language instruction.',
    option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    }
},
{
    name: 'Text to command',
    id: 'textToCommand',
    description: 'Translate text into programmatic commands.',
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.0,
        stop: ["\n"],
    }
},
{
    name: 'English to other languages',
    id: 'translate',
    description: 'Translates English text into French, Spanish and Japanese.',
    option: {
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Classification',
    id: 'classification',
    description: 'Classify items into categories via example.',
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Translate programming languages',
    id: 'translateCode',
    description: 'Translate from one programming language to another',
    option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 54,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["###"],
    }
},
{
    name: 'Explain code',
    id: 'explainCode',
    description: 'Explain a complicated piece of code.',
    option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    }
},
{
    name: 'Ad from product description',
    id: 'makeAd',
    description: 'Turn a product description into ad copy.',
    option: {
        model: "text-davinci-003",
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Product name generator',
    id: 'productName',
    description: 'Create product names from examples words. Influenced by a community prompt.',
    option: {
        model: "text-davinci-003",
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Python bug fixer',
    id: 'pythonBugs',
    description: 'Find and fix bugs in source code.',
    option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 182,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["###"],
    }
},
{
    name: 'JavaScript helper chatbot',
    id: 'JSChat',
    description: 'Message-style bot that answers JavaScript questions',
    option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
    }
},
{
    name: 'Chat',
    id: 'chat',
    description: 'Open ended conversation with an AI assistant.',
    option: {
        model: "text-davinci-003",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    }
},
{
    name: 'Create study notes',
    id: 'studyNotes',
    description: 'Provide a topic and get study notes.',
    option: {
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Interview questions',
    id: 'interview',
    description: 'Create interview questions.',
    option: {
        model: "text-davinci-003",
        temperature: 0.5,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
]