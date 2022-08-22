import { Component, OnInit } from '@angular/core';


declare const TradingView: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    new TradingView.widget(
      {
        width: '100%',
        height: '25em',
        symbol: 'TRY/USD',
        timezone: 'Etc/UTC',
        theme: 'dark',
        locale: 'tr',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        save_image: true,
        container_id: 'tradingview_f1799'
      }
    );
  }
}
