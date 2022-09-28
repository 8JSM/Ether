const quotes = [
    {
        quote: "Money is like sea water. It makes you thirsty the more you drink it",
        author: "Arthur Schopenhauer"
    },
    {
        quote: "A person who cannot spend two-thirds of his day as he pleases is a slave.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "God is always within us, only we are so seldom at home.",
        author: "Meister Eckhart"
    },
    {
        quote: "The bird fights its way out of the egg. The egg is the world. If you want to be born, you have to destroy a world. The bird flies to God. The god's name is Abraxas.",
        author: "Hermann Hesse"
    },
    {
        quote: "I don't know where I came from. I don't know where I'm going. I don't know why I exist or what use I am. One thing is certain: I will die soon. But what I don't know the most is that 'death'.",
        author: "Fyodor Dostoevsky"
    },
    {
        quote: "The one who first used a swear word instead of a spear was the founder of civilization.",
        author: "Sigmund Freud"
    },
    {
        quote: "I could see far because I was on the shoulders of giants.",
        author: "Sir Isaac Newton"
    },
    {
        quote: "I think therefore I am.",
        author: "René Descartes"
    },
    {
        quote: "One person with a belief is a social power equal to ninety-nine who have only interests.",
        author: "John Stuart Mill"
    },
    {
        quote: "Thoughts without content are empty, intuitions without concepts are blind.",
        author: "Immanuel Kant"
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;