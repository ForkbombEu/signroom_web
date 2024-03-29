/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Features = "features",
	Folders = "folders",
	Hooks = "hooks",
	Signatures = "signatures",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type FeaturesRecord<TenvVariables = unknown> = {
	name: string
	active?: boolean
	envVariables?: null | TenvVariables
}

export type FoldersRecord = {
	owner: RecordIdString
	name: string
	description?: string
	signatures?: RecordIdString[]
}

export enum HooksEventOptions {
	"insert" = "insert",
	"update" = "update",
	"delete" = "delete",
}

export enum HooksActionTypeOptions {
	"command" = "command",
	"post" = "post",
}
export type HooksRecord = {
	collection: string
	event: HooksEventOptions
	action_type: HooksActionTypeOptions
	action: string
	action_params?: string
	expands?: string
	disabled?: boolean
}

export enum SignaturesTypeOptions {
	"pdf" = "pdf",
	"xml" = "xml",
	"json" = "json",
}
export type SignaturesRecord = {
	title: string
	owner: RecordIdString
	folders?: RecordIdString
	type: SignaturesTypeOptions
}

export type UsersRecord = {
	name?: string
	avatar?: string
	bitcoin_public_key?: string
	ecdh_public_key?: string
	eddsa_public_key?: string
	ethereum_address?: string
	reflow_public_key?: string
}

// Response types include system fields and match responses from the PocketBase API
export type FeaturesResponse<TenvVariables = unknown> = Required<FeaturesRecord<TenvVariables>> & BaseSystemFields
export type FoldersResponse<Texpand = unknown> = Required<FoldersRecord> & BaseSystemFields<Texpand>
export type HooksResponse = Required<HooksRecord> & BaseSystemFields
export type SignaturesResponse<Texpand = unknown> = Required<SignaturesRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	features: FeaturesRecord
	folders: FoldersRecord
	hooks: HooksRecord
	signatures: SignaturesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	features: FeaturesResponse
	folders: FoldersResponse
	hooks: HooksResponse
	signatures: SignaturesResponse
	users: UsersResponse
}