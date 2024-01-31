import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos - Puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML - Elemento HTML para los puntos
 * @param {HTMLElement} divCartasComputadora - Div cartas computadora
 * @param {Array<String>} deck - Deck de cartas actual
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error ('Debe enviar los puntos minimos para la computadora.');
    if (!puntosHTML) throw new Error ('Puntos HTML obligatorios.');
    if (!divCartasComputadora) throw new Error ('Div de cartas obligatorio.');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
