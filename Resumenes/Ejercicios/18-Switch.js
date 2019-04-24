var horoscopos = {
    aries: "Actúe con cuidado y manténgase alerta, ya que deberá estar prevenido frente a su pasado durante la jornada. Alguien aparecerá y podrá desorientarlo.",
    tauro: "Sepa que su inconsciente podría llegar a jugarle una mala pasada. Tenga cuidado con las palabras que elige para expresar lo que siente, ya que podría salir lastimado.",
    geminis: "En este día, sus poderes perceptivos estarán muy afinados. Aproveche y utilícelos para ayudar a alguien que atraviesa un mal momento.",
    cancer: "Cuando se relacione, trate de no mostrarse soberbio y altanero con su entorno. Renuncie a sus aires de grandeza porque estaría revelando su inseguridad.",
    leo: "Esté atento, ya que podrá recibir en este día diferentes criticas en torno a sus reacciones emocionales. Debería escucharlas y así podrá mejorar en las relaciones.",
    virgo: "Respete todos los deseos en cada momento y circunstancia que vive. Sepa que, hacer siempre lo que los demás esperan de usted, podría llegar a agotarlo.",
    libra: "Durante esta jornada, su vida social tomará otro rumbo ya que contará con la presencia de nuevos compromisos. Aproveche ya que su entusiasmo se potenciará.",
    escorpion: "Durante la mañana evite tomar cualquier decisión importante, ya que podría arrepentirse más adelante y sepa que no tendrá retorno. Actúe con cuidado.",
    sagitario: "Sepa que la lucidez mental le permitirá encontrar las soluciones. Tendrá que moverse de un lado a otro para resolver esos temas difíciles e insólitos.",
    capricornio: "Será un buen momento para el inicio de sus proyectos. Tener la Luna en su signo, lo beneficiará en las decisiones que deba tomar durante esta jornada.",
    acuario: "Entienda que ya es hora para tomar esa determinación sin demorarse más tiempo. Sepa que no será conveniente que deje para mañana lo que desea hacer hoy.",
    piscis: "Intente ser más responsable con sus decisiones y no acuse a los demás de sus propios errores. Comience a trabajar para solucionarlos y no recaer en ellos."
}

const horoscopo = (signo) => {
    switch(signo.toLowerCase()){
        case 'aries':
            console.log(horoscopos.aries);
            break;
        case 'tauro':
            console.log(horoscopos.tauro);
            break;
        case 'geminis':
        case 'géminis':
            console.log(horoscopos.geminis);
            break;
        case 'cancer':
        case 'cáncer':
            console.log(horoscopos.cancer);
            break;
        case 'leo':
            console.log(horoscopos.leo);
            break;
        case 'virgo':
            console.log(horoscopos.virgo);
            break;
        case 'libra':
            console.log(horoscopos.libra);
            break;
        case 'escorpion':
        case 'escorpión':
            console.log(horoscopos.escorpion);
            break;
        case 'sagitario':
            console.log(horoscopos.sagitario);
            break;
        case 'capricornio':
            console.log(horoscopos.capricornio);
            break;
        case 'acuario':
            console.log(horoscopos.acuario);
            break;
        case 'piscis':
            console.log(horoscopos.piscis);
            break;
        default:
            console.log('Ese signo no existe');
            horoscopo(prompt("Cuál es tu signo?"))
            break;
    }
}

var signo = horoscopo(prompt("Cuál es tu signo?"))