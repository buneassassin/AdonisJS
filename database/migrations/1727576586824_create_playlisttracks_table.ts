import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'playlist_tracks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      //no se modifica nada
      table.bigInteger('playlist_id').unsigned().references('playlist_id').inTable('playlists')
      table.bigInteger('track_id').unsigned().references('track_id').inTable('tracks')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}