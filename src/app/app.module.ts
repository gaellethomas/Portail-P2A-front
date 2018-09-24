import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { BodyComponent } from 'src/app/body/body.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  // path = ' ' indicate if there is nothing after the port in the URL, the router redirect to path/accueil
  // and display "Accueil" sheet by default
  // path = "**" : if there is anything, never mind, the router display "Aliment" sheet

    { path: '', redirectTo: '/accueil', pathMatch: 'full' },

    /*{
     path: 'commun',
      component: CommunComponent},

    {
      path: 'activity/blueprism', 'activity/contextor', 'activity/web','activity/autres-assets', 'activity/suivi-de-production',
      component: ActivityComponent},*/

    {
        path: 'recherche',
         component: SearchComponent},

    {
    path: 'creer',
      component: CreateComponent},

    {
    path: 'mise-a-jour',
      component: UpdateComponent},


    {
      path: '**',
      component: AccueilComponent}
     ] ;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AccueilComponent,
    SearchComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
