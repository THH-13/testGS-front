import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListeGroupeMusiqueComponent} from "./groupe-musique/liste-groupe-musique/liste-groupe-musique.component";
import {GroupeMusiqueDetailComponent} from "./groupe-musique/groupe-musique-detail/groupe-musique-detail.component";
import {NonTrouveComponent} from "./non-trouve/non-trouve.component";

const routes: Routes = [
  {path:'', component: ListeGroupeMusiqueComponent},
  {path:'groupe-musique/:id', component: GroupeMusiqueDetailComponent},
  {path:'**', component: NonTrouveComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
