export interface ServerResponse{
	"code": number
	"message":string
	"data": {
		"code?": string
		"message?": string
	}
}

export interface ListAuthMethods {
	"usernamePassword": boolean
	"emailPassword": boolean
	"authProviders": [{
		"name": string
		"state": string
		"codeVerifier": string
		"codeChallenge": string
		"codeChallengeMethod": string
		"authUrl": string
	}]
}

export interface Pagination<T>{
	page: number
	perPage: number
	totalPages: number
	totalItems: number
	items: Array<T>
}



