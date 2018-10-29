import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { BodyComponent } from 'src/app/components/body/body.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AccueilComponent } from 'src/app/components/accueil/accueil.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CreateComponent } from 'src/app/components/create/create.component';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { DataListsComponent } from 'src/app/components/data-lists/data-lists.component';
import { ResultComponent } from 'src/app/components/result/result.component';
import { LinkListComponent } from 'src/app/components/link-list/link-list.component';
import { PersonListComponent } from 'src/app/components/person-list/person-list.component';
import { RouterModule, Routes } from '@angular/router';

import { MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule} from '@angular/material/select';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatButtonModule} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

const routes: Routes = [

  // path = ' ' indicate if there is nothing after the port in the URL, the router redirect to path/accueil
  // and display "Accueil" sheet by default
  // path = "**" : if there is anything, never mind, the router display "Aliment" sheet
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'activite/:activityName',
      component: DataListsComponent},
    { path: 'recherche',
      component: SearchComponent},
    { path: 'creer',
      component: CreateComponent},
    { path: 'mise-a-jour',
      component: UpdateComponent},
    { path: '**',
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
    UpdateComponent,
    ResultComponent,
    DataListsComponent,
    LinkListComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
