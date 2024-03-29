import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localEsHN from '@angular/common/locales/es-HN';
import germany from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsHN);
registerLocaleData(germany);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
