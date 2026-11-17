class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.2;

        let base = document.createElement("a-cylinder");
        base.obj.setAttribute("position", {x:x, y:15, z:z});
        base.obj.setAttribute("height", "4");
        this.obj.append(base)

        scene.append(this.obj);
    }
    scale(size){
        this.obj.setAttribute("scale",{x:size,y:size,z:size});
        scene.append(this.obj);
    }
}