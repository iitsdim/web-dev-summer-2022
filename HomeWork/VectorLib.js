class Vector2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    of(x, y) {
        return new Vector2d(x, y);
    };

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    add(other) {
        return new Vector2d(this.x + other.x, this.y + other.y);
    };

    sub(other) {
        return new Vector2d(this.x - other.x, this.y - other.y);
    };

    div(n) {
        return new Vector2d(this.x / n, this.y / n);
    };

    mult(n) {
        return new Vector2d(this.x * n, this.y * n);
    };

    normalize() {
        return this.div(this.length())
    }

    dot(other){
        return this.x * other.x + this.y * other.y;
    };
}