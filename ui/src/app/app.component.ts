import { Component } from '@angular/core'
import { ContractService } from './contract.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public contract: ContractService) {}
}
