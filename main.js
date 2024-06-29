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

    // rebind by default the open project category
    const firstProjectCategory = document.querySelector('#projects-list :first-child button');
    switchProjectCategory(firstProjectCategory, true);
}

function switchProjectCategory(buttonElem, forceOpen = false) {
    let btnIsAlreadySelected = false;
    if(buttonElem.className.includes("selected")) {
        btnIsAlreadySelected = true;
    }

    if (btnIsAlreadySelected) {
        if (!forceOpen) {
            buttonElem.className = buttonElem.className.substring(0, buttonElem.className.indexOf("selected")) 
                + buttonElem.className.substring(buttonElem.className.indexOf("selected")+9);
        }
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

/*
function definedSize() {
    const boxsize = window.innerHeight - document.querySelector('header').clientHeight;
    const minsize = document.querySelector('#page').clientHeight;

    if (minsize > window.innerHeight) {
        document.querySelector('#corps').style.height = minsize + "px";
    } else {
        document.querySelector('#corps').style.height = boxsize + "px";
    }
}

window.onresize = definedSize;
definedSize();*/

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navBurger = document.getElementById('navbar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navBurger.classList.toggle('open');
    });
});