import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layout

import { BaseComponent } from "./layout/base/base.component";

const routes: Routes = [
  {
    path: "",
    component: BaseComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
    ],
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
