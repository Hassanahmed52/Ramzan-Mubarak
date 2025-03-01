/* script.js */
document.getElementById("heartButton").addEventListener("click", function () {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.getElementById("heartContainer").appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
});
