import { getDailyImage } from './Nasa/api'
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
