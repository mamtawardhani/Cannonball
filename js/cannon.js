class Cannon{
    constructor(x, y, width,height, angle){
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.a = angle
    }

    display(){
        fill("grey")
        push()
        
        translate(this.x, this.y)
        rotate(this.a)
        rect(-10,-20,this.w, this.h)
        pop()
        arc(this.x-30, this.y+100, 140, 160, PI, TWO_PI)
    }

}