/*showing--------------------------------------*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

/*parallax script*/
let par_0 = document.querySelector(".image-1");
let par_1 = document.querySelector(".image-2");
let par_2 = document.querySelector(".image-3");
let button_cta = document.querySelector(".getintouch");

let balancer = -55;

/* di sini kalian menentukan kecepatan geraknya untuk masing2 element sesuaikan
bindengan nama variable element kalian. misal par_0 akan menggunakan speed_0 */
let speed_0 = 0.3;
let speed_1 = 0.6;
let speed_2 = 0.3;
let speed_3 = 0.1;
/* di sini untuk digunakan untuk scale element */
let minScale = 0.1;
let maxScale = 0.4;

/* ini bagian untuk kalkulasi tidak perlu di edit */
let scaleRange = maxScale - minScale;
let scrollRange = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
  let { scrollY } = window;

  par_0.style.top = speed_0 * scrollY + "px";
  par_1.style.top = speed_1 * scrollY + balancer + "px";
  par_2.style.top = speed_2 * scrollY + "px";

  let opascale = 1 - 1 * Math.min(scrollY / scrollRange, 1);
  button_cta.style.opacity = opascale;

  let scale = maxScale - scaleRange * Math.min(scrollY / scrollRange, 1);

  par_1.style.scale = scale;
});
par_1.style.top = speed_1 * scrollY + balancer + "px";

/*swiper---------------------------------------*/

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
