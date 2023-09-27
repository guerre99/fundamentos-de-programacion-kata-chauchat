function chauchat(cargador) {
    let disparos = 0;
    
    for (let i = 0; i < cargador; i++) {
      if (disparos >= 3) {
        console.log('\n');
        disparos = 0;
      }
  
      const probabilidadBloqueo = Math.random();
      
      if (probabilidadBloqueo < 0.8) {
        console.log('pium!');
      } else {
        console.log('Illo, me he quedao pillá!');
        break; // Se queda bloqueada, no se pueden hacer más disparos.
      }
      
      disparos++;
    }
  }

const cargador = 7;
chauchat(cargador);