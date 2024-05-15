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