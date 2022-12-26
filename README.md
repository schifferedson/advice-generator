
![](./design/desktop-design.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/advice-generator-app-_P7iyNIRTO)
- Live Site URL: [https://schifferedson.github.io/advice-generator/)

### Built with

- HTML5
- CSS 
- Flexbox
- JavaScript

### What I learned

With this project I was able to put asynchronous codes into practice and even practice a little DOM, in my early career these small projects are very important to fix what I learned and even learn to solve errors.

```js
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

```

## Author

- Frontend Mentor - [@@schifferedson]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/schifferedson)
- Instagram - [@edsonschiffer]([https://www.twitter.com/yourusername](https://www.instagram.com/edsonschiffer/)
