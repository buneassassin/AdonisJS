import Artist from '#models/artist'
import type { HttpContext } from '@adonisjs/core/http'

export default class MusicaDbsController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {

     // Obtener todos los artistas con sus álbumes
     const artists = await Artist.query().preload('albums')

     // Devolver la lista de artistas con sus álbumes
     return response.json(artists)
   }
  

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
 // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}