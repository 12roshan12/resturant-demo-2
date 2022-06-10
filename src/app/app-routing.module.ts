import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceComponent } from './services/service.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
{
  path: '',
  component:HomeComponent
},
{
  path: 'about',
  component:AboutComponent
},
{
  path: 'contact',
  component:ContactComponent
},
{
  path: 'menu',
  component:MenuComponent
},
{
  path: 'service',
  component:ServiceComponent
},
{
  path: 'team',
  component:TeamComponent
},
{
  path: 'testimonial',
  component:TestimonialComponent
},
{
  path: 'booking',
  component:BookingComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
