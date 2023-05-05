class Pizza {
    
    constructor () {
        
        this.type = pizzatype ;
        this.size = pizzasize;
        this.crust = pizzacrust;
        this.toppings = [];
    }
        bake ()
    {
         console.log("your favorite pizza choice : "+ this.type+ " " + this.size  + " " +  this.crust);
    }
    gettoppings()
    {
        return this.toppings;
    }
    settoppings(toppings)
    {
        this.toppings.push(toppings);
    }
    }
    
    let pizzatype = prompt("please choice your pizza type");
     let pizzasize = prompt("please choice your pizza size");
    let pizzacrust = prompt("please choice your pizza crust");
    const customer1 = new Pizza(pizzatype,pizzasize,pizzacrust);
    customer1.bake();
    customer1.settoppings("mantar");
    customer1.settoppings("biber");
    console.log(customer1.gettoppings());
   