//For the given JSON over all for loops(for,for in,for of,forEach)
//for loop
var a = [35,25,67,90];
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}
//-------------------------------------------------------------------------------------
//for in loop
var fruits = ["apple","orange","grapes","mango"];
for(let f in fruits){
    console.log(f,fruits[f]);
}
//-------------------------------------------------------------------------------------
//for of loop
var cars = [{"name":"BMW","color":"red"},{"name":"AUDI","color":"black"}];
for(let c of cars){
    console.log(c);
    console.log(c.name)
}
//-------------------------------------------------------------------------------------
//forEach loop
var std = [{"name":"Guru","M1":"68","M2":"78"},{"name":"vani","M1":"90","M2":"89"}];

std.forEach(function(mark) {
    console.log(mark);
console.log(mark.M1,mark.M2);
})
//-----------------------------------------------------------------------------------------------
//create your own resume data in JSON format
var resume = [{"NAME":"MANIMOZHI",
               "FATHER'S NAME":"ARUMUGAM",
               "MOTHER'S NAME":"ANJAMMAL",
               "QUALIFICATION":"MCA,B.ED",
               "ADDRESS":"ADD",
               "LANGUAGES KNOWN":"TAMIL,ENGLISH",
               "EMAIL":"kjg@gmail",
               "CURRENT":"MERN STUDENT"
            }];
            resume.forEach(function(res){
                console.log(res);
                console.log(res.NAME);
            })