// o app deve cobrar, inicialmente, 50 centavos por minuto de viagem e mais 70 centavos por cada 
// quilômtro de viagem realizado. Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) 
// fica mais barato, passando a custar apenas 50 centavos por km. Caso a viagem dure mais de 20 min, 
// cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto.


let min = 25;
let km = 11.5;


function solucao(min, km) {
    
    let averageRun = 0;

    if (km > 10) {
        averageRun += ((10*70) + (km -10) * 50);
    } else {
        averageRun += km * 70;
    }

    if (min > 20) {
        averageRun += ((50*20) + (min - 20)*30);
    } else {
        averageRun += min*50;
    }


    console.log(averageRun);
};

solucao(min, km)


