AOS.init({
  duration: 800, 
  once:true  
});
new SimpleLightbox({elements: "galerie-container a"})

new SimpleLightbox({elements: ".orar-imagini"})
emailjs.init("ywqSQ66S5ikMqA2GH");

function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function send() {

  if (document.getElementById("formular").checkValidity() == false) {
      document.getElementById("formular").reportValidity();
      return;
  }

  var date = {
      nume: document.getElementById("nume").value,
      email: document.getElementById("email").value,
      mesaj: document.getElementById("mesaj").value
  };

  emailjs.send("service_y3pcn0t", "template_kul06lj", date)
      .then(function (raspuns) {
          alert("Mesajul a fost transmis.")
          document.getElementById("formular").reset();
      }, function (error) {
          alert("Eroare la transmitere. Contactati programatorul.")
      })

}
