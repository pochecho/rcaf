import { Component } from "react";
import { CardPloc } from "src/app/presentation/ploc/cards/card.ploc";
import { CardState } from "src/app/presentation/ploc/cards/card.state";
import { CardsService } from "src/app/services/cards/cards.service";
import { GetCardUsecase } from "src/app/usecases/cards/get-cards.usecase";
import { LoadingState } from "./states/loading-state.component/loading-state";
import { ReceivingState } from "./states/receiving-state/receiving-state";

export class CardListComponent extends Component<any> {
  ploc: CardPloc;
  private _state: CardState;

  constructor(props: CardState) {
    super(props);
    this._state = {
      kind: "LoadingState",
    };
    this.ploc = new CardPloc(new GetCardUsecase(new CardsService()));
    this.ploc.subscribe((state: CardState) => {
      this._state = state;
      this.setState({})
    });
    this.ploc.init()
  }
  render() {

    switch (this._state.kind) {
      case "LoadingState":
        return <LoadingState />;

        case "ReceivingState":
          return <ReceivingState cards={this._state.cards}/>;

      default:
        return <LoadingState />;
    }
  }
}
