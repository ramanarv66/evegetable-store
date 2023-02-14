import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({

  declarations: [AppComponent, DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatDialogModule, MatButtonModule, MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
