const quoteCon = document.getElementById('quote-container');

const quoteText = document.getElementById('quote');
const authorName = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

// GET Quote from API

// show loading

const showLoading = () => {
    loader.hidden = false;
    quoteCon.hidden = true;

}

// hide loading

const hideLoading = () => {
    if (!loader.hidden) {
        quoteCon.hidden = false;
        loader.hidden = true;
    }
}

// https://api.quotable.io/random

const getQuote = async () => {
    const apiUrl = 'https://api.quotable.io/random';
    showLoading();

    try {
        
        const response = await fetch(apiUrl);
        const data  = await response.json();

        if (data.author === '') {
            authorName.innerText = 'Unknown';
        } else {
            authorName.innerText = data.author;
        }

        // check quoe lenth to determine the styling

        if (data.content.length > 50) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }

        quoteText.innerText = data.content;

        hideLoading();


    } catch (error) {
        console.error("Error fetching quote", error)
    }
}

// Tweet
const tweetQuote = () => {
    const quote = quoteText.innerText;
    const author = authorName.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;

    window.open(twitterUrl, '_blank')
}

// event listeners

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click',tweetQuote)


getQuote();