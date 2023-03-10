# Milestones


> The "super" method in constructors

The super keyword is a reference to the parent class. In a subclass constructor, you can use super to call the constructor of the parent class, passing in any required arguments.

In the example I gave, super(x, y, color) is calling the constructor of the parent class (Shape) and passing in the x, y, and color arguments. This allows the Rectangle class to inherit the properties and methods of the Shape class.

By calling super.move(dx, dy) in the move method of the Rectangle class, the move method of the parent class is being executed, updating the position of the rectangle. This allows the Rectangle class to inherit and extend the behavior of the Shape class.


> Center a canvas
``` CSS
#canvas {
  display: block;
  margin: 0 auto;
}
```
In this example, the display property is set to block to make the canvas element a block-level element, which takes up the full width of its parent container. The margin property is set to 0 auto, which applies zero margin to the top and bottom of the canvas and automatically calculates the left and right margins so that the canvas is centered horizontally within its parent container.


> Understand setInterval running a function without "deleting" the previous one

It can essentially accumulate the output of the function like a 'waterfall' for example

This is where setTimeOut comes into play 