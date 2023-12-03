import {z} from 'zod';

export const provedorSchema = z.object({
    name: z.string({
        required_error: "Nombre del Provedor requerido"
    }),
    email: z.string({
        required_error: 'Email es requerido'
    })
        .email({
            required_error: 'Email invalido'
        }),
    phone: z.number({
        required_error: 'El numero es requerido'
    }),
    direction: z.string ({
        required_error: 'La direccion es requerida'
    })

})