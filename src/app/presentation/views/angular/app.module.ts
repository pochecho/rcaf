import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PagesModule } from "./cards/pages/pages.module";

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, PagesModule],
  declarations: [AppComponent],
})
export class AppModule {}
