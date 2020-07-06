import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardOneComponent } from "./dashboard-one/dashboard-one.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: DashboardOneComponent,
  },
  {
    path: "dashboard",
    component: DashboardOneComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
