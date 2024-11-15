export const assetArray = [
    { 
        id: 1,
        name: "McDonalds",
        type: "stock",
        price: 150,
        quantity: 200
    },

    {
        id: 2,
        name: "Arbys",
        type: "bond",
        price: 80,
        quantity: 130
    }
]

export function getAssetById(assetId) {
    //finding asset that matches search ID
    const assetWanted = assetArray.find(asset => assetId === asset.id)

    if (assetWanted) {
        return assetWanted
    } else {
        return null
    }
        
}
