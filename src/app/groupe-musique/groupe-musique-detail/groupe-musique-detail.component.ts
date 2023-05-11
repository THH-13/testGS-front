import { Component, OnInit } from '@angular/core';
import {GroupeMusiqueService} from "../liste-groupe-musique/groupe-musique.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-groupe-musique-detail',
  templateUrl: './groupe-musique-detail.component.html',
  styleUrls: ['./groupe-musique-detail.component.css']
})
export class GroupeMusiqueDetailComponent implements OnInit {
  groupeMusique: any;
  id = this.actRoute.snapshot.params['id'];

  constructor(private groupeMusiqueService: GroupeMusiqueService, public actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.groupeMusiqueService.fetchByIdGroupeMusique(this.id).subscribe(data => {
      this.groupeMusique = data;
    });
  }
}
