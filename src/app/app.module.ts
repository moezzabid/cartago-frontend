import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule} from '@bhplugin/ng-datatable';
import { SortablejsModule } from '@dustfoundation/ngx-sortablejs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DataTableModule,
    SortablejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
