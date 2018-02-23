import { Injectable } from '@angular/core'
import * as ethers from 'ethers'

declare const window

@Injectable()
export class ContractService {
  private _vestingPeriod
  private _provider
  private _address

  get vestingPeriod() {
    if (!this._vestingPeriod) {
      return '10 days'
    }
    return this._vestingPeriod
  }

  constructor() {}

  async connect() {
    if (typeof window.web3 !== 'undefined') {
      this._provider = new ethers.providers.Web3Provider(
        window.web3.currentProvider
      )
      const signer = this._provider.getSigner()
      try {
        this._address = await signer.getAddress()
      } catch (err) {
        if (err.message === 'no account') {
          // throw err
          throw new Error(
            'Unlock your wallet in order to interact with the Incentive Token Vault!'
          )
        }
      }
    } else {
      console.log('You need an ethereum browser or extention for this Dapp!')
    }
  }
}
