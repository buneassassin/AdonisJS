import { AlbumFactory } from '#database/factories/album_factory'
import { ArtistFactory } from '#database/factories/artist_factory'/*
import { CustomerFactory } from '#database/factories/customer_factory'
import { EmployeeFactory } from '#database/factories/employee_factory'
import { GenreFactory } from '#database/factories/genre_factory'
import { InvoicelineFactory } from '#database/factories/invoiceline_factory'
import { InvoiceFactory } from '#database/factories/invoice_factory'
import { MediatypeFactory } from '#database/factories/mediatype_factory'
import { PlaylistFactory } from '#database/factories/playlist_factory'
import { PlaylisttrackFactory } from '#database/factories/playlisttrack_factory'
import { TrackFactory } from '#database/factories/track_factory'
import axios from 'axios'
import env from '#start/env';

*/

import Artist from '#models/artist'


import type { HttpContext } from '@adonisjs/core/http'
import Invoiceline from '#models/invoiceline'
import Employee from '#models/employee'

import Track from '#models/track'

import Playlist from '#models/playlist'
import Playlisttrack from '#models/playlisttrack'




export default class MusicaDbsController {


  // preguntarle al dante que es esto:
  /*
    public async stores({ auth }: HttpContext) {
      if (auth.isAuthenticated) {
        const postData = {
           define the data you want to create *//*
}
await auth.user!.related('mascotas').create(postData)
}
}
*/
  public async index({ response }: HttpContext) {
    try {/*
      const host = env.get('HOST')
      const port = env.get('PORT')
      
      // Petición al API de Laravel con el token
      const apiResponse = await axios.get('http://' + host + ':' + port + '/api/multiplicar/1', {
        timeout: 60000, // Tiempo de espera en milisegundos (60 segundos)

        headers: {
          Authorization: 'Bearer 12|70OVMVeZNHC1vCVYmr4xzNol3joBmL9qiVJO4TtW2f70f20b',
        },
      })
      await AlbumFactory.createMany(1)
      await ArtistFactory.createMany(1)
      await CustomerFactory.createMany(1)
      await EmployeeFactory.createMany(1)
      await GenreFactory.createMany(1)
      await InvoiceFactory.createMany(1)
      await InvoicelineFactory.createMany(1)
      await MediatypeFactory.createMany(1)
      await PlaylistFactory.createMany(1)
      await PlaylisttrackFactory.createMany(1)
      await TrackFactory.createMany(1)


      const Tabla = apiResponse.data*/
      // Consulta todas las mascotas y precarga sus relaciones
      const eltrack = await Track.query()
        .preload('album') // Carga la relación con el de albumes
        .preload('genre') // Carga la relación con de generos
        .preload('mediaType') // Carga la relación de tipo de media

      // Devuelve la respuesta en formato JSON
      return response.json({ eltrack/*, Tabla */})
    } catch (error) {
      // Manejo de errores
      return response.status(500).json({
        message: 'Error al obtener los datos de index',
        error: error.message,
      })
    }
  }

  async showAll({ response }: HttpContext) {

    // Obtener todos los artistas con sus álbumes
    const artists = await Artist.query().preload('albums')

    /*
        await AlbumFactory.createMany(1)
        await ArtistFactory.createMany(1)
        await CustomerFactory.createMany(1)
        await EmployeeFactory.createMany(1)
        await GenreFactory.createMany(1)
        await InvoiceFactory.createMany(1)
        await InvoicelineFactory.createMany(1)
        await MediatypeFactory.createMany(1)
        await PlaylistFactory.createMany(1)
        await PlaylisttrackFactory.createMany(1)
        await TrackFactory.createMany(1)*/

    // Devolver la lista de artistas con sus álbumes
    return response.json(artists)

  }


  async showUno({ response, params }: HttpContext) {

    // Obtener tun artista en especifico con sus albumes
    const artistId = parseInt(params.id, 10)
    const artistAndAlbums = await Artist.query().where('artistId', artistId).preload('albums').first()

    if (!artistAndAlbums) {
      return response.status(404).json({ error: 'Artista no encontrado' })
    }

    // Devolver la lista de artistas con sus álbumes
    return response.json(artistAndAlbums)
  }


  /**
   * Display form to create a new record
   */
  async createAlbum({ response }: HttpContext) {
    // crear un nuevo album vinculado a un artista
    try {
      await AlbumFactory.createMany(1)
      return response.status(201).json(
        {
          mensaje: "Se a creado el artista",

        })
    } catch (error) {
      return response.status(404).json({ message: 'no se pudo ejecuar la factory' })
    }
  }

  /**
   * Handle form submission for the create action
   */
  async createArtist({response }: HttpContext) {

    try {
      await ArtistFactory.createMany(1)
      return response.status(201).json(
        {
          mensaje: "Se a creado el artista",

        })
    } catch (error) {
      return response.status(404).json({ message: 'no se pudo ejecuar la factory' })
    }
  }



  async show({ params, response }: HttpContext) {

    // buscar un cliente en especifico

    try {
      /*const apiResponse = await axios.get('http://localhost:8000/api/userS', {
      headers: {
        Authorization: 'Bearer 10|0YMNw5nYNsPqKTxuJ0CcTWdvC6DD5JXAVBzchJIL15c47e7c',
      },
    })

    const Tabla2 = apiResponse.data*/
      const custo = await Employee.query()
        .where('id', params.id)
        .preload('customers')

      return response.json({ custo })
    } catch (error) {
      return response.status(404).json({ message: 'cliente no encontrada' })
    }
  }

  /**
   * Edit individual record
   */
  async update({ response, request }: HttpContext) {
    // modificar un la cantidad y el precio de la tabla InvoiceLine ya creada
    try {
      const data = request.only(['invoiceLineId', 'unitPrice', 'quantity'])
      const invLine = await Invoiceline.findOrFail(data.invoiceLineId)
      invLine.merge(data)
      await invLine.save()
      return response.json({
        mensaje: "se han modificado los datos exitosamente",
        datosCambiados: invLine
      })
    } catch (error) {
      return response.status(404).json({ message: 'voice line no encontrado' })
    }
  }

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */

  // eliminar un artista

  // no usar


  //Medodo para borrar un empleado
  async destroy({ params, response }: HttpContext) {
    try {
      // Buscar el playlist track por su playlistId
      const playlistTrack = await Playlisttrack.query()
        .where('playlistId', params.playlistId)
        .firstOrFail()

      // Buscar la playlist relacionada con ese playlist track
      const playlist = await Playlist.findOrFail(playlistTrack.playlistId)

      // Eliminar la playlist
      await playlist.delete()

      // Eliminar el playlist track
      await playlistTrack.delete()

      return response.status(204).json({ message: 'La playlist y su playlist track han sido eliminados correctamente' })
    } catch (error) {
      return response.status(404).json({ message: 'Error al eliminar la playlist y su playlist track', error: error.message })
    }
  }




  // oat_MQ.T2tIQ01fUHJZbmw3bGtDRnZodmxUandRTWJ4ZXJ0cGlrSjVEd3hXajE2NTk0Njk1MzY
}