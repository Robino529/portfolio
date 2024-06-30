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

function imgTitle(elem, show = true) {
    const followerBlock = document.getElementById('follower');
    if (show) {
        const imgLegend = elem.getAttribute('alt');
        followerBlock.textContent = imgLegend;
        followerBlock.style.backgroundColor = "rgb(40, 40, 40)";
    } else {
        followerBlock.textContent = "";
        followerBlock.style.backgroundColor = "transparent";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navBurger = document.getElementById('navbar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navBurger.classList.toggle('open');
    });

    document.addEventListener('mousemove', function(e) {
        const follower = document.getElementById('follower');
        follower.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
    });

    document.querySelectorAll('img').forEach((elem) => {
        elem.addEventListener('mouseenter', function(e) {
            imgTitle(e.target);
        });
        elem.addEventListener('mouseleave', function(e) {
            imgTitle(e.target, false);
        })
    })
});