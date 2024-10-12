import factory from '@adonisjs/lucid/factories'
import Track from '#models/track'
import { AlbumFactory } from './album_factory.js'
import { MediatypeFactory } from './mediatype_factory.js'
import { GenreFactory } from './genre_factory.js'

export const TrackFactory = factory
  .define(Track, async ({ faker }) => {
    return {
      name: faker.music.songName(),
      albumId: (await AlbumFactory.create()).albumId,
      mediaTypeId: (await MediatypeFactory.create()).mediaTypeId,
      genreId: (await GenreFactory.create()).genreId,
    }
  })
  .build()