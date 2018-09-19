import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { UserSelectedType } from '../../models/userselectedtype';
import { TIER_1_COMPOSITE_REACTIONS, TIER_1_CONSTANTS } from '../../Data/ReactionTypes.Data';
import { TypeAndQuantity } from '../../models/TypeAndQuantity';
import { IAppState } from '../../STATE/app.store';

@Component({
  selector: 'app-reaction-list-material-requirements',
  templateUrl: './reaction-list-material-requirements.component.html',
  styleUrls: ['./reaction-list-material-requirements.component.css']
})
export class ReactionListMaterialRequirementsComponent implements OnInit {

  @select() UsersSelectedTypes$: Observable<Map<string, number>>;

  @select() RequiredMoonMaterials$: Observable<Map<string, number>>;

  MoonMaterialList: TypeAndQuantity[] = [];

  constructor(
    private state: NgRedux<IAppState>,
  ) { }

  ngOnInit() {
    
    this.UsersSelectedTypes$.subscribe(this.CalculateMaterials_FromSelectedTypes);
    
    this.RequiredMoonMaterials$.subscribe(this.ConvertRequiredMaterials_ToArray_ForView);
  }

  CalculateMaterials_FromSelectedTypes = (SelectedTypes: Map<string, number>) => {
    
    let MaterialList: Map<string, number> = new Map();

    for(let Type of Array.from(SelectedTypes.entries())) {
      
      let MaterialNames: string[] = TIER_1_COMPOSITE_REACTIONS[Type[0]].materials;

      for(let MaterialName of MaterialNames){
        
        let Quantity: Number = new Number(Type[1] * TIER_1_CONSTANTS.MaterialInputValue);                

        if(MaterialList.has(MaterialName)){

          let CurrentQuantity: Number = new Number(MaterialList.get(MaterialName));
          
          CurrentQuantity = CurrentQuantity.valueOf() + Quantity.valueOf();
                    
          MaterialList.set(MaterialName, CurrentQuantity as number);
        }
        else{
          MaterialList.set(MaterialName, Quantity as number);
        }
      }      
    }
    
    this.state.dispatch({type: 'UpdateMoonMaterials', MaterialList: MaterialList});
  }

  ConvertRequiredMaterials_ToArray_ForView = (MaterialList: Map<string, number>) => {
        
    if(MaterialList){
      
      this.MoonMaterialList = [];
      
      for(let Material of Array.from(MaterialList.entries())) {
        
        if(Material[1] > 0) {
          
          let MaterialValues: TypeAndQuantity = {TypeName: Material[0], Quantity: Material[1]};

          this.MoonMaterialList.push(MaterialValues);
        }
      }

      this.MoonMaterialList.sort(function(a,b){
        
        return a.TypeName > b.TypeName ? 1 : a.TypeName < b.TypeName ? -1 : 0;
      });
    }
  }
}
