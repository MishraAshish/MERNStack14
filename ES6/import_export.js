//import and export keywords
// Export and Import keywords are present to use them for given purpose
// a file can have only one export or it can export multiple modules/properties

// a file can have only one default export, mostly/usually that export is of similar name as of file

//exportedmodule.js
export const sessionName = "ES6"; //named export 
export var valueOfPi = 3.1414; //named export : multiple named exports can be done per file

export default user = {name:"Some Name", age : 99}; //default export :only one default is allowed per file

//const.js
export var valueOfPi = 6.2828;
export const a = 2;
export const b  = 9.2828;
export const c = 1.2828;

//importedmodule.js
import { sessionName, valueOfPi } from "./exportedmodule"; //named import 
import user from "./exportedmodule"; //default import 

import user, { sessionName, valueOfPi } from "./exportedmodule"; //named and default import 
import { valueOfPi as newpi} from "./const"; //aliasing// giving different name to imported module

import * as NewConstants from "./const"; // importing all the modules and then we can choose which one to use

let a = NewConstants.a
let b = NewConstants.b
