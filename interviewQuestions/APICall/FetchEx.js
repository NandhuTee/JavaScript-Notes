// Fetch API example
fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    

    /*fetch('https://data.fixer.io/api/latest')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));*/