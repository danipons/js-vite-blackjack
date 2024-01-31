/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck - Array del deck actual
 * @returns String - Ultima carta del mazo
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
