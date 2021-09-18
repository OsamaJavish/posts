import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostsListComponent} from './views/posts-list/posts-list.component';
import {CoreModule} from './core';
import {HttpClientModule} from '@angular/common/http';
import {PostItemComponent} from './views/posts-list/post-item/post-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './core/store/reducers/app.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    NgbTooltipModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
