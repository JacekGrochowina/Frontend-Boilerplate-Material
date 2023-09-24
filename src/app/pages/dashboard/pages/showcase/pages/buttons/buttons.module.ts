import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { HeaderPageModule } from '../../../../../../shared/components/header-page';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonModule } from '../../../../../../shared/components/button';


@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    HeaderPageModule,
    ButtonModule,
  ]
})
export class ButtonsModule {}
