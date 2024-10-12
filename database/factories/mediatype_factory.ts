import factory from '@adonisjs/lucid/factories'
import Mediatype from '#models/mediatype'

export const MediatypeFactory = factory
  .define(Mediatype, async ({ faker }) => {
    return {
      name: faker.system.mimeType(),
    }
  })
  .build()