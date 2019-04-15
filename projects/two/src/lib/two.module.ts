import { NgModule } from "@angular/core";
import { TwoComponent } from "./two.component";
import { OneModule } from "one";

@NgModule({
  declarations: [TwoComponent],
  imports: [OneModule],
  exports: [TwoComponent]
})
export class TwoModule {}
