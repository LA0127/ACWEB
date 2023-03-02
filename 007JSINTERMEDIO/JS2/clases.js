class FiguraG {
    constructor(){

    }
    //Metodos
    area(){
        
    }

    perimetro(){
        console.log("Este met calcula el perimetro");
    }
}

class ClassName extends FiguraG {
    constructor(base, altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }
    calcularArea(){
        return this._base * this._altura
    }

    calcularPerimetro(){
        return this._base * this._altura
    }

    set altura(altura){
        this._altura = altura;

        this._actualizarArea=true;
        this._actualizarPerimetro=true;
        
    }
    set base(base){
        this._base = base;

        this._actualizarArea=true;
        this._actualizarPerimetro=true;
        
    }
    get area(){
        if (this._actualizarArea || this._area) {
            this._area = this.calcularArea();
        }
        return this._area;
    }
    get perimetro(){
        if (this._actualizarPerimetro || this._perimetro) {
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }
}

const ObjRectangulo = new Rectangulo(2, 5);

console.log(ObjRectangulo.area);