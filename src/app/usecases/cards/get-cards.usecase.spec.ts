import { CardRepository } from "src/app/repository/cards/card.repository";
import { CardsService } from "src/app/services/cards/cards.service";
import { GetCardUsecase } from "./get-cards.usecase";

fdescribe("GetCardsUsecase", () => {
  let getCardUsecase: GetCardUsecase;
  let cardRepository: CardRepository;
  beforeAll(() => {
    cardRepository = new CardsService();
    getCardUsecase = new GetCardUsecase(cardRepository);
  });

  it("should be created", () => {
    expect(getCardUsecase).toBeTruthy();
  });
});
