/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0thc52ne64gz4li",
    "created": "2024-01-08 22:00:36.725Z",
    "updated": "2024-01-08 22:00:36.725Z",
    "name": "finance_assets_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o7oixy81",
        "name": "type",
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
        "id": "lxwyf0ye",
        "name": "belowZero",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ie7eh4dd",
        "name": "lastUpdate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("0thc52ne64gz4li");

  return dao.deleteCollection(collection);
})
