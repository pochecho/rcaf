import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-loading-state',
  templateUrl: './loading-state.component.html',
  styleUrls: ['./loading-state.component.scss']
})
export class LoadingStateComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
