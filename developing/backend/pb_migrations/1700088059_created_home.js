/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "miuyn2pyj7m2nic",
    "created": "2023-11-15 22:40:59.937Z",
    "updated": "2023-11-15 22:40:59.937Z",
    "name": "home",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ymye2485",
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
        "id": "cvdn7q8t",
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
        "id": "tpujbc4u",
        "name": "public",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("miuyn2pyj7m2nic");

  return dao.deleteCollection(collection);
})
