import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { ClockComponent } from './components/clock/clock.component';
import { MousePositionComponent } from './components/mouse-position/mouse-position.component';
import { ButtonRippleComponent } from './components/button-ripple/button-ripple.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    MousePositionComponent,
    ButtonRippleComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
