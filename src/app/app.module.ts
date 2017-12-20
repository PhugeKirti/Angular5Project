import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './components/login/login.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { IndexComponent} from './components/index/index.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import {NavigationBarComponent} from './components/NavigationBar/navbar';



@NgModule({
  declarations: [
    AppComponent,LoginComponent, DashboardComponent,IndexComponent, NavigationBarComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,

    RouterModule.forRoot([
    {path: '', component: IndexComponent},
    {path: 'dashboard', component:DashboardComponent},

    
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
