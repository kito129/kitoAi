export interface FinanceAsset {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string
    name: string
    value: number
    public: true,
    type: string
    currency: string
    expand?: {
        currency: CurrencyType,
        type: AssetType
    }
}


export interface AssetType {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string
    type: string
    belowZero: boolean

}

export interface CurrencyType {
    id: string
    collectionId: string
    collectionName: string
    created: string
    name: string
    toEUR: number
    toUSD: number
    updated: string
}
