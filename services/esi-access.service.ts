import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReactionCategory_FromESI } from '../models/reactionCategory-FromESI';
import { ReactionGroup_FromESI } from '../models/reactionGroup-FromESI';
import { ReactionType_FromESI } from '../models/reactionType-FromESI';
import { DogmaAttribute_FromESI } from '../models/DogmaAttribute-FromESI';
import { DogmaEffect_FromESI } from '../models/DogmaEffect-FromESI';

const ESIRoot: string = 'https://esi.evetech.net/latest/';

@Injectable({
  providedIn: 'root'
})
export class ESIAccessService {

  constructor(
    private http: HttpClient,
  ) { }

  ReturnsDogmaAttributeGroup_AtId(id: number): Observable<DogmaAttribute_FromESI> {

    let url = ESIRoot + `dogma/attributes/${id}/`;

    return this.http.get(url) as Observable<DogmaAttribute_FromESI>;
  }

  ReturnsDogmaEffectGroup_AtId(id: number): Observable<DogmaEffect_FromESI> {
    let url = ESIRoot + `dogma/effects/${id}/`;
    
    return this.http.get(url) as Observable<DogmaEffect_FromESI>;
  }

  ReturnsMarketGroup_AtId(id: number): Observable<any> {
    let url = ESIRoot + 'markets/groups/' + id.toString() + '/';

    return this.http.get(url) as Observable<any>;
  }

  ReturnsReactionCategory(): Observable<ReactionCategory_FromESI> {

    let url = ESIRoot + 'universe/categories/24/';

    return this.http.get(url) as Observable<ReactionCategory_FromESI>;
  }

  ReturnsGroup_AtId(id: number): Observable<ReactionGroup_FromESI> {
    let url = ESIRoot + 'universe/groups/' + id.toString() + '/';

    return this.http.get(url) as Observable<ReactionGroup_FromESI>;
  }

  ReturnsType_AtId(id: number): Observable<ReactionType_FromESI> {
    
    let id_num: string = id.toString();

    let url: string = ESIRoot + 'universe/types/' + id_num + '/';

    return this.http.get(url) as Observable<ReactionType_FromESI>;
  }

  CallESI_AtRoute(route: string): Observable<any> {

    let url = ESIRoot + route;

    return this.http.get(url);
  }

  testESIRoot() {

    let url = ESIRoot + 'universe/categories/24/';

    return this.http.get(url);
  }

}