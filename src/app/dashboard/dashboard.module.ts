import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardOneComponent } from "./dashboard-one/dashboard-one.component";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { PapreOneComponent } from "./papre-one/papre-one.component";
import { PapretwoComponent } from "./papretwo/papretwo.component";
import { PapreThreeComponent } from "./papre-three/papre-three.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    DashboardOneComponent,
    PapreOneComponent,
    PapretwoComponent,
    PapreThreeComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, NgbModule, ComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DashboardModule {}
