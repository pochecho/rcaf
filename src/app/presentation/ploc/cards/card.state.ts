import { ICardModel } from "src/app/entities/cards/card.model";

export interface LoadingState {
  kind: "LoadingState";
}

export interface ReceivingState {
  kind: "ReceivingState";
  cards: Array<ICardModel>;

}

export interface LoadedState {
  kind: "LoadedState";
  cards: Array<ICardModel>;
}

export interface ErrorState {
  kind: "ErrorState";
  error: string;
}

export type CardState = LoadingState | LoadedState | ErrorState | ReceivingState;

export interface CardItemState {
  id: string;
  image: string;
  title: string;
  price: string;
  quantity: number;
}

export const CARD_INITIAL_STATE: CardState = {
  kind: "LoadingState",
};
