import type { HttpContext } from '@adonisjs/core/http'


class name {
  protected palabrai: string[] = ['Hexakosioihexekontahexafobia', 'Vivienda', 'Santo', 'Padres', 'Mano', 'Feo'];
  obtenerNumeroAleatori(): string {
    const alea = Math.floor(Math.random() * this.palabrai.length);
    return this.palabrai[alea];
  }
}

export default class AhorcadosController {

  public async update({ params, response }: HttpContext) {
    const palabrita = params.p ? params.p : '0';
    const oportunidad = parseInt(params.intentos) ? parseInt(params.intentos) : 6
    const cantidadAdivina: number = parseInt(params.palabra) ? parseInt(params.palabra) : 0

    const array: string[] = ['Hexakosioihexekontahexafobia', 'Vivienda', 'Santo', 'Padres', 'Mano', 'Feo'];
    const palabraFiltrada = array.filter(elemento => elemento.length === cantidadAdivina);

    const palabra = palabraFiltrada[0];
    let p = palabrita.split('');



    let intentos = oportunidad;
    let desglosada = palabra.split(''); // Esto ahora funcionará
    let c = true;
    const coincidencias = p.filter((letra: string) => palabra.includes(letra));



    if (coincidencias.length > 0) {
      c = false;
    }


    if (c) {
      intentos--;
    }

    if (intentos === 0) {
      return response.json({ msg: 'Se han acabado los intentos... se ha muerto, escoja otra palabra' })
    }
    let w = 0;
    p.forEach((letra: string) => {
      if (desglosada.includes(letra)) {
        w++;
      }
    });
    if (w === desglosada.length) {
      return response.status(201).json({
        msg: `Muy buena, ganaste, haz descubierto la palabra. Ahora ingrese una nueva`,
        letra: p,
        palabra: palabra,
        arrayPalabra: desglosada,
        intentos: intentos,
      })
    }



    let estado = desglosada.map((letras) => {
      let arrayLetras = letras.split('');
      return arrayLetras.every((letra: string) => coincidencias.includes(letra)) ? arrayLetras.join('') : '_';
    }).join(' ');


    if (coincidencias.length === palabrita.length) {
      return response.status(201).json({
        msg: 'Has descubierto las siguientes letras de la palabra oculta',
        estado: estado,
        intentos: intentos
      })
    }

    return response.status(400).json({
      msg: 'La letra no formaba parte de la palabra, -1 intento',
      indicacion: `Aún le quedan ${intentos-1} intentos`,
      indicacion2: 'ingrese el valor de los intentos actuale en la uri, y borre la letra incorrecta de la uri',
      letra: p,
      intentos: intentos-1,
      
    })

  }

  public async show({ response }: HttpContext) {
    const pala = new name();
    const palabra = pala.obtenerNumeroAleatori();


    return response.status(201).json({
      msg: `ahora tiene que ingresar la longitud de las palabras por metodo Post`,
      indicacion: 'Ahora tienes que ir a la siguiente URI para comenzar el juego, tienes 6 intentos',
      instrucciones: 'para jugar correctamente tiene que poner los siguientes datos en orden despues de la uri 1 cantidad de caracteres, 2 intentos, 3 letra o letras a adivinar ',
      Cantidad_Caracteres_de_la_palabra: palabra.length,
      intentos: 6,
    })
  }

}