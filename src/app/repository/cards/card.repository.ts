import { ICardModel } from "src/app/entities/cards/card.model";
import { Observable } from "rxjs";

export abstract class CardRepository{
    abstract getCards(): Observable<ICardModel>
}