/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k1o1bflxfwey0yp",
    "created": "2024-01-08 22:02:04.749Z",
    "updated": "2024-01-08 22:02:04.749Z",
    "name": "finance_assets_currency",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mbsn4rbr",
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
        "id": "etuwexxi",
        "name": "toUSD",
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
        "id": "drhsdmjh",
        "name": "toEUR",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("k1o1bflxfwey0yp");

  return dao.deleteCollection(collection);
})
