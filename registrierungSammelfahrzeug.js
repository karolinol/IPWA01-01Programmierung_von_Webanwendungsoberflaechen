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

     /*for (let key of formularDatenObjekt.keys()) {
        console.log(key, formularDatenObjekt.get(key));
    }*/

    

}

const forms = document.querySelectorAll('.needs-validation');
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        if(formularDatenObjekt.get("checkTShirt") == null && formularDatenObjekt.get("checkPullover") == null && formularDatenObjekt.get("checkJacke") == null && formularDatenObjekt.get("checkHose") == null && formularDatenObjekt.get("checkKleid") == null) {
            //console.log("nichts ausgewählt");
        }
      else if (!form.checkValidity()) {
        //console.log(formularDatenObjekt.get("checkTShirt") == null);
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        var link = "vielenDank.html";
        window.open(link);
      }
        form.classList.add('was-validated');
    }, false)
  })





