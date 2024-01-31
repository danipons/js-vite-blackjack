/**
 * Se recibe por parametro una carta, y se devuelve el valor de la misma de forma numerica
 * @param {String} carta - Carta del mazo, 
 * @returns Number
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}