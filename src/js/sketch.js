import p5 from "p5"
import { send } from "process"
import Ball from "./classes/Ball"

const sketch = p => {
  let ball

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    ball = new Ball(30, 90, 100, p)
  }

  p.draw = () => {
    p.background(0)
    p.ellipse(p.mouseX, p.mouseY, 20)
    ball.show()

    if (p.keyIsDown(68)) {
      ball.moveX()
    }

    

  }
}

new p5(sketch)
