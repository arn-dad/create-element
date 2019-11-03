/**
 * Imlementetion of createElement function
 * Description
 *
 * function must recive three arguments
 * 1. element type ( 'div', 'span', 'button' )
 * 2. element properties/attributes ( className, onclick, herf, style ) @NOTE it can be an object to hold key-value pair
 * 3. element child @NOTE appendChild and/or innerHTML can be use
 *
 * @NOTE child can be string or another result of createElement function (Node), or for multiple elements it can be an array
 */

/**
 * Implementation of the render function
 *  Description
 *
 * function must receive two arguments
 * 1. A destination where the created element should be rendered
 * 2. Target element which will insert into DOM
 *
 * @NOTE The destination can be div with some id usually it called root or app
 * @NOTE Target can be DOM element or a function
 */

/**
 * @TODO Create Card in example.html file using createElement function
 * @TODO Create List of Cards using createElement function
 * @TODO Render list of Cards in to DOM
 *
 * happy hacking ;)
 */
import ce from "./lib";
import App from "./App";

ce.render(document.getElementById("root"), App);
