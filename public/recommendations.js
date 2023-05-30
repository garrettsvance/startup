setInterval (() => {
    const rating = Math.floor(Math.random()*5);
    const updates = document.getElementById('rating-event');
    updates.innerHTML = 
    `<div class="event"><span class="rating-event">Tim</span> rated a product ${rating}</div>` + updates.innerHTML;}, 5000);

    console.log(updates)