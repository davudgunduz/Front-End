class Pizza{
    crust = "original";
    #souce = "traditional";
    constructor(pizzasize)
    {
        this.size = pizzasize;
    }
    getcrust()
    {
        return this.crust;
    }
    setcrust(pizzacrust)
    {
        this.crust = pizzacrust;
    }
}