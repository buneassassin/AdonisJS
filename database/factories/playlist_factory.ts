import factory from '@adonisjs/lucid/factories'
import Playlist from '#models/playlist'

export const PlaylistFactory = factory
  .define(Playlist, async ({ faker }) => {
    return {
      name: faker.lorem.word(),
    }
  })
  .build()