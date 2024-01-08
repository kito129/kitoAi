/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nynsk2bqj431vq5",
    "created": "2024-01-08 22:00:50.873Z",
    "updated": "2024-01-08 22:00:50.873Z",
    "name": "finance_assets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t5zakktw",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "unx4cvis",
        "name": "value",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "3fsgleo4",
        "name": "public",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "u064menb",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "0thc52ne64gz4li",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_pMgnJBc` ON `finance_assets` (`created`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nynsk2bqj431vq5");

  return dao.deleteCollection(collection);
})
