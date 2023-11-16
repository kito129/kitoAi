/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rax5w96dfxom4j5")

  collection.name = "projects"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rax5w96dfxom4j5")

  collection.name = "projcts"

  return dao.saveCollection(collection)
})
