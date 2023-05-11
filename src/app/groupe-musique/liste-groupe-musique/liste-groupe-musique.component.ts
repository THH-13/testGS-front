import {Component, OnInit} from '@angular/core';
import {GroupeMusiqueModel} from "../../models/groupe-musique.model";
import {GroupeMusiqueService} from "./groupe-musique.service";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-liste-groupe-musique',
  templateUrl: './liste-groupe-musique.component.html',
  styleUrls: ['./liste-groupe-musique.component.css']
})
export class ListeGroupeMusiqueComponent implements OnInit {
  groupeMusiques: GroupeMusiqueModel[] = [];
  excelData: any;

  constructor(private groupeMusiqueService: GroupeMusiqueService) {
  }

  ngOnInit(): void {
    this.fetchGroupeMusique();
    this.groupeMusiqueService.refreshRequired().subscribe(response => {
      this.fetchGroupeMusique();
    })
  }

  readExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = () => {
      var workBook = XLSX.read(fileReader.result, {type: "binary"});
      var sheetNames = workBook.SheetNames;

      this.excelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);

      for (var val of this.excelData) {
        var groupeMusique = new GroupeMusiqueModel();
        groupeMusique.nomGroupe = val['Nom du groupe'];
        groupeMusique.origine = val['Origine'];
        groupeMusique.ville = val['Ville'];
        groupeMusique.anneeDebut = val['Année début'];
        groupeMusique.anneeSeparation = val['Année séparation'];
        groupeMusique.fondateurs = val['Fondateurs'];
        groupeMusique.membres = val['Membres'];
        groupeMusique.courantMusical = val['Courant musical'];
        groupeMusique.presentation = val['Présentation'];
        this.groupeMusiqueService.saveGroupeMusique(groupeMusique).subscribe();
      }
    }
  }

  fetchGroupeMusique() {
    this.groupeMusiqueService.fetchGroupeMusique().subscribe(data => {
      this.groupeMusiques = data;
    });
  }

  deleteGroupe(id: any) {
    this.groupeMusiqueService.deleteGroupeMusique(id).subscribe();
    alert('Le groupe est supprimé')
  }
}
