class Iron 
{
    constructor(x,y)
    {
        var options = 
        {
            'friction': 3,
            'restitution': 0.8,
            'density': 30
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 150;
        this.height = 150;
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
        stroke("black");
        fill ("grey");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();

    }
}