class Ball {
  constructor(x,y,size,p) {
    this.xpos =x;
    this.ypos =y;
    this.size= size
    this.p=p
    this.img = p.loadImage("../../assets/computer.png")
  }

  show() {
    this.p.image(this.img, this.xpos,this.ypos, this.size, this.size)
  }

  moveX() {
    this.xpos += 5;
  }

}

export default Ball