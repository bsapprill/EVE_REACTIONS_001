import { Component, OnInit } from '@angular/core';
import { AuthWithEveService } from '../../services/auth-with-eve.service';
import { ESIAccessService } from '../../services/esi-access.service';
import { ReactionCategory_FromESI } from '../../models/reactionCategory-FromESI';
import { AngularFirestore, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from 'angularfire2/firestore';
import { FirebaseAdminService } from './firebase-admin.service';
import { ReactionGroup_FromESI } from '../../models/reactionGroup-FromESI';
import { ReactionType_FromESI } from '../../models/reactionType-FromESI';
import { MarketGroup_FromESI } from '../../models/marketGroup-FromESI';

import { SDE_REACTIONDATA } from "../../Data/SDE-ReactionData";
import { ReactionType_FromSDE } from "./Models/ReactionType_FromSDE";
import { merge, Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-firebase-admin',
  templateUrl: './firebase-admin.component.html',
  styleUrls: ['./firebase-admin.component.css']
})
export class FirebaseAdminComponent implements OnInit {

  currentOutput: ReactionGroup_FromESI[] = [];
  
  TypeNameSet: Set<string> = new Set();
  
  constructor(
    private ESI: ESIAccessService,
    private database: AngularFirestore,
    private admin: FirebaseAdminService
  ) { }

  ngOnInit() {
    
  }

  submit() {
       
    //Get each type name
    //Get each material associated with the current type
    //Get collection, add doc with type name
    //Get doc at type name, add collection called materials
    //Add document to materials collection with material name and quantity
    
    let MatReqDataSet = [];

    for(let Data of SDE_REACTIONDATA) {

      let DataSet = {
        MatReqData$: [
          this.ESI.ReturnsType_AtId(Data.typeID),
          this.ESI.ReturnsType_AtId(Data.materialTypeID),
        ],        
        MaterialQuantity: Data.quantity
      }

      MatReqDataSet.push(DataSet);
    }

    MatReqDataSet.forEach(DataSet => {
      
      let TypeName: string;
      let MaterialName: string;
      
      forkJoin(DataSet.MatReqData$).subscribe(Result => {
        TypeName = Result['0'].name;
        MaterialName = Result['1'].name;
      },
      null,
      () => {
        this.admin.MaterialRequirementsCollectionRef
          .where('Name', '==', TypeName).get().then(Snapshot => {
            
            Snapshot.docs[0].ref.set({Name: TypeName});
            Snapshot.docs[0].ref.collection('Materials').add({Name: MaterialName, Quantity: DataSet.MaterialQuantity});
          });
      });
    });
  }

}
