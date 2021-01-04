const messages = [
    {
        "author": "Albert Einstein",
        "quote": "In the middle of every difficulty lies opportunity."
    },
    {
        "author": "Mahatma Gandhi",
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever."
    },
    {
        "author": "Winston Churchill",
        "quote": "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty."
    }
];


const getRandomQuote = (arr) => {
    const quote = arr[Math.floor(Math.random() * arr.length)];
    return quote;
}

const quote = getRandomQuote(messages);

console.log(`${quote.author} once said: \n\n${quote.quote}`);