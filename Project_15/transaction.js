import {assetArray, getAssetById} from "./asset.js";

export class Transaction {
        constructor(assetId, type, quantity) {
            this.assetId = assetId
            this.type = type 
            this.quantity = quantity
        }

        
        updateAssetQuantity() {
            //finding correspondent asset id
            const asset = getAssetById(this.assetId)

            if (!asset) {
                throw new Error('Asset not found')
            }

            if (this.type === 'buy') {
                asset.quantity += this.quantity
                console.log(`${this.quantity} of ${asset.name} purchased. New quantity: ${asset.quantity}`)
            }

            else if (this.type === 'sell') {
                if (asset.quantity < this.quantity) {
                    throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }  
                asset.quantity -= this.quantity
                console.log(`${this.quantity} of ${asset.name} sold. New quantity: ${asset.quantity}`)
            }
            else {
                throw new Error (`Invalid Transaction: transaction is neither 'buy' or 'sell'`)
            }
        }
    }