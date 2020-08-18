class paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
 
        this.body=Bodies.circle(200,490,50,options);
        this.r=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        noStroke();
        fill(238,130,238);
        ellipse(pos.x,pos.y,this.r);
    }
}