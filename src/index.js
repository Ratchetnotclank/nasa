const nasaKey = process.env.NASA_KEY

// Get daily image
updateDailyimage();
async function updateDailyimage() {
    const imageElement = document.getElementById('dailyImage');
    const imageTitleElement = document.getElementById('dailyImageTitle')

    const { url, title } = await getDailyImage()

    imageElement.src = url;
    imageElement.alt = title;
    imageTitleElement.textContent = title;
}
async function getDailyImage() {
    const dailyImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

    const response = await fetch(dailyImageUrl);
    const jsonResponse = await response.json();

    return {
        url: jsonResponse.url,
        title: jsonResponse.title
    }

}
