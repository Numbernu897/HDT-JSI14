// let m = [1,2,3,4,5,6,"hh","9",80,100]
// const onlyNumbers = m.filter(
//   element => typeof element === 'number'
// );
// console.log(onlyNumbers)
// let mSquared = onlyNumbers.map(x => x ** 2);
// console.log (mSquared)

// let string = "High knowledge, high return"
// let toArray = string.split()
// const lower = toArray.map(element => {
//     return element.toLowerCase();
//   });
 
// console.log(string)
// console.log(lower)

// class people{
//     constructor(_name, _age, _address,){
//         this.name= _name;
//         this.age = _age
//         this._address = _address

//     }
//     get(){
//         gradings = input("Insert points")
//     }
//     set(){
//         subject = input("Insert subject")
        
//     }
// }

// class Students extends people{
//     constructor(_name, _address, _age, _id, _math, _physical, _chemistry){
//     super(_name, _address, _age)
//     this.math= _math
//     this.physical= _physical
//     this.chemistry= _chemistry
//     }
//     get(){
//       let gradings = prompt("Insert points")
//     }
//     set(){
//       let subject = prompt("Insert subject")

//     }
//     gpa(){
//       let gpa = (this.math+this.physical+this.chemistry/3)
//       console.log(gpa)
//     }
// }


// let student = new Students("bob", "his house", 14 , 123123 , 12 , 23 ,34)
// student.gpa()

// class shape{
//     constructor(_height, _length){
//         this.height = _height
//         this.length = _length
//     }

//     arearectangle() {
//         let Arearec = this.height*this.length
//         console.log("Rectangle area : " + Arearec)
//     }
//     areatriangle(){
//         console.log("Rectangle area : " + this.height*this.length/2)
//     }
// }

// let yeah = new shape(20, 40)
// yeah.arearectangle()
// yeah.areatriangle()

// class animal{
//   constructor(_name , _age){
//   }

//   set_value(){
//     this.age = prompt("Age?")
//     this.name = prompt("Name?")
//   }
// }

// class zebra extends animal{
//   super(_name , _age){
//   }

//   talk(){
//     set_value()
//     console.log("hi im" + this.name)
//     console.log("and im" + this.age)
//   }
// }

// class dolphin extends animal{
//   super(_name , _age){
//   }

//   talk(){
//     super.set_value()
//     console.log("hi im " + this.name)
//     console.log("and im " + this.age)
//   }
// }


// let Animal = new animal()
// let Zebra = new zebra()
// let Dolphin = new dolphin()
// Dolphin.talk()

class condidate{
    constructor(_id ,_name, _address, _piority ){
        this.name= _name;
        this.age = _age
        this.address = _address
        this.id = _id

    }
    say(){
        alert(`hey i am ${this.name}`)
    }
}
class a extends condidate{
    constructor(_id ,_name, _address, _piority, _math, _physics , _chem){
    super(_id ,_name, _address, _piority )
    this.math = _math 
    this.physics = _physics
    this.chem = _chem
}
}
class b extends condidate{
  constructor(_id ,_name, _address, _piority, _math, _bio , _chem){
  super(_id ,_name, _address, _piority )
  this.math = _math 
  this.bio = _bio
  this.chem = _chem
}
}
class c extends condidate{
  constructor(_id ,_name, _address, _piority, _lit, _history , _geo){
  super(_id ,_name, _address, _piority )
  this.lit = _lit
  this.history = _history
  this.geo = _geo
}
}



