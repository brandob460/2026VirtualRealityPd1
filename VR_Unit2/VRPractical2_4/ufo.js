class UFO{
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

    fall(){
        this.y -= this.dy;
        this.obj.setAttribute("position",{x:this, y:this, z:this});
        if(this.y < 0){
            this.y = rnd(10, 20);
        }
        
    }
}