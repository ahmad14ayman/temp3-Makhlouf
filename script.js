let states = document.querySelector(".stats");
let counters = document.querySelectorAll(".counters");
let start = false;
console.log(45)

window.onscroll = () => {
    /* =========================== Rise Button ==================== */
    if (window.scrollY >= 1000)
        riseButton.style.opacity = 1;
    else
        riseButton.style.opacity = 0;
    /* =========================== Increasing Number ==================== */
    if (window.scrollY >= (states.offsetTop - 500)) {
        if (!start) {
            counters.forEach((el) => timer(el));
            start = true;
        }
    }
}

function timer(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal)
            clearInterval(count);
    }, 3000 / goal)
}


/* ================= Rise Button ===================== */

let riseButton = document.querySelector('.rise');
riseButton.onclick = function () {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
    })
}