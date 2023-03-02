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
class Rectangulo extends FiguraG {
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
        return this._base * this._altura;
    }

    calcularPerimetro(){
        return 2 * (this._base + this._altura);
    }

    set altura(altura){
        this._altura = altura;
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    set base(base){
        this._base = base;
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    get area(){
        if (this._actualizarArea || this._area == null) {
            this._area = this.calcularArea();
            this._actualizarArea = false;
        }
        return this._area;
    }

    get perimetro(){
        if (this._actualizarPerimetro || this._perimetro == null) {
            this._perimetro = this.calcularPerimetro();
            this._actualizarPerimetro = false;
        }
        return this._perimetro;
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Ingrese la base del rectángulo: ', (base) => {
    readline.question('Ingrese la altura del rectángulo: ', (altura) => {
      const objRectangulo = new Rectangulo(base, altura);
      console.log('Área del rectángulo:', objRectangulo.area);
      console.log('Perímetro del rectángulo:', objRectangulo.perimetro);
      readline.close();
    });
  });
  