console.clear();

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const progress = document.querySelector(".progress-bar");
const toasts = document.getElementsByClassName("toast");

var interval;

[...toasts].forEach(toast => {
  toast.addEventListener("click", hideToast);
});

function hideToast(e) {
  const target = e.target;

  if (target.tagName.toUpperCase() === "SPAN") {
    target.parentNode.classList.remove("show");
  }
}

function getCurrentTime() {
  const d = new Date();
  let h = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  h = h < 10 ? "0" + h : h;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hour.textContent = h;
  minute.textContent = min;
  second.textContent = sec;


}

function clearClass(className) {
  for (let i = 0; i < toasts.length; i++) {
    toasts[i].classList.remove(className);
  }
}

interval = setInterval(getCurrentTime, 1000);