export interface UserResponse {
	"token": string
	"record": {
		"id": string
		"collectionId": string
		"collectionName": string
		"username": string
		"verified": boolean
		"emailVisibility": boolean
		"email": string
		"created": string
		"updated": string
		"name": string
		"avatar": string
	}
}

export interface LoginData{
	identity: string
	password: string
}
