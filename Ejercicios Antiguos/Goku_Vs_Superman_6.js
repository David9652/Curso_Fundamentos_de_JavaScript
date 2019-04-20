let gokuHealth = 100;
let supermanHealth = 100;

const minPower = 5; 
const maxPower = 12;

let round = 1;

const bothAreAlive = () => (gokuHealth > 0 && supermanHealth > 0);
const calculateDamage = () => (Math.round((Math.random()*(maxPower-minPower))+minPower));

while(bothAreAlive()){

    console.log(`Round ${round}`);
    const gokuHit = calculateDamage();
    const supermanHit = calculateDamage();

    if(gokuHit>supermanHit){
        console.log(`Goku ataca a Superman con un golpe de ${gokuHit}`);
        supermanHealth -= gokuHit;
        console.log(`Superman queda en ${supermanHealth} de vida`);
    }
    else{
        console.log(`Superman ataca a Goku con un golpe de ${supermanHit}`);
        gokuHealth -= supermanHit;
        console.log(`Goku queda en ${gokuHealth} de vida`);
    }

    round++;
}

if(!bothAreAlive()){
    if(gokuHealth > 0){
        console.log(`Goku ha ganado la pelea. Su vida es de ${gokuHealth}`);
    }
    else{
        console.log(`Superman ha ganado la pelea. Su vida es de ${supermanHealth}`);
    }
}