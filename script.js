let states = document.querySelector(".stats");
let counters = document.querySelectorAll(".counters");
let skills = document.querySelector(".skills");
let increasedSpans = document.querySelectorAll(".increased-span");
let statesStart = false;


window.onscroll = () => {
    /* =========================== Rise Button ==================== */
    if (window.scrollY >= 1000)
        riseButton.style.opacity = 1;
    else
        riseButton.style.opacity = 0;
    /* =========================== Increasing Number ==================== */
    if (window.scrollY >= (states.offsetTop - 500)) {
        if (!statesStart) {
            counters.forEach((el) => timer(el));
            statesStart = true;
        }
    }
    /* =========================== Increasing Width ==================== */
    if (window.scrollY >= (skills.offsetTop - 300)) {
            increasedSpans.forEach((increasedSpan) => {
                increasedSpan.style.width = increasedSpan.dataset.width;
            })
    } else {
        increasedSpans.forEach((increasedSpan) => {
            increasedSpan.style.width = "0%";
        })
    }
}

/* =========================== Increasing Number ==================== */

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

/* =========================== Width Increasing ==================== */