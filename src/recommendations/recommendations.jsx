import React from 'react';
import './recommendations.css'


export function recommendations() {

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

    // Functionality for peer communication using WebSocket

    function configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        socket.onopen = (event) => {
        //displayMsg('system', 'game', 'connected');
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


    // React Array

    const [ratings, setRatings] = React.useState([]);
    
    React.useEffect(() => {
        fetch('/api/rating')
            .then((response) => response.json())
            .then((rating) => {
                setRatings(rating);
                localStorage.setItem('rating', JSON.stringify(rating));
            })
            .catch(() => {
                const ratingText = localstorage.getItem('rating');
                if (ratingText) {
                    setRatings(JSON.parse(ratingText));
                }
            });
    }, []);

    const ratingRows = [];
    if (ratings.length) {
        for (const [i, rating] of ratings.entries()) {
            ratingRows.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{rating.rating}</td>
                </tr>
            );
        }
    }

        return (
            <main className="container-fluid">
            <div className="absolute" id="rating-event">
                <div>Tim just completed a pool test</div>
            </div>
            <h2 id="poolInput">Our Recommendations:</h2>
            <br />

            <section>
                <H4 id="ph">PH Level</H4>
                <p>Recommended Products:</p>
                <p>Leave a Rating from 1-5:   <input type="number" id="rating" placeholder="Stars" />   <button className="btn btn-secondary" id="rateBtn" onclick="submitRating()">Submit</button></p>
                <p>Users Reviews:</p>
                
            </section>

            <section>
                <h4>Bound Chlorine</h4>
                <p>Recommended Products:</p>
                <p>Other Users Reviews:</p>
            </section>

            <section>
                <h4>Free Chlorine</h4>
                <p>Recommended Products:</p>
                <p>Other Users Reviews:</p>
            </section>

            <section>
                <h4>Alkalinity</h4>
                <p>Recommended Products:</p>
                <p>Other Users Reviews:</p>
            </section>

            <div id="quote" className="quote-box bg-secondary text-light"></div>
        </main>
        )
}