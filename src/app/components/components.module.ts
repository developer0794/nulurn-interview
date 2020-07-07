import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardChaptersComponent } from "./card-chapters/card-chapters.component";

@NgModule({
  declarations: [CardChaptersComponent],
  imports: [CommonModule],
  exports: [CardChaptersComponent],
})
export class ComponentsModule {}
