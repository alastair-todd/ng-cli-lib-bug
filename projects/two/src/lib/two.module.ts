import { NgModule } from "@angular/core";
import { TwoComponent } from "./two.component";
import { OneModule } from "projects/one/src/lib/one.module";

@NgModule({
  declarations: [TwoComponent],
  imports: [OneModule],
  exports: [TwoComponent]
})
export class TwoModule {}
