document.addEventListener("DOMContentLoaded", function () {
  function typeWriter(element, text, delay = 50) {
    return new Promise((resolve) => {
      let i = 0;
      function typing() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, delay);
        } else {
          resolve();
        }
      }
      typing();
    });
  }

  const headline = document.getElementById("headline");
  const paragraph1 = document.getElementById("paragraph1");
  const paragraph2 = document.getElementById("paragraph2");

  headline.innerHTML = "";
  paragraph1.innerHTML = "";
  paragraph2.innerHTML = "";

  typeWriter(headline, "Gracias por aceptar ser mi cita este San Valentín", 50)
    .then(() =>
      typeWriter(
        paragraph1,
        "Tu presencia es el regalo más especial que podrían ofrecerme en este día, y estoy inmensamente agradecido de poder compartirlo contigo. Que esta ocasión sea el inicio de muchos momentos hermosos juntos.",
        30
      )
    )
    .then(() =>
      typeWriter(
        paragraph2,
        "Déjate llevar en el florecer por nuestro amor, un jardín que crece y se embellece con cada momento que compartimos.",
        30
      )
    )
    .then(() => {
      setTimeout(() => {
        window.location.href = "flowers.html";
      }, 3);
    });
});
