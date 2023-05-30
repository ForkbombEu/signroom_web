migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.indexes = [
    "CREATE INDEX `__pb_users_auth__created_idx` ON `users` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.indexes = [
    "CREATE INDEX `__pb_users_auth__created_idx` ON `users` (`created`)",
    "CREATE UNIQUE INDEX `idx_C7SFIV3` ON `users` (\n  `bitcoin_public_key`,\n  `ecdh_public_key`,\n  `reflow_public_key`,\n  `ethereum_address`,\n  `eddsa_public_key`\n)"
  ]

  return dao.saveCollection(collection)
})
