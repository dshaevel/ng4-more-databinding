import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{incrementingNumber: number}>();

  inc = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.ref = setInterval(() => {
      this.gameStarted.emit({
        incrementingNumber: ++this.inc
      });
    }, 1000);
  }

  onStopGame() {
    console.log('onStopGame clicked!');
    clearInterval(this.ref);
  }

}
