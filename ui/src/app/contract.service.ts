import { Injectable } from '@angular/core'

declare const window

@Injectable()
export class ContractService {
  private _vestingPeriod = '10 days'
  private _provider
  get vestingPeriod() {
    return this._vestingPeriod
  }

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use the browser's ethereum provider
      this._provider = window.web3.currentProvider
    } else {
      console.log('No web3? You should consider trying MetaMask!')
    }
  }
}
