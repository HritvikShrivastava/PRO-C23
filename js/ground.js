class Ground {
    constructor (x,y,width,height) {
        this.width = width
        this.height = height
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, this.width,this.height, options)
        World.add(world, this.body)
    }

    display () {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("pink")
        rectMode(CENTER)
        rect( 0,0,this.width, this.height)
        pop()
    }
}