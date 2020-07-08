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
import { TabScrollModule } from "ngx-tab-scroll";

@NgModule({
  declarations: [
    DashboardOneComponent,
    PapreOneComponent,
    PapretwoComponent,
    PapreThreeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    ComponentsModule,
    TabScrollModule.forRoot({
      autoRecalculate: true,
      showDropDown: true,
      showTooltips: false,
      tooltipLeftPlacement: "top",
      tooltipRightPlacement: "top",
      scrollBy: 50,
      leftScrollAddition: 0,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DashboardModule {}
