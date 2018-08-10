if(typeof localStorage!='undefined') {
    // Getting the value in the web storage
    var nbvisits = localStorage.getItem('visits');
    // Checking if the counter is present
    if(nbvisits!=null) {
        // If yes, conversion of the saved text to an integer
        nbvisits = parseInt(nbvisits);
    } else {
        nbvisits = 1;
    }
    // Incrementation
    nbvisits++;
    // Storage of the new value in the local Storage
    localStorage.setItem('visits',nbvisits);
    // Display in the HTML page
    document.getElementById('visits').innerHTML = nbvisits;
} else {
    alert("localStorage is not supported");
}