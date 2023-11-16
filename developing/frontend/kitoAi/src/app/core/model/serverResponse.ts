export interface ServerResponse{
	"code": number
	"message":string
	"data": {
		"identity": {
			"code": string
			"message": string
		}
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

