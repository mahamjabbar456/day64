/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
 *********************************/

let person : {
    name : string,
    age : number,
    job ?: string,
    address : {
        city: string,
        country :string,
    }
} = {
    name : "John",
    age : 18,
    job : "Engineer",
    address : {
        city : "Lahore",
        country : "Pakistan"
    }
}
console.log(person);