import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardOneComponent } from "./dashboard-one/dashboard-one.component";

import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [DashboardOneComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
