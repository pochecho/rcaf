import { Injectable } from "@angular/core";
import { Ploc } from "src/app/core/presentation/bloc/ploc";
import { ICardModel } from "src/app/entities/cards/card.model";
import { GetCardUsecase } from "src/app/usecases/cards/get-cards.usecase";
import { CardState, CARD_INITIAL_STATE } from "./card.state";

export class CardPloc extends Ploc<CardState> {
  constructor(private getCardsUsecase: GetCardUsecase) {
    super(CARD_INITIAL_STATE);
  }
  
  init(){
    this.changeState({
      kind: "LoadingState",
    });
    this.getCards();
  }
  getCards() {
    const cards: ICardModel[] = [];
    this.getCardsUsecase.call().subscribe(
      
      (card: ICardModel) => {
        const index = cards.indexOf(card);
        if (index === -1) {
          cards.push(card);
          this.changeState({
            kind: "ReceivingState",
            cards,
          });
        }
      },
      (error) => {
        this.changeState({
          kind: "ErrorState",
          error: error,
        });
      },
      () => {}
    );
  }
}
