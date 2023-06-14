migrate((db) => {
  const collection = new Collection({
    "id": "x5wmmdzrliioltm",
    "created": "2023-06-02 09:12:16.366Z",
    "updated": "2023-06-02 09:12:16.366Z",
    "name": "signatures",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fr20izq0",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dw2c76k8",
        "name": "owner",
        "type": "relation",
        "required": true,
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
        "id": "sfdraqcp",
        "name": "folders",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "trb79bav1z4vowl",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "2auxmmlx",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pdf",
            "xml",
            "json"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = owner.id",
    "viewRule": "@request.auth.id = owner.id",
    "createRule": "@request.auth.id = owner.id",
    "updateRule": "@request.auth.id = owner.id",
    "deleteRule": "@request.auth.id = owner.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x5wmmdzrliioltm");

  return dao.deleteCollection(collection);
})
