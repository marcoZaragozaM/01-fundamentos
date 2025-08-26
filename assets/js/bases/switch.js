//13. Estructura de control Switch

const dia = 2; // 0: domingo

switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');    
        break;
    case 3:
        console.log('Miércoles');            
        break;
    default:
        console.log('El número no corresponde a un día de la semana')
    
}