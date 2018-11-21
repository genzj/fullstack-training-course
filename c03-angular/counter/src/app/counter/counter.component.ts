import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() value = 0;
  @Output() update = new EventEmitter<number>();

  constructor() {
  }

  onIncrease() {
    if (this.update) {
      this.update.emit(1);
    } else {
      this.value += 1;
    }
  }

  onDecrease() {
    if (this.update) {
      this.update.emit(-1);
    } else {
      this.value -= 1;
    }
  }

  ngOnInit() {
  }

}
