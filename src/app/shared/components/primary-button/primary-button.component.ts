import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styles: [
  ]
})
export class PrimaryButtonComponent implements OnInit {
  @Input() buttonMessage: string = '';
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
