document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const pricePerPerson = 15.70;
    const discountThreshold = 10;
    const discountRate = 0.05;
    
    let numberOfPeople = document.getElementById('number-of-people').value;
    numberOfPeople = parseInt(numberOfPeople);
    
    let totalPrice = pricePerPerson * numberOfPeople;
    let finalPricePerPerson = pricePerPerson;
    
    if (numberOfPeople >= discountThreshold) {
        totalPrice *= (1 - discountRate);
        finalPricePerPerson *= (1 - discountRate);
    }
    
    totalPrice = totalPrice.toFixed(2);
    finalPricePerPerson = finalPricePerPerson.toFixed(2);
    
    document.getElementById('result').innerHTML = `Gesamtpreis: €${totalPrice}<br>Preis pro Person: €${finalPricePerPerson}`;
});
