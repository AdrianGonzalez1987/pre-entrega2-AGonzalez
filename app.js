class Pacientes{
    constructor(dni,nombre,apellido,edad)
    {
        this.dni = Number(dni);
        this.nombre = String(nombre);
        this.apellido = String(apellido);
        this.edad = Number(edad);
    }
}

const pacientes = []

pacientes.push(new Pacientes(20639028,"Pedro","Arteaga",32))
pacientes.push(new Pacientes(20639028,"Juan","Izaguirre",82))
pacientes.push(new Pacientes(20639028,"Teodoro","Melussi",52))
pacientes.push(new Pacientes(20639028,"Juan","Oliveira",25))

//2console.log(pacientes)

// let nuevoPaciente = 0

// while (nuevoPaciente < 2) 
// {
//     let pregunta = new Pacientes(prompt("ingrese su DNI"),
//                                 prompt("Ingrese su Nombre"),
//                                 prompt("Ingrese su Apellido"),
//                                 prompt("Ingrese su Edad"))

//     if (id == "", nombre == "", apellido == "", edad =="") 
//     {
//     alert("por favor ingresa los datos correctamente");
//     i= 1;
//     }

//     else 
//     {
//     alert("datos correctos puede continuar")
//     i= 2;
//     }
//     pacientes.push(pregunta)
//     nuevoPaciente++
// }
// console.log(pacientes)

//esto debe estar dentro de un switch

function queHacer(queTegustaria)
{
    switch (queTegustaria) 
    {
        case "1":
        
        let nuevoPaciente = 0
        
        while (nuevoPaciente < 2) 
        {
            let pregunta = new Pacientes(prompt("ingrese su DNI"),
                                        prompt("Ingrese su Nombre"),
                                        prompt("Ingrese su Apellido"),
                                        prompt("Ingrese su Edad"))

        if (id == "", nombre == "", apellido == "", edad =="") 
        {
        alert("por favor ingresa los datos correctamente");
        nuevoPaciente= 1;
        }

        else 
        {
        alert("datos correctos puede continuar")
        nuevoPaciente= 2;
        }
        pacientes.push(pregunta)
        nuevoPaciente++
        }
        return;

        case "2":
        return pacientes.forEach(element => console.log(element));

        case "3":
          pregunta = prompt("indique el nombre del paciente que decea buscar")
        const info = pacientes.find((element) => element.nombre.includes(pregunta))
       
        console.log(info);
        return
        
        case "4":
            const info2 = pacientes.map((element)=>{  //creamos la variable
                return {
                    nombre: element4.edad //buscamos lavariable y decimos que la muestre en mayusculas
                }
            })
            
            console.log(info2)


            break;
    
        default:
            break;
    }
}

let queTegustaria = prompt("Elija una opcion \n 1 Agregar Pacientes \n 2 Ver lista de pacientes \n 3 Buscar paciente por Nombre  \n 4 Buscar pacientes por Edad ")
alert (queHacer(queTegustaria))