class Stone 
{
    constructor(x,y)
    {
        var options = 
        {
            'friction': 0.9,
            'restitution': 0.8,
            'density': 12
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 130;
        this.height = 80;
        World.add(world,this.body);
    }

    display()
    {
        var ironpos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (ironpos.x,ironpos.y);
        rotate (angle);
        strokeWeight(5);
        stroke("red");
        fill ("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();

    }
}