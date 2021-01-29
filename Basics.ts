import userfront from "./class";
import { IEmployee } from "./interface";
console.log("Hello world");
newFunction();
function newFunction() {
    let a: number = 10;
    let b: string = "yaswanth";
    let c: boolean = true;
    let d: null=null;
    let f: any = {
        name: "raj",
        age: "18"
    };
    console.log("Enter all variables :" + a +" " +
      "next :" + b  +" " +
       "next2 :" + c +" " +  
       "next :"+ d  +" " +  
       "next :" + JSON.stringify(f) );
}


//Enum
enum languagesknown { 
    English,Hindi,Telugu,Tamil
};

//Array
let tester=[{"name":"Yaswanth","age":18,"test":56, "language":languagesknown[languagesknown.English] },{"name":"Raj","age":18,"test":56,"language":languagesknown[languagesknown.Telugu] },{"name":"Master","age":18,"test":56,"language":languagesknown[languagesknown.Tamil] }];

for (let index = 0; index < tester.length; index++) {
    let element=tester[index]
    console.log(element)
}
//Parameterized Function

function parameterized(test:any[]){
    test.forEach(elt => {
        console.log(elt);
    });
}
parameterized(tester);
  
 //Rest Function
 function rest(...student:any[]){
     student.forEach(restless =>{
         console.log(restless)
     })
 } 
 rest(1,3,4,5,6)  

 //Default Function
 function Default(info:string="Hello Hii"){
        console.log(info);  
}
Default();

//Anonymous function

let student = function(fname :string,fage:Number){
    return fname +" ..."+fage;
}
console.log(student("BLYN",18));

//Lamda Expression
let studentName=(firstname : string,lastname :string)=>{
    return firstname +"..."+lastname;
}
console.log(studentName("yaswanth","lakshmi"));

//Interface

interface personalprofile{
    personal: string;
    title   :  string;
}
function personalInfo(personalobj:personalprofile){
    console.log(personalobj.personal + "...." + personalobj.title);
}

let input={ personal:"yaswanth",title : "Tester"};
personalInfo(input);




//   classes


let userstext=new userfront("I miss all","All of them");
console.log(userstext.getsomthing());


//Generics
let teacherinfo:Array<IEmployee>=[
    {"name":"Yaswanth","age":18,"test":56, "language":"English" },
    {"name":"Raj","age":18,"test":56,"language":"Telugu" },
    {"name":"Master","age":18,"test":56,"language":"Tamil" }
];
function techmg(tech : Array<IEmployee>){
tech.forEach(element => {
    console.log(element.name + "...." + element.age + "...."+ element.test + "...." + element.language);
});   
}
techmg(teacherinfo);

