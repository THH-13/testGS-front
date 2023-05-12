import {Component, OnInit} from '@angular/core';
import {GroupeMusiqueService} from "../liste-groupe-musique/groupe-musique.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {GroupeMusiqueModel} from "../../models/groupe-musique.model";

@Component({
  selector: 'app-groupe-musique-detail',
  templateUrl: './groupe-musique-detail.component.html',
  styleUrls: ['./groupe-musique-detail.component.css']
})
export class GroupeMusiqueDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  formGroup!: FormGroup;

  constructor(private groupeMusiqueService: GroupeMusiqueService, public actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let groupeMusique = new GroupeMusiqueModel();
    this.groupeMusiqueService.fetchByIdGroupeMusique(this.id).subscribe(data => {
      groupeMusique = data;
      this.formGroup = new FormGroup({
        "nomGroupe": new FormControl(groupeMusique.nomGroupe),
        "origine": new FormControl(groupeMusique.origine),
        "ville": new FormControl(groupeMusique.ville),
        "anneeDebut": new FormControl(groupeMusique.anneeDebut),
        "anneeSeparation": new FormControl(groupeMusique.anneeSeparation),
        "fondateurs": new FormControl(groupeMusique.fondateurs),
        "membres": new FormControl(groupeMusique.membres),
        "courantMusical": new FormControl(groupeMusique.courantMusical),
        "presentation": new FormControl(groupeMusique.presentation),
      });
    });
  }

  onSubmit() {
    if (this.formGroup && this.formGroup.valid) {
      this.groupeMusiqueService.updateGroupeMusique(this.id, this.formGroup.value).subscribe();
    }
    alert("Le groupe est modifié");
  }
}
