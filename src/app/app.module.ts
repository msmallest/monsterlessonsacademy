import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/components/posts/posts.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostsModule,
    RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
