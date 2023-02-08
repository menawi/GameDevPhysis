//  class : define the properties of the shape class, add a render function in it, a move function, and a collision function.

// There are vars "width" and "height" that NOT referenced in the shape class BUT are referenced in its child rectangle class



class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(context) {
    // Override this method in child classes
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  collide(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      this.dx = -this.dx;
    }
    if (this.y < 0 || this.y + this.height > canvasHeight) {
      this.dy = -this.dy;
    }
  }
}

// end shape class


// Rectangle class ; child of Shape class: add the properties of width and height , inherit "super" properties such as position, color and functions

class Rectangle extends Shape {
  constructor(x, y, width, height, color) {
    super(x, y, color);
    this.width = width;
    this.height = height;
    this.dx = 5;
    this.dy = 5;

  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move(dx, dy) {
    super.move(dx, dy);
    this.collide(canvas.width, canvas.height);
  }
}

const redRectangle = new Rectangle(50, 50, 100, 200, "red");

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  rect.move(rect.dx, rect.dy);
  rect.draw(context);
  requestAnimationFrame(animate);
}

animate();


// function animate() {

//   // redRectangle.draw(context)
//   // redRectangle.move()

// }


// const redRect = document.getElementById('redRect')
// const yellowRect = document.getElementById('yellowRect')
// const greenRect = document.getElementById('greenRect')




// Let's draw some shapes !