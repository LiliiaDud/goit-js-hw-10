
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const state = event.target.elements.state.value;
    const delay = event.target.elements.delay.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (state === "fulfilled") {
            resolve(delay);
        } else {
            reject(delay);
        }
        }, delay);
    });

     // Обробляємо результат
  promise
    .then((delay) => {
      iziToast.success({
        title: "✅ OK",
        message: `Fulfilled promise in ${delay}ms`,
        position: "topRight",
        backgroundColor: "#59a10d",
        titleColor: "#fff",
        messageColor: "#fff",
        icon: null
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "❌ Error",
        message: `Rejected promise in ${delay}ms`,
        position: "topRight",
        backgroundColor: "#e69e9eff",
        titleColor: "#fff",
        messageColor: "#fff",
        icon: null
    });
    });
});