import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tips',
 templateUrl: 'tips.html'
})
export class tips {
  private nome: string;

  constructor(public navCtrl: NavController) {
    this.nome = "Modelo";
  }

}
