function switchPage(pageName) {
    let firstPageParcoured = document.querySelector('section');

    while(firstPageParcoured.nodeName !== "FOOTER" && firstPageParcoured != null) {
        if (firstPageParcoured.id === pageName+"_page") {
            firstPageParcoured.hidden = false;
        } else {
            firstPageParcoured.hidden = true;
        }

        firstPageParcoured = firstPageParcoured.nextElementSibling;
    }
}