function switchPage(pageName) {
    let firstPageParcoured = document.querySelector('section');

    while(firstPageParcoured != null && firstPageParcoured.nodeName !== "FOOTER") {
        if (firstPageParcoured.id === pageName+"_page") {
            firstPageParcoured.hidden = false;
            document.getElementById(firstPageParcoured.id+"-btn").setAttribute("class", "selected");
        } else {
            document.getElementById(firstPageParcoured.id+"-btn").removeAttribute("class");
            firstPageParcoured.hidden = true;
        }

        firstPageParcoured = firstPageParcoured.nextElementSibling;
    }
}

function switchProjectCategory(buttonElem) {
    let btnIsAlreadySelected = false;
    if(buttonElem.className.includes("selected")) {
        btnIsAlreadySelected = true;
    }

    if (btnIsAlreadySelected) {
        buttonElem.className = buttonElem.className.substring(0, buttonElem.className.indexOf("selected")) 
            + buttonElem.className.substring(buttonElem.className.indexOf("selected")+9);
    } else {
        // on efface le bouton précédemment sélectionné
        document.querySelectorAll('#projects-list li button').forEach((elem) => {
            if (elem.className.includes("selected")) {
                elem.className = elem.className.substring(0, elem.className.indexOf("selected")) 
                    + elem.className.substring(elem.className.indexOf("selected")+9);
            }
        })

        // on sélectionne le bouton
        buttonElem.className = buttonElem.className + " selected";
    }
}