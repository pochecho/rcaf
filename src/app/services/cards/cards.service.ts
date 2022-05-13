import { Injectable } from "@angular/core";
import { ICardModel } from "src/app/entities/cards/card.model";
import { CardRepository } from "src/app/repository/cards/card.repository";
import { interval, Observable, of } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CardsService extends CardRepository {
  constructor() {
    super();
  }

  getCards(): Observable<ICardModel> {
    return interval(1000).pipe(
      map(() => {
        return {
          name: "Blue Eyes White Dragon",
          preview: "assets/preview.jpg",
        };
      }),
      take(10)
    );
  }
}
