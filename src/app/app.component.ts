import { Component } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onGameStarted(gameData: {incrementingNumber: number}) {
    if (gameData.incrementingNumber % 2 === 0) {
      this.evenNumbers.push(gameData.incrementingNumber);
    } else {
      this.oddNumbers.push(gameData.incrementingNumber);
    }
  }
}
