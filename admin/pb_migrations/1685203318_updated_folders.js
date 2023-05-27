migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_4FcBN4k` ON `folders` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  collection.indexes = []

  return dao.saveCollection(collection)
})
