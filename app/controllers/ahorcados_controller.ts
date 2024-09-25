import type { HttpContext } from '@adonisjs/core/http'

export default class AhorcadosController {
    public async handleCookies(ctx: HttpContext) {
        const { request, response } = ctx
    
        let palabra = request.cookie('palabra') as string | undefined
    
   
        if (!palabra) {
          response.cookie('palabra', '', { httpOnly: true })
          response.cookie('intentos', '6', { httpOnly: true }) 
          response.cookie('correcto', JSON.stringify([]), { httpOnly: true }) 
        }
      }
    
      public async update(ctx: HttpContext) {
        const { params, request, response } = ctx
        const p = params.p
    
        await this.handleCookies(ctx)
    
        let palabra = request.cookie('palabra') as string | undefined
        let intentos = parseInt(request.cookie('intentos') || '0')
        let correcto = JSON.parse(request.cookie('correcto') || '[]') as string[] 
    
        if (!palabra) {
          return response.status(400).json({
            msg: 'Para jugar al ahorcado primero debe crear una palabra',
            letra: p,
            palabra: palabra,
            arrayPalabra: correcto,
            intentos: intentos,
          })
        }
    
        if (p && p.length === 1) {
          let desglosada = palabra.split('')
          let c = true
    
          if (desglosada.includes(p)) {
            correcto.push(p)
            c = false
          }

          response.cookie('correcto', JSON.stringify(correcto), { httpOnly: true })
    
          if (c) {
            intentos--
          }
    
          response.cookie('intentos', intentos.toString(), { httpOnly: true })
    
          if (intentos === 0) {
            response.clearCookie('palabra')
            response.clearCookie('intentos')
            response.clearCookie('correcto')
            return response.json({ msg: 'Se han acabado los intentos... se ha muerto' })
          }
    
          if (correcto.length === desglosada.length) {
            response.clearCookie('palabra')
            response.clearCookie('intentos')
            response.clearCookie('correcto')
            return response.status(201).json({
              msg: `Muy buena, ganaste, la palabra fue ${palabra}. Ahora ingrese otra palabra`,
              letra: p,
              palabra: palabra,
              arrayPalabra: correcto,
              intentos: intentos,
            })
          }
    
          let estado = desglosada.map((letra) => (correcto.includes(letra) ? letra : '_')).join(' ')
          if (correcto.includes(p)) {
            return response.status(201).json({
              msg: 'Has descubierto las siguientes letras de la palabra oculta',
              estado: estado,
              palabra: palabra,
              arrayPalabra: correcto,
              intentos: intentos
            })
          }
    
          return response.status(400).json({
            msg: 'Esa letra ya la ha ingresado, intente ingresar otra',
            estado: estado,
            letra: p,
            palabra: palabra,
            letrasUsuario: correcto,
            intentos: intentos,
          })
        } else {
          return response.status(400).json({
            msg: 'No ha ingresado una letra válida o la longitud es mayor a 1 caracter',
            indicacion: `Aún le quedan ${intentos} intentos`,
            letra: p,
            palabra: palabra,
            arrayPalabra: correcto,
            intentos: intentos,
          })
        }
      }
    
      public async show(ctx: HttpContext) {
        const { params, response } = ctx
        const p = params.p
    
        if (!p) {
          return response.status(400).json({ msg: 'Por favor adjunte la palabra en la URI.' })
        }

        response.cookie('palabra', p, { httpOnly: true })
        response.cookie('intentos', '6', { httpOnly: true }) 
        response.cookie('correcto', JSON.stringify([]), { httpOnly: true }) 
    
        return response.status(201).json({
          msg: `Se ha creado una palabra, ahora es: ${p}`,
          indicacion: 'Ahora tienes que ir a la siguiente URI para comenzar el juego, tienes 6 intentos',
          palabra: p,
          intentos: 6,
        })
      }
    
      public async destroy(ctx: HttpContext) {
        const { response } = ctx
        response.clearCookie('palabra')
        response.clearCookie('intentos')
        response.clearCookie('correcto')
        return response.json({ msg: 'Cookies eliminadas correctamente' })
      }
}