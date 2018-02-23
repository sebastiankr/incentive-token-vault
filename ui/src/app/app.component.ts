import { Component, OnInit } from '@angular/core'
import { ContractService } from './contract.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  error
  constructor(public contract: ContractService) {}

  async ngOnInit() {
    try {
      await this.contract.connect()
    } catch (err) {
      this.error = err
    }
  }
}
