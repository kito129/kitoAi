/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nynsk2bqj431vq5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t9x03pjg",
    "name": "currency",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k1o1bflxfwey0yp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nynsk2bqj431vq5")

  // remove
  collection.schema.removeField("t9x03pjg")

  return dao.saveCollection(collection)
})
