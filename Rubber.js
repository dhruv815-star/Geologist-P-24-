class Rubber
{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
        var options = {
			'friction' : 5,
			'restitution': 0.3,
			'density': 1
		}
		
		
		this.body=Bodies.circle(x, y, (r-20)/2, options);
		//this.x=x;
		//this.y=y;
		this.r = r;
		World.add(world, this.body);

	}
	display()
	{
			var rubberPos = this.body.position;
            var angle = this.body.angle;
			push();
			translate(rubberPos.x, rubberPos.y);
			rotate (angle);
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
			ellipseMode(CENTER);
            ellipse(0,0,this.r,this.r);
			pop();

	}

}