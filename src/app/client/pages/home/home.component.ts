import { Component, OnInit } from '@angular/core';
declare const TradingView: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  ngAfterViewInit(){
    new TradingView.widget(
      {
        width: '100%',
        height: '25em',
        symbol: 'USD/TRY',
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
