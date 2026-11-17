class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.2;

        this.obj = document.createElement("a-entity");
        let base = document.createElement("a-cylinder");
        base.setAttribute("position", {x:x, y:y, z:z});
        base.setAttribute("height", "4");
        this.obj.append(base)
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
    scale(size){
        this.obj.setAttribute("scale",{x:size,y:size,z:size});
        scene.append(this.obj);
    }
    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    }
}