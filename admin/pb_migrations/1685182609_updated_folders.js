migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ck6kt6ys",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
