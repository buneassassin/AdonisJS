import factory from '@adonisjs/lucid/factories'
import Playlisttrack from '#models/playlisttrack'
import { PlaylistFactory } from './playlist_factory.js'
import { TrackFactory } from './track_factory.js'

export const PlaylisttrackFactory = factory
  .define(Playlisttrack, async ({}) => {
    return {
      playlistId: (await PlaylistFactory.create()).playlistId,
      trackId: (await TrackFactory.create()).trackId,
    }
  })
  .build()