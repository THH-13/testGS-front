import {Injectable} from '@angular/core';
import {GroupeMusiqueModel} from "../../models/groupe-musique.model";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../app.constants";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GroupeMusiqueService {

  url: string = API_URL;

  constructor(private http: HttpClient) {
  }

  private refreshrequired = new Subject<void>();

  refreshRequired() {
    return this.refreshrequired;
  }

  saveGroupeMusique(groupeMusique: GroupeMusiqueModel): Observable<GroupeMusiqueModel> {
    return this.http.post<GroupeMusiqueModel>(this.url + '/groupe_musiques', groupeMusique).pipe(
      tap(() => {
        this.refreshRequired().next();
      })
    );
  }

  fetchGroupeMusique(): Observable<GroupeMusiqueModel[]> {
    return this.http.get<GroupeMusiqueModel[]>(this.url + '/groupe_musiques')
  }

  fetchByIdGroupeMusique(id: string): Observable<GroupeMusiqueModel> {
    return this.http.get<GroupeMusiqueModel>(this.url + '/groupe_musiques/' + id);
  }

  updateGroupeMusique(groupeMusique: GroupeMusiqueModel): Observable<GroupeMusiqueModel> {
    return this.http.put<GroupeMusiqueModel>(this.url + '/groupe_musiques/' + groupeMusique.id, groupeMusique);
  }

  deleteGroupeMusique(id: string): Observable<GroupeMusiqueModel> {
    return this.http.delete<GroupeMusiqueModel>(this.url + '/groupe_musiques/' + id).pipe(
      tap(() => {
        this.refreshRequired().next();
      })
    );
  }
}
