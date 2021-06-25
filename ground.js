class Ground{

    constructor(){

        var options={
            isStatic:true,
            friction:0.4
        }
      this.body = Bodies.rectangle(500,400,1200,20,options);
      World.add(world, this.body);
    }
    display(){

      fill("silver");
      rect(500,625,1200,20);
    
    }

}