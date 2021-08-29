class Tower {
    constructor (x,y,width,height) {
        this.width= width
        this.height= height
        var options={
            isStatic: true
        }
        this.image= loadImage("assets/tower.png")
        this.body = Bodies.rectangle(x, y, this.width,this.height, options)
        World.add(world, this.body)
    }

    display () {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        
        imageMode(CENTER)
        image(this.image, 0,0,this.width, this.height)
        pop()
    }

}