class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(d) {
    this.radius = d / 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  set circumference(c) {
    this.radius = c / (2 * Math.PI);
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // this one was in the README but not the tests
  set area(a) {
    this.radius = Math.sqrt(a / Math.PI);
  }

}
