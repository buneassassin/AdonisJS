/*
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
import Album from '#models/album'




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
      return response.json({ eltrack/*, Tabla */ })
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
  async createAlbum({ request, response }: HttpContext) {
    // crear un nuevo album vinculado a un artista
    const data = request.only(['title', 'artistId'])
    const abim = await Album.create(data)
    return response.status(201).json(abim)
  }

  /**
   * Handle form submission for the create action
   */
  async createArtist({ request, response }: HttpContext) {

    const data = request.only(['name'])
    const abim = await Artist.create(data)
    return response.status(201).json(abim)
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
  async update({ response, params, request }: HttpContext) {


    const invoiceLine = await Invoiceline.findOrFail(params.id)

    if (!invoiceLine) {
      return response.status(404).json({ message: 'Invoice line not found' })
    }

    invoiceLine.unitPrice = request.input('unitPrice')
    invoiceLine.quantity = request.input('quantity')
    
      
    await invoiceLine.save()

    return response.json(invoiceLine)
  }


  public async destroy({ response, params }: HttpContext) {
    const playlistId = params.id

    try {
      // Obtener y eliminar todos los registros relacionados en playlist_tracks
      const deletedTracks = await Playlisttrack.query()
        .where('playlistId', playlistId)
        .select('*') // Selecciona todos los campos de los registros que se eliminarán

      await Playlisttrack.query().where('playlistId', playlistId).delete()

      // Obtener y eliminar el registro en la tabla playlist
      const deletedPlaylist = await Playlist.query()
        .where('playlistId', playlistId)
        .select('*') // Selecciona todos los campos del registro que se eliminará
      await Playlist.query().where('playlistId', playlistId).delete()

      if (deletedTracks.length === 0 && deletedPlaylist.length === 0) {
        return response.status(404).json({ message: 'No se encontraron registros para eliminar' })
      }

      return response.status(200).json({
        message: 'Playlist y sus tracks relacionados han sido eliminados exitosamente',
        deletedPlaylist,
        deletedTracks,
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error al eliminar la playlist y sus tracks', error })
    }
  }
  // oat_MQ.T2tIQ01fUHJZbmw3bGtDRnZodmxUandRTWJ4ZXJ0cGlrSjVEd3hXajE2NTk0Njk1MzY
}