import { Component, OnInit } from '@angular/core';

import { ReactionGroupsData } from "../../Data/ReactionNames.Data";
import { IAppState } from '../../STATE/app.store';
import { NgRedux } from '@angular-redux/store';
import { UserSelectedType } from '../../models/userselectedtype';

@Component({
  selector: 'app-reaction-group-selector',
  templateUrl: './reaction-group-selector.component.html',
  styleUrls: ['./reaction-group-selector.component.css']
})
export class ReactionGroupSelectorComponent implements OnInit {

  ReactionGroups_FromData: {[key: string]: string[]} = ReactionGroupsData;

  ReactionGroupNames: string[] = [];

  constructor(
    private state: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    for(let key in this.ReactionGroups_FromData){
      this.ReactionGroupNames.push(key);
    }
  }

  SetType_OnUsersList(TypeName: string, TypeQuantity: number) {
    
    if(TypeQuantity > 0){
      
      this.state.dispatch({type: 'UpdateUsersSelectedTypes', Type: {TypeName: TypeName, Quantity: TypeQuantity}});
    }
    else if(!TypeQuantity || TypeQuantity === 0) {
      
      this.state.dispatch({type: 'UpdateUsersSelectedTypes', Type: {TypeName: TypeName, Quantity: TypeQuantity}});
      this.state.dispatch({type: 'RemoveTypeFromList', TypeName: TypeName});
    }
    
  }

}
