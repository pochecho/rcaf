import { ICardModel } from "src/app/entities/cards/card.model";
import { CardRepository } from "src/app/repository/cards/card.repository";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";


export class GetCardUsecase {
  constructor(private cardRepository: CardRepository) {}
  call(): Observable<ICardModel> {
    return this.cardRepository.getCards().pipe(
      filter((card: ICardModel) => {
        return card !== null && card !== undefined;
      })
    );
  }
}
