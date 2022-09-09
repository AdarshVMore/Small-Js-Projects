const new_quote = document.querySelector('button')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const quotes = [
    {
        quot: 'The purpose of our lives is to be happy.',
        auth: 'Dalai Lama',
    },
    {
        quot: 'Life is what happens when you are busy making other plans',
        auth: 'John',
    },
    {
        quot: 'Get busy living or get busy dying."',
        auth: 'Stephen King',
    },
    {
        quot: 'You only live once, but if you do it right, once is enough',
        auth: 'Mae West',
    },
    {
        quot: 'Many of lifes failures are people who did not realize how close they were to success when they gave up.',
        auth: 'Thomas A. Edison',
    },
    {
        quot: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        auth: 'Albert Einstein',
    },
    {
        quot: ' "Never let the fear of striking out keep you from playing the game."',
        auth: "- Babe Ruth",
    },
    {
        quot: '"Money and success dont change people; they merely amplify what is already there." ',
        auth: '- Will Smith',
    },
    
]


new_quote.addEventListener('click', () => {
    random_i = Math.floor(Math.random()* quotes.length)
    quote.innerText =  quotes[random_i].quot 
    author.innerText = quotes[random_i].auth
})



// const api_url ="https://paperquotes.p.rapidapi.com/quotes";

// async function getapi(urls)
// {
//   const response = await fetch(urls);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);