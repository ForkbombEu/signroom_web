migrate((db) => {
  const collection = new Collection({
    "id": "trb79bav1z4vowl",
    "created": "2023-05-27 06:18:35.792Z",
    "updated": "2023-05-27 06:18:35.792Z",
    "name": "folders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vec1lncz",
        "name": "owner",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ck6kt6ys",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cttbwvf0",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl");

  return dao.deleteCollection(collection);
})
