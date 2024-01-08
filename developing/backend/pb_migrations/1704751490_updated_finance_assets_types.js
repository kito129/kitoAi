/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0thc52ne64gz4li")

  collection.indexes = [
    "CREATE INDEX `idx_63wyh0E` ON `finance_assets_types` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0thc52ne64gz4li")

  collection.indexes = []

  return dao.saveCollection(collection)
})
