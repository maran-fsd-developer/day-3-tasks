if (JSON.stringify(obj1={name:"person",age:5}) === JSON.stringify(obj2={age:5,name:"person"})) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}