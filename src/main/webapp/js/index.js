
//Array
const fruits=["Apple","Grapes","Peach","Pineapple"];
let text="";

//getting list and createing <ul><li></li></ul> to showcase in html 
function getList(){

    if(text==""){

        text+="<ul>";
        fruits.forEach((value)=> text+=`<li>${value}</li>`)
        text+="</ul>";
        document.getElementById('demo').innerHTML=text;
    }else{

        text="";
        document.getElementById('demo').innerHTML=text
    }

}


//counter function 
let counter=0;

const count=(function(){
   
    return ()=>{counter+=1; return counter;}    
})();

const count_=(function(){
    return ()=>{counter-=1; return counter;}
})();


// calling counter to show the count
function fn(){
document.getElementById('mycounter').innerHTML=count();
}

function fn_(){
    document.getElementById('mycounter').innerHTML=count_();
    }

// defining Map 

// const veg=new Map();
// veg.set("Potato",20);
// veg.set("Tomato",240);
// veg.set("Onion",60);
// veg.set("Pea",80);

// veg.forEach((value,key)=>{console.log(value+" "+key)})

// for(const x of veg.entries()){
//     console.log(x);
// }

//creating object 

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   const myArray=Object.values(person)
//   console.log(myArray);
//   for(const x in person)
//   console.log(x +":"+person[x]);

//   console.log(JSON.stringify(person));


//Object Accessor 


//   const detail={
//     firstname:"john",
//     lastName:"Doe",
//     language:"en",
//     get lan(){
//         return this.language;
//     },
//     set lan(value){
//         this.language=value;
//     }
//   };

//   detail.lan="US"


//   console.log(detail["firstname"]+" "+detail.lan)