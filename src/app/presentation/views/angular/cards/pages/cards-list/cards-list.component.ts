import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import { CardPloc } from "src/app/presentation/ploc/cards/card.ploc";
import { CardState } from "src/app/presentation/ploc/cards/card.state";
import { LoadedStateComponent } from "./states/loaded-state/loaded-state.component";
import { LoadingStateComponent } from "./states/loading-state/loading-state.component";
import { ReceivingStateComponent } from "./states/receiving-state/receiving-state.component";

@Component({
  selector: "kc-cards-list",
  templateUrl: "./cards-list.component.html",
  styleUrls: ["./cards-list.component.scss"],
})
export class CardsListComponent implements OnInit {
  static stateMapper: any = {
    LoadingState: LoadingStateComponent,
    LoadedState: LoadedStateComponent,
    ReceivingState: ReceivingStateComponent,
    default: LoadingStateComponent,
  };
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ploc: CardPloc
  ) {
    this.ploc.subscribe((state: CardState) => {
      this.setContent(state);
    });
  }

  ngOnInit(): void {
    this.ploc.init()
   
  }

  setContent(state: CardState) {
    let component: any;
    if (state.kind in CardsListComponent.stateMapper) {
      component = CardsListComponent.stateMapper[state.kind];
    } else {
      component = CardsListComponent.stateMapper["default"];
    }
    this.viewContainerRef.clear();
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.viewContainerRef.createComponent(factory);
    (componentRef.instance as any).state = state
  }
}
