import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { NotFountComponentComponent } from './not-fount-component/not-fount-component.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tutorial', 
  component: TutorialComponent,
  children: [
    {
      path:'book/:id',
      component:BookComponent,
    },
  ] 
},
  { path: '**',component:NotFountComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
