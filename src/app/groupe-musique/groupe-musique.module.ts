import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListeGroupeMusiqueComponent} from "./liste-groupe-musique/liste-groupe-musique.component";
import {GroupeMusiqueService} from "./liste-groupe-musique/groupe-musique.service";
import {GroupeMusiqueDetailComponent} from "./groupe-musique-detail/groupe-musique-detail.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListeGroupeMusiqueComponent,
    GroupeMusiqueDetailComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
  providers: [GroupeMusiqueService],
})
export class GroupeMusiqueModule { }
