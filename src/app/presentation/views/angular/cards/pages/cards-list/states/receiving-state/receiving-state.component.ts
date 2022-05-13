import { Component, OnInit } from "@angular/core";
import { ICardModel } from "src/app/entities/cards/card.model";
import { ReceivingState } from "src/app/presentation/ploc/cards/card.state";

@Component({
  selector: "kc-receiving-state",
  templateUrl: "./receiving-state.component.html",
  styleUrls: ["./receiving-state.component.scss"],
})
export class ReceivingStateComponent implements OnInit {
  state!: ReceivingState;
  cards!: ICardModel[];
  constructor() {}

  ngOnInit(): void {
    this.cards = this.state.cards;
  }
}
