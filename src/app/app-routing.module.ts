import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

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
  { path: "**", redirectTo: "dashboard" },
];

const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: "enabled",
  scrollPositionRestoration: "enabled",
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
