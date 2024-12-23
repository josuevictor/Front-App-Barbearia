import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServiceFilterComponent } from './componentes/service-filter/service-filter.component';
import { ProfessionalListComponent } from './componentes/professional-list/professional-list.component';
import { StarRatingComponent } from './componentes/star-rating/star-rating.component';
import { DatePickerComponent } from './componentes/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceFilterComponent,
    ProfessionalListComponent,
    StarRatingComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
