class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.2;

        this.obj = document.createElement("a-cylinder");
        this.obj.setAttribute("position", {x:x, y:15, z:z});

        scene.append(this.obj);
    }
    scale(size){
        this.obj.setAttribute("scale",{x:size,y:size,z:size});
    }
}