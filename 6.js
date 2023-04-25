//Understand the Difference Between import and require
//for an export between modules to be successfull 
//a package.json file is required with the type set to module
// export const capitalizeString = str => str.toUpperCase()

//Use * to Import Everything from a File
const capitalizeString = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
export {capitalizeString};

export const foo = "bar";
export const bar = 'foo';

