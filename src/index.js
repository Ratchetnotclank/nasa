const nasaKey = process.env.NASA_KEY

// Get daily image

myFunction();
async function myFunction() {
    const dailyImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

    const imageElement = document.getElementById('dailyImage');
    const imageTitleElement = document.getElementById('dailyImageTitle')


    const response = await fetch(dailyImageUrl);
    const jsonResponse = await response.json();
    const imageUrl = jsonResponse.url;
    const imageTitle = jsonResponse.title;
    imageElement.src = imageUrl;
    imageElement.alt = imageTitle;
    imageTitleElement.textContent = imageTitle;
}