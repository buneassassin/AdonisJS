import { AlbumFactory } from '#database/factories/album_factory'
import { ArtistFactory } from '#database/factories/artist_factory'
import { CustomerFactory } from '#database/factories/customer_factory'
import { EmployeeFactory } from '#database/factories/employee_factory'
import { GenreFactory } from '#database/factories/genre_factory'
import { InvoiceFactory } from '#database/factories/invoice_factory'
import { InvoicelineFactory } from '#database/factories/invoiceline_factory'
import { MediatypeFactory } from '#database/factories/mediatype_factory'
import { PlaylistFactory } from '#database/factories/playlist_factory'
import { PlaylisttrackFactory } from '#database/factories/playlisttrack_factory'
import { TrackFactory } from '#database/factories/track_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'



export default class extends BaseSeeder {
  async run() {
   // Insertar primero los registros que no dependen de otros
   await ArtistFactory.createMany(10)
   await GenreFactory.createMany(10)
   await MediatypeFactory.createMany(10)

   // Luego insertar registros que dependen de los anteriores
   await AlbumFactory.createMany(10) // Depende de Artist
   await TrackFactory.createMany(10) // Depende de Album, Genre, MediaType

   // Insertar registros que dependen de otros modelos
   await CustomerFactory.createMany(10)
   await EmployeeFactory.createMany(10)
   
   await InvoiceFactory.createMany(10) // Depende de Customer
   await InvoicelineFactory.createMany(10) // Depende de Invoice y Track

   // Finalmente, insertar las playlists y tracks en playlists
   await PlaylistFactory.createMany(10)
   await PlaylisttrackFactory.createMany(10) // Depende de Playlist y Track
  }
}