document.getElementById("auswahl").addEventListener('submit', formularWeiter);

function formularWeiter(event) {
    event.preventDefault();

    let formularInhalt = event.target;
    formularDatenObjekt = new FormData(formularInhalt);
    console.log(formularDatenObjekt);

    if(formularDatenObjekt.get("übergabeWählen") == 1) {
        console.log("Sie übergeben die Spende an der Geschäftsstelle");
        var v_link = "registrierungGeschäftsstelle.html";
        window.open(v_link);
    }
    else if(formularDatenObjekt.get("übergabeWählen")== 2) {
        console.log("Sie wünschen eine Abholung");
        var v_link = "registrierungSammelfahrzeug.html";
        window.open(v_link);
    }
}
