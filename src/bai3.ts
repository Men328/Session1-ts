let firstName: string = "trần";
let lastName: string = "mến";


let stringFirstName: string = "";
let stringLastName: string = "";


for (let i: number = 0; i < firstName.length; i++){
    if(i == 0){
        stringFirstName = stringFirstName + firstName[i].toUpperCase()
        stringLastName = stringLastName + lastName[i].toUpperCase()
    } else {
        stringFirstName = stringFirstName + firstName[i]
        if(lastName[i] == undefined) break
        stringLastName = stringLastName + lastName[i]
    }
}

let fullName = stringFirstName + " " +  stringLastName;
console.log(fullName);