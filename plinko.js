class Plinko{

	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			}
		//this.x=x;
		//this.y=y;
		//this.r=r;
		this.r=r;
		//this.body=Bodies.circle(x, y, this.r/2, options);
		this.body=Bodies.circle(x, y, this.r/2, options);
		this.image = loadImage("sprites/plinko.png")
		
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x,pos.y);
			//noStroke();
			//fill("white")
			imageMode(CENTER);
			//ellipseMode(RADIUS);
			ellipseMode(CENTER);
			//ellipse(0,0,this.r*2, this.r*2);
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}
