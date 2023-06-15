import React from 'react';
import './recommendations.css'


export function recommendations() {


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