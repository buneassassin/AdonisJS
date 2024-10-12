import factory from '@adonisjs/lucid/factories'
import Artist from '#models/artist'

export const ArtistFactory = factory
  .define(Artist, async ({ faker }) => {
    return {
      name: faker.music.artist(),
    }
  })
  .build()