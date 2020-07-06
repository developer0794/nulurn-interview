import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BaseComponent } from "./layout/base/base.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
