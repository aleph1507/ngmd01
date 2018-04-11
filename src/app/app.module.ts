import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule,
        MatCardModule, MatDialogModule,
        MatTooltipModule, MatSnackBarModule,
        MatIconModule } from '@angular/material';

import {MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { MenudemoComponent } from './menudemo/menudemo.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent,
    MenudemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
