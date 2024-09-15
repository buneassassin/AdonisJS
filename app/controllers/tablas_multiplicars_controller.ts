import { HttpContext } from '@adonisjs/core/http'

export default class TablasMultiplicarsController {
  public async index({ params, response }: HttpContext) {
    const num1 = parseInt(params.num1) || 0
    const num2 = parseInt(params.num2) || 0
    const fibonacci = params.fibonacci || null

    let Tabla1 = []
    if (num1 !== 0) {
      for (let i = 1; i <= 10; i++) {
        Tabla1.push(num1 * i)
      }
    }


    let CumuloArreys = []
    if (num2 !== 0) {
      for (let a = num1; a <= num2; a++) {
        let temporalArry = []
        for (let i = 1; i <= 10; i++) {
          temporalArry.push(a * i)
        }
        CumuloArreys[a] = temporalArry
      }
    }

    let fcArray = []
    if (fibonacci === "fibonacci") {
      let v = true
      let fibo1 = 1
      let fibo2 = 1
      let nuevoFibo = 1
      let numerosfibonacci = -1

      do {
        numerosfibonacci++
        if (v) {
          nuevoFibo = fibo1 + nuevoFibo
          fibo1 = nuevoFibo
        } else {
          nuevoFibo = fibo2 + nuevoFibo
          fibo2 = nuevoFibo
        }

        if (num1 <= nuevoFibo) {
          let fArray = []
          for (let i = 1; i <= 10; i++) {
            fArray.push(nuevoFibo * i)
          }
          fcArray.push(fArray)
        }

        v = !v
      } while (nuevoFibo < num2)
    }

    if (fibonacci === "fibonacci" && num2 !== 0 && num1 !== 0) {
      return response.status(200).json({
        msg: `Las tablas de la secuencia de Fibonacci entre el número ${num1} y el número ${num2} son:`,
        fibo: fcArray
      })
    }

    if (num2 !== 0 && num1 !== 0) {
      return response.status(200).json({
        msg: `Las tablas de multiplicar entre el número ${num1} y el número ${num2} son:`,
        'Lista de las tablas dentro del rango': CumuloArreys
      })
    }

    if (num1 !== 0) {
      return response.status(200).json({
        msg: `La tabla de multiplicar del número ${num1} es:`,
        num: Tabla1
      })
    }

    if (num1 === 0 && num2 === 0 && fibonacci === null) {
      return response.status(200).json({
        msg: 'Escriba algún parámetro en la URI para que comience a funcionar'
      })
    }

    return response.status(500).json({
      msg: 'Ha habido un error al momento de ingresar los datos'
    })
  }
}
