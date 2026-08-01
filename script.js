function getRandomImage() {
    const number = Math.floor(Math.random() * 7);
    return `./images/omikuji-${number}.png`;
}

function playOmikuji() {
    const button = document.querySelector("#js-button");
    const result = document.querySelector("#js-result");

    // 連打防止
    button.disabled = true;

     // アニメーション開始
    result.parentElement.classList.add("shake");

    const timer = setInterval(() => {
        result.src = getRandomImage();
    }, 100);

    setTimeout(() => {
        clearInterval(timer);
        result.parentElement.classList.remove("shake");
        button.disabled = false;
    }, 3000);
}

document.querySelector("#js-button").addEventListener("click", playOmikuji);
