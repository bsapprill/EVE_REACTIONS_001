import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.css']
})
export class HomeBarComponent implements OnInit {

  constructor(
    private firebase: AngularFireAuth,
  ) { }

  ngOnInit() {
  }
}
