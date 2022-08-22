import { Component, Input, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { CATEGORYTYPE } from '../../service/_models/categoryType';
import { servers } from '../../service/_models/configuration';
import { SocketData } from '../../service/_models/socketData';

@Component({
  selector: 'app-pricecalc',
  templateUrl: './pricecalc.component.html',
  styleUrls: ['./pricecalc.component.scss'],
})
export class PricecalcComponent implements OnInit {
  connection = webSocket(servers.real);
  footerList: SocketData[] = [];
  date: Date = new Date();
  miktar: any;
  sonuc: any;
  secilen: any;
  myDropDown: string = '';

  constructor() {}

  ngOnInit() {
    this.CurrencyConverter();
  }

  CurrencyConverter() {
    this.connection.subscribe((data: SocketData[] | any) => {
      if (this.footerList) {
        this.footerList = [];
      }

      data.forEach((item: SocketData) => {
        if (
          item.Category === CATEGORYTYPE.DOVIZ ||
          item.Category === CATEGORYTYPE.PARITE
        ) {
          this.footerList.push(item);
        }
      });
    });
  }
  onChangeofOptions(newGov: any) {
    //  console.log(newGov);
    newGov = newGov;
    this.sonuc = newGov * this.miktar;
    console.log(this.sonuc);
  }
}
