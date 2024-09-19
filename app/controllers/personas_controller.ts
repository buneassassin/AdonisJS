import Persona from '#models/persona'
import { schema, rules } from '@adonisjs/validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class PersonasController {
    public async store({ request, response }: HttpContext) {
        const personaSchema = schema.create({
          nombre: schema.string({}, [rules.maxLength(60)]),
          apellido_paterno: schema.string({}, [rules.maxLength(60)]),
          apellido_materno: schema.string.optional({}, [rules.maxLength(60)])
        })
    
        const data = await request.validate({ schema: personaSchema })
        const persona = await Persona.create(data)
        if (!persona) {
          return response.status(201).json({
            msg: 'no se pudo'
          })
    
        } else {
          return response.status(201).json({
            msg: 'Persona creada correctamente',
            datos: persona
          })
        }
      }
}