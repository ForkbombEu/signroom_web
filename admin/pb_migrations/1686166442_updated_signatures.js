migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5wmmdzrliioltm")

  // update
  collection.schema.addField(new SchemaField({
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
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5wmmdzrliioltm")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
