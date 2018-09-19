import { Component, OnInit } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../STATE/app.store';
import { Observable } from 'rxjs';
import { TypeAndQuantity } from '../../models/TypeAndQuantity';
import { TIER_1_CONSTANTS } from '../../Data/ReactionTypes.Data';

@Component({
  selector: 'app-users-reaction-list',
  templateUrl: './users-reaction-list.component.html',
  styleUrls: ['./users-reaction-list.component.css']
})
export class UsersReactionListComponent implements OnInit {

  @select() UsersSelectedTypes$: Observable<Map<string, number>>;

  UsersReactionOutputs: TypeAndQuantity[] = [];

  constructor(
    private state: NgRedux<IAppState>
  ) { }

  ngOnInit() {

    this.UsersSelectedTypes$.subscribe((SelectedTypes: Map<string, number>) => {
      
      let ReceivedTypes: TypeAndQuantity[] = [];

      for(let Type of Array.from(SelectedTypes.entries())){
        let SelectedType: TypeAndQuantity = {TypeName: Type[0], Quantity: TIER_1_CONSTANTS.OutcomeValue * Type[1]};
        ReceivedTypes.push(SelectedType);  
      }

      this.UsersReactionOutputs = ReceivedTypes;
      
    });
  }

}
