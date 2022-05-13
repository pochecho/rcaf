import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsListComponent } from "./cards-list/cards-list.component";
import { StatesModule } from "./cards-list/states/states.module";
import { GetCardUsecase } from "src/app/usecases/cards/get-cards.usecase";
import { CardPloc } from "src/app/presentation/ploc/cards/card.ploc";
import { CardsService } from "src/app/services/cards/cards.service";

const PAGES = [CardsListComponent];
@NgModule({
  declarations: [...PAGES],
  exports: [...PAGES, StatesModule],
  imports: [CommonModule, StatesModule],
  providers: [
    {
      provide: CardPloc,
      useFactory: (getCardUsecase: GetCardUsecase) => {
        return new CardPloc(getCardUsecase);
      },
      deps:[GetCardUsecase]
    },
    {
      provide: GetCardUsecase,
      useFactory: () => {
        const service = new CardsService();
        return new GetCardUsecase(service);
      },
      deps: [],
      // useExisting:
    },
  ],
})
export class PagesModule {}
