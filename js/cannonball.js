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
        push()
        var pos = this.body.position
        imageMode(RADIUS)
        image(this.image,pos.x, pos.y, 40,40)
        pop()
    }
}