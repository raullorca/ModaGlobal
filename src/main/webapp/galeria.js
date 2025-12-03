/**
 * Fitxer galeria.js
 * Funció per afegir accions a la galeria d'imatges 
 */

/**
 * Acció al fer clic a la imatge
 * 
 * @param {type} imatge
 * @returns {undefined}
 */
function engrandirImatge(imatge) {
    // Definim una classe css per engrandir la imatge
    const engrandida = 'imatge-activa';
    
    // Comprovem si la imatge ja està engrandida
    if (imatge.classList.contains(engrandida)) {
        // tornem al seu estat original
        imatge.classList.remove(engrandida);
    } else {
        // engrandim la imatge
        imatge.classList.add(engrandida);
    }
}

