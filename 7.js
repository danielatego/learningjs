import * as y  from "./6.js";
const cap = y.capitalizeString('hi there');
console.log(cap);
console.log(y.foo)
//use export to Reuse a code Block
// Create an Export Fallback with export default
export default function subtract(x,y) {return x-y;}
//import a default export
import subtract from "./6.js";//the difference with other
//imports is absence of curly braces between the imported function
