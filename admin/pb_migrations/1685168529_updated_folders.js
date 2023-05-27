migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  collection.listRule = "@collection.folders.owner = @request.auth.id"
  collection.viewRule = "@collection.folders.owner = @request.auth.id"
  collection.createRule = ""
  collection.updateRule = "@collection.folders.owner = @request.auth.id"
  collection.deleteRule = "@collection.folders.owner = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
