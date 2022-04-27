class CannonBall{
    constructor(x,y){
        var options = {
            restitution:0.9,
            isStatic:true
        }
        this.body = Bodies.circle(x,y,40, options)
        World.add(world, this.body)
        this.image = loadImage("assets/cannonball.png")
    }
    show(){
        var angle = this.body.angle
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(RADIUS)
        image(this.image,0,0, 40,40)
        pop()
    }
}
