import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template:`
  <button
  [ngStyle]="{ 'background-color': color }"
  class="btn"
  (click)="onClick()"
  >
    {{ text }}
  </button>
  `
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
