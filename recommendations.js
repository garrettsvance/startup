let socket;

configureWebSocket();

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

async function submitRating() { 
    const Rating = document.getElementById('rating').value;
    const userName = localStorage.getItem('userName')
    const newRating = {name: userName, rating: Rating};

    broadcastEvent(userName, Rating);
    try {
      const response = await fetch('/api/rating', { 
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newRating),
      }); 

      const ratings = await response.json();
      console.log(newRating);
      localStorage.setItem('ratings', JSON.stringify(ratings));

    } catch {
      console.log('catch block');
    }
}
// setInterval (() => {
//     const mockRating = Math.floor(Math.random()*5);
//     const updates = document.getElementById('rating-event');
//     updates.innerHTML = 
//     `<div class="event"><span class="rating-event">Tim</span> rated a product ${mockRating}</div>` + updates.innerHTML;
// }, 15000);

  // Functionality for peer communication using WebSocket

  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      displayMsg('system', 'game', 'connected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
        displayMsg(localStorage.getItem('userName'), ` just rated a product ${msg.value} stars`);
    };
  }

  function displayMsg(from, msg) {
    let chatText = document.getElementById('rating-event') 
      chatText.innerHTML = 
      `<div class="event"><span> ${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(from, value) {
    const msg = {
      from: from,
      value: value,
    };
    socket.send(JSON.stringify(msg));
  }

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

rateBtn.addEventListener('click', submitRating);

displayQuote();

