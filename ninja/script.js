class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log(`El nombre del ninja es ${this.nombre}`);
    }
    showStats() {
        console.log(`El nombre del ninja es ${this.nombre}, su fuerza es de ${this.fuerza}, su velocidad es de ${this.velocidad} y su salud es de ${this.salud}`);
    }
    drinkSake() {
        console.log(`El ninja ${this.nombre} ha tomado sake`);
        this.salud += 10;
    }
}

const ninja = new Ninja("brihan", 500);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();