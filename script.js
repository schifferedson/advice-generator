const dice = document.querySelector('.dice')
const adviceText = document.querySelector('.container h1')
const textId = document.getElementById('id')

async function getAdvice() {
    const apiUrl = `https://api.adviceslip.com/advice`
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        textId.textContent = `Advice #${data.slip.id}`;
        adviceText.textContent = data.slip.advice;
    } catch (error) {
        console.log(error)
    }
}

getAdvice()

dice.addEventListener('click', getAdvice)
