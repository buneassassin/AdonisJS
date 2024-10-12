import factory from '@adonisjs/lucid/factories'
import Album from '#models/album'
import { ArtistFactory } from './artist_factory.js'

export const AlbumFactory = factory
  .define(Album, async ({ faker }) => {
    return {
       title: faker.music.album(),
    artistId: (await ArtistFactory.create()).artistId, 
    }
  })
  .build()