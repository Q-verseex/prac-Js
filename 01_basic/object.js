//object literals



const mysym = Symbol("key1");


const jsuser = {
    "fullname" : "Abhishek",
    [mysym] : "mykey1",
    name: "Aman",
    location :"punjab",
    email : "amanbelive@gmail.com",
    isloggingIN : false,
    lastloginDay : ["Monday", "Saturday"],
}

//console.log(jsuser.email)
//console.log(jsuser["email"])
//console.log(jsuser["fullname"])
//console.log(jsuser[mysym])

jsuser.email = "skywell@gmailo.com"
//Object.freeze(jsuser)
jsuser.email = "smallkit@gmail.com"
//console.log(jsuser)


jsuser.greeting = function(){
    console.log(`hello js user ,${this.name}`);

}

console.log(jsuser.greeting())