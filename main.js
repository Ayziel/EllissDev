let mvTitle = document.querySelectorAll(".mv__title");

mvTitle.forEach(function(mvTitle) {
  mvTitle.addEventListener('mouseover', function() {
    mvTitle.classList.add('glitch');
    console.log("Hovered");
  });
  mvTitle.addEventListener('mouseout', function() {
    mvTitle.classList.remove('glitch');
    console.log("Hovered");
  });
})

let blob = document.querySelector(".blob")

document.body.onpointermove = event => {
  const {clientX, clientY } = event;

  blob.animate ({
    left: `${clientX}px`,
    top: `${clientY}px`,
    opacity: "50%",
    filter: "blur(50px)",
  }, {duration: 3000, fill: "forwards"});
}

let contact = document.querySelector("#contact");

contact.addEventListener("click", function() {
  window.scrollTo(0, document.body.scrollHeight)
  });
