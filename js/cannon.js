class Cannon {
    constructor (x,y,width,height,angle) {
        this.x=x;
        this.y=y;
        this.width = width
        this.height = height
        this.angle = angle
    }

    display () {
        fill("#696f6a")
        push()
        translate(this.x,this.y)
        rotate(this.angle)
       
        rect( -17,-20,this.width, this.height)
        pop()

        
        arc(this.x - 30, this.y + 100, 140, 200, PI, TWO_PI);
        noFill()
    }
}