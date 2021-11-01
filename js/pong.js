export default class Pong {
  constructor(pClase, pEscenario, pNum, pT1, pT2) {
    this.className = pClase;
    this.escenario = pEscenario;
    this.t1 = pT1;
    this.t2 = pT2;
    this.velocity = 60;
    this.positionY = 0;

    //crear el elemento
    this.div = document.createElement('div'); //<div></div>
    this.div.classList.add(this.className); //<div class="pong"></div>
    this.div.id = 'pong' + pNum; //<div class="pong" id="pong1"></div>
    this.escenario.appendChild(this.div);
    this.movePong();
  }

  movePong() {
    const self = this;
    document.addEventListener('keydown', (event) => {
      if (self.t1 === event.keyCode && self.positionY > 0) {
        //se mueve para arriba
        self.positionY -= self.velocity; //a la posicion le resto la velocidad
      } else if (self.t2 === event.keyCode && self.positionY < 480) {
        //se mueve para abajo
        self.positionY += self.velocity; //a la posicion le sumo la velocidad
      }
      self.div.style.top = self.positionY + 'px';
    });
  }
}
