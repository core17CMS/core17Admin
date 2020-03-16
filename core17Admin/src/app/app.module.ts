import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './_components/main-component/main.component';
import {MenuComponent} from './_components/menu-component/menu.component';
import {PageComponent} from './_components/page-component/page.component';
import {AreaComponent} from './_components/area-component/area.component';
import {ElementComponent} from './_components/element-component/element.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    PageComponent,
    AreaComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
