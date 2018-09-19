import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, DocumentReference, DocumentSnapshot } from 'angularfire2/firestore';
import { ReactionCategory_FromESI } from '../../models/reactionCategory-FromESI';
import { Reaction } from '../../models/reaction';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAdminService {

  constructor(
    private database: AngularFirestore,
  ) { }
  
  get MaterialRequirementsCollectionRef(): CollectionReference {
    return this.database.collection('ReactionTypes_WithMaterialRequirements').ref;
  }

  get CategoryCollectionRef(): CollectionReference {
    return this.database.collection('Category').ref;
  }

  public get ReactionGroupsCollection(): CollectionReference {
    return this.ReactionDocRef.collection('Groups');
  }
  
  public GetReactionTypeCollection_OfGroup_AtGroupName(GroupName: string): CollectionReference {
    return this.ReactionGroupsCollection.doc(GroupName).collection('Types');
  }

  get ReactionDocRef(): DocumentReference {
    return this.CategoryCollectionRef.doc('Reaction');
  }

  public GetReactionGroupDocument_AtGroupName(GroupName: string): DocumentReference {
    return this.ReactionGroupsCollection.doc(GroupName);
  }

  public get ReactionDocGet() {
    return this.ReactionDocRef.get();
  }

  updateReactionDoc(doc: ReactionCategory_FromESI) {
    this.ReactionDocRef.update(doc);
  }

}
