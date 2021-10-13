import { FlopServiceService } from './service/flop-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flopbuster';
  selectedIndex: number = -1;

  constructor(public flopService: FlopServiceService) {

  }

  onVoteClick(index: number) {
    if (this.isSelected(index)) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  isSelected(index: number) {
    return this.selectedIndex === index;
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }

  getButtonText(index: number) {
    if(this.isSelected(index)) {
      return "Unvote";
    } else {
      return "Vote";
    }
  }

  onClick() {
    this.flopService.calculateRentalFee();
  }
}
