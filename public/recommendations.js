setInterval (() => {
    const mockRating = Math.floor(Math.random()*5);
    const updates = document.getElementById('rating-event');
    updates.innerHTML = 
    `<div class="event"><span class="rating-event">Tim</span> rated a product ${mockRating}</div>` + updates.innerHTML;
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

async function submitRating(rating) { //where are we geting the rating value
    const Rating = document.getElementById('rating').value;
    const userName = localStorage.getItem('userName')
    const newRating = {name: userName, rating: Rating};

    try {
      const response = await fetch('/api/rating', { 
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newRating),
      }); 

      const ratings = await response.json();
      console.log(newRating);
      localStorage.setItem('ratings', JSON.stringify(ratings)); //Do i need to change what i'm calling it in local storage?
    } catch {
      console.log('catch block');
      //this.updateRatingsLocal(newRating);
    }
}

rateBtn.addEventListener('click', submitRating);

displayQuote();

