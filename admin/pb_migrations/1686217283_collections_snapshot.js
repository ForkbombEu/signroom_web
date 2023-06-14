migrate((db) => {
  const snapshot = [
    {
      "id": "3fhw2mfr9zrgodj",
      "created": "2022-10-03 21:50:44.238Z",
      "updated": "2023-06-01 10:57:18.763Z",
      "name": "hooks",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "j8mewfur",
          "name": "collection",
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
          "id": "4xcxcfuv",
          "name": "event",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "insert",
              "update",
              "delete"
            ]
          }
        },
        {
          "system": false,
          "id": "u3bmgjpb",
          "name": "action_type",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "command",
              "post"
            ]
          }
        },
        {
          "system": false,
          "id": "kayyu1l3",
          "name": "action",
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
          "id": "zkengev8",
          "name": "action_params",
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
          "id": "balsaeka",
          "name": "expands",
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
          "id": "emgxgcok",
          "name": "disabled",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `_3fhw2mfr9zrgodj_created_idx` ON `hooks` (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "z4cc0g76ciqx13v",
      "created": "2023-05-17 16:48:21.255Z",
      "updated": "2023-06-01 10:57:18.768Z",
      "name": "features",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "lj04bczn",
          "name": "name",
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
          "id": "yctafkxl",
          "name": "active",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "yo3lch0p",
          "name": "envVariables",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_T3xOIQy` ON `features` (`name`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "trb79bav1z4vowl",
      "created": "2023-05-27 06:18:35.792Z",
      "updated": "2023-06-07 19:33:38.824Z",
      "name": "folders",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "vec1lncz",
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
        },
        {
          "system": false,
          "id": "ip8tasgt",
          "name": "signatures",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "x5wmmdzrliioltm",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": []
          }
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_4FcBN4k` ON `folders` (`name`)"
      ],
      "listRule": "@collection.folders.owner = @request.auth.id",
      "viewRule": "@collection.folders.owner = @request.auth.id",
      "createRule": "",
      "updateRule": "@collection.folders.owner = @request.auth.id",
      "deleteRule": "@collection.folders.owner = @request.auth.id",
      "options": {}
    },
    {
      "id": "_pb_users_auth_",
      "created": "2023-06-01 10:57:18.760Z",
      "updated": "2023-06-01 10:57:18.776Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
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
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "nf3jan6h",
          "name": "bitcoin_public_key",
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
          "id": "zjvzw9wa",
          "name": "ecdh_public_key",
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
          "id": "yg9yz2sc",
          "name": "eddsa_public_key",
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
          "id": "ouslgk2m",
          "name": "ethereum_address",
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
          "id": "vqu3zutd",
          "name": "reflow_public_key",
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
      "indexes": [
        "CREATE INDEX `__pb_users_auth__created_idx` ON `users` (`created`)"
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": false,
        "allowUsernameAuth": false,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 5,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "x5wmmdzrliioltm",
      "created": "2023-06-02 09:12:16.366Z",
      "updated": "2023-06-07 19:34:02.066Z",
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
            "maxSelect": 1,
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
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
