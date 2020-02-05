let user={
    firstName:undefined,
    lastName:undefined,

    ondisplay:function()
    {
        console.log(`${this.firstName} ${this.lastName}` );
    }
}
user.firstName="Madhuri";
user.lastName="Patil";
user.ondisplay();

function objectDemo() 
{
  let firstName="Ranjit";
  let lastName="patil";
   
  let demObj={
      fName:firstName,
      lName:lastName
  };
  return demObj;
}

let obj1=objectDemo(); //return  demoobj
console.log(obj1.fName);
console.log(obj1.lName);

let _name=undefined;
let obj2={

    get name(){
       return _name;
    },
    set name(value){
          _name=value; 
    }
}
obj2.name="Pratik";  //set
console.log(obj2.name); //get