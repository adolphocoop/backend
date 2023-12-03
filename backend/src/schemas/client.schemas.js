import {z} from 'zod';
export const clientSchema = z.object({
    name: z.string({
        required_error: "Nombre del cliente requerido"
    }),
    lastname: z.string({
        required_error: "Apellidos requeridos"
    }),
    phone: z.number({
        required_error: "Telefono debe ser numerico "
    }),
    email: z.string({
        required_error: "Email es requerido"
    }) 
        .email({
            required_error: 'Email invalido'
        }),
    direction: z.string({
        required_error: "Direccion requerida"
    })
       

})