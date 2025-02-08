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
        "Solo me queda agradecerte por lo feliz que me haces, por los buenos momentos que creas en mi mente y por las sonrisas que me sacas inclusos en momentos adversos (a pesar que tú no lo sabes). Entenderás que esto es relativamente nuevo para mí y no le daba especial importancia a estas fechas pero llegaste tú a mi vida y desde ese entonces vivo cada día con la misma intensidad con el que el viento sopla en el inverno más gélido o como el mar golpeando las costas tras un fuerte oleaje porque es tan fuerte este amor que logro verte en cada hermoso atardecer de verano, en cada nube que decora el cielo. Afortunado me siento que seas mi 14 de febrero.",
        30
      )
    )
    .then(() =>
      typeWriter(
        paragraph2,
        "Simplemente te amo y quiero que sepas que esto sólo crece y por más complicado que sea algún día, mi amor por ti no se desvanece. Ps: te haré creer que me quedé sin datos pero en realidad estoy escribiendo esto en el caro. Te amo mucho.",
        30
      )
    )
    .then(() => {
      setTimeout(() => {
        window.location.href = "flowers.html";
      }, 3000); // Wait for 3 seconds before redirecting
    });
});
