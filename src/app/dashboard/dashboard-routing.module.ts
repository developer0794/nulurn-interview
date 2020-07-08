import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardOneComponent } from "./dashboard-one/dashboard-one.component";
import { Routes, RouterModule } from "@angular/router";
import { PapreOneComponent } from "./papre-one/papre-one.component";
import { PapretwoComponent } from "./papretwo/papretwo.component";
import { PapreThreeComponent } from "./papre-three/papre-three.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardOneComponent,
  },
  {
    path: "paper1",
    component: PapreOneComponent,
  },
  {
    path: "paper2",
    component: PapretwoComponent,
  },
  {
    path: "paper3",
    component: PapreThreeComponent,
  },
  {
    path: "paper4",
    component: DashboardOneComponent,
  },
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
