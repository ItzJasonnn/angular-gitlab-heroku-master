import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './core/app/app.component'
import { UsecasesComponent } from './about/usecases/usecases.component'
import { NavbarComponent } from './core/navbar/navbar.component'
import { UsecaseComponent } from './about/usecases/usecase/usecase.component'
import { RouterModule } from '@angular/router'
import { DashboardComponent } from './core/dashboard/dashboard.component'
import { FilmsComponent } from './films/films.component'
import { FilmDetailComponent } from './films/film-detail/film-detail.component'
import { FilmListComponent } from './films/film-list/film-list.component'
import { FilmvoorstellingComponent } from './filmvoorstelling/filmvoorstelling.component'
import { ZaalComponent } from './zaal/zaal.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsecasesComponent,
    UsecaseComponent,
    DashboardComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmListComponent,
    FilmvoorstellingComponent,
    ZaalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, RouterModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
  // test
})
export class AppModule {}
