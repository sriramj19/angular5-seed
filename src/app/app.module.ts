/**Common Angular Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
/**Commin Angular imports end */

/**Material Angular Imports */
import { MatButtonModule } from '@angular/material/button'
/**Material Angular Imports End*/

/**Importing Modules */
import { AppRoutingModule } from './app-routing.module';
/**Importing Modules End */

/**Importing Components */
import { AppComponent } from './app.component';
/**Importing Components End*/

/**Importing Services */
/**Importing Services End*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
