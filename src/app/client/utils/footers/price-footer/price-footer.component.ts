import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { CATEGORYTYPE } from 'src/app/client/service/_models/categoryType';
import { servers } from 'src/app/client/service/_models/configuration';
import { SocketData } from 'src/app/client/service/_models/socketData';

@Component({
  selector: 'app-price-footer',
  templateUrl: './price-footer.component.html',
  styleUrls: ['./price-footer.component.scss']
})
export class PriceFooterComponent implements OnInit {
  connection = webSocket(servers.real);
  footerList: SocketData[] = [];
  footerListReplace: SocketData[] = [];

  constructor() {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.connection.subscribe((data: SocketData[]  | any) => {
      if (this.footerList) {
        this.footerList = [];
      }

      data.forEach((item: SocketData) => {
        if (item.Category === CATEGORYTYPE.DOVIZ || item.Category === CATEGORYTYPE.PARITE || item.Category === CATEGORYTYPE.KRIPTO) {
          this.footerList.push(item);
        }
      });
      if (this.footerListReplace.length !== 0) {
        if (JSON.stringify(this.footerListReplace) === JSON.stringify(this.footerList)) {

        } else {
          this.footerList.forEach((data, index) => {
            if (data.Ask !== this.footerListReplace[index].Ask) {
              this.percentChange(data, this.footerListReplace[index], index);
            } else {
              data.askPercentChange = 0.00;
              this.footerListReplace[index].askPercentChange = data.askPercentChange;
            }
          });
        }
      } else {
        this.footerListReplace = this.footerList;
      }
    });
  }

  trackByPrice(index: number, code: { Ask: any; }) {
    return code.Ask;
  }

  percentChange(newData: SocketData, oldData: SocketData, index: number) {
    if (newData.Ask != oldData.Ask) {
      let oldAskPrice = +oldData.Ask;
      let newAskPrice = +newData.Ask;
      let askPriceDifference = (1 - (oldAskPrice / newAskPrice)) * 100;
      newData.askPercentChange = +askPriceDifference.toFixed(2);
      newData.Time = Date.now();
      if (askPriceDifference < 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      } else if (askPriceDifference > 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      }
    }
  }

}
