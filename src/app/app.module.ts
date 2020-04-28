import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { FindUsComponent } from './find-us/find-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { RateComponent } from './shared/rate.component';
import { HttpClientModule } from '@angular/common/http';
import { MealDetailComponent } from './menu/meal-detail.component';
import { OrderComponent } from './order/order.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    
    FindUsComponent,
    RateComponent,
    MealDetailComponent,
    OrderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
