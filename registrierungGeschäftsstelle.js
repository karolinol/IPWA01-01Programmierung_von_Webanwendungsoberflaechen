document.getElementById("formular").addEventListener('submit', formularAbsenden);
let formularDatenObjekt;

function formularAbsenden(event) {
    event.preventDefault();

    let formularInhalt = event.target;
    formularDatenObjekt = new FormData(formularInhalt);
    console.log(formularDatenObjekt);
    
    //formularDatenObjekt-Objekt in JSON-Datei konvertieren
    var object = {};
    for(const [key, value] of formularDatenObjekt) {
      object[key] = value;
    }
    var json = JSON.stringify(object);

    sessionStorage.setItem("formularObjekt", json);

}

const forms = document.querySelectorAll('.needs-validation');
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        if(formularDatenObjekt.get("checkTShirt") == null && formularDatenObjekt.get("checkPullover") == null && formularDatenObjekt.get("checkJacke") == null && formularDatenObjekt.get("checkHose") == null && formularDatenObjekt.get("checkKleid") == null) {
            console.log("T-Shirt oder Pullover nicht ausgewählt");
        }
      else if (!form.checkValidity()) {
        console.log(formularDatenObjekt.get("checkTShirt") == null);
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        var link = "vielenDankGeschäftsstelle.html";
        window.open(link);
      }
        form.classList.add('was-validated');
    }, false)
  })