class Car {
    constructor()
    {

    } 
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      return this.name + this.year;
    }
  }

  class Garage
  {
    
  }
  
  //  Name         
  let myCar = new Car("Ford", 2014);
  
  let Ret = myCar.age();
console.log("Gets : ",Ret);
