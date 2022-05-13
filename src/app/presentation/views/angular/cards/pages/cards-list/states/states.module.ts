import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingStateComponent } from "./loading-state/loading-state.component";
import { LoadedStateComponent } from "./loaded-state/loaded-state.component";
import { ReceivingStateComponent } from "./receiving-state/receiving-state.component";

const COMPONENTS = [
  LoadingStateComponent,
  LoadedStateComponent,
  ReceivingStateComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule],
})
export class StatesModule {}
