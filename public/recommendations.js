setInterval (() => {
    const rating = Math.floor(Math.random()*5);
    const updates = document.getElementById('rating-event');
    updates.innerHTML = 
    `<div class="event"><span class="rating-event">Tim</span> rated a product ${rating}</div>` + updates.innerHTML;
}, 15000);

    //console.log(updates)   

function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
}

async function submitRating(rating) {
    const firstRating = document.getElementById('rating').value;
    const userName = this.getUserName();
    const newRating = {name: userName, rating: firstRating};

    try {
      const reponse = await fetch('/api/rating', { //TODO: set up "rating"
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newRating),
      }); 

      const ratings = await response.json();
      localStorage.setItem('ratings', JSON.stringify(ratings));
    } catch {
      this.updateRatingsLocal(newRating);
    }
}

rateBtn.addEventListener('click', submitRating);

displayQuote();

