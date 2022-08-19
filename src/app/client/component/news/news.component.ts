import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { NewsapiService } from '../../service/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private _services:NewsapiService) { }

  technewsDisplay:any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;
    });
  }

  // @Output() livePriceEvent: EventEmitter<any> = new EventEmitter<any>();

  // public rssItems: any;
  // header: HttpHeaders = new HttpHeaders().set('Content-Type', 'text/xml');
  // public domainname: any = '';

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.getRSS('https://www.milliyet.com.tr/rss/rssnew/ekonomirss.xml');
  //   console.log(this.rssItems);
  // }

  // getRSS(rss: any) {
  //   const requestOptions: Object = {
  //     observe: 'body',
  //     responseType: 'text',
  //     headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' }),
  //   };
  //   this.http
  //     .get(
  //       'https://corsapi.aifanet.com/' + rss.replace('https://', ''),
  //       requestOptions
  //     )
  //     .subscribe((data) => {
  //       // console.log(data);

  //       this.getMilliyet(data).then((data) => {
  //         this.rssItems = data;
  //       });
  //     });
  // }

  // getMilliyet(data: any) {
  //   // console.log(data);
  //   const arr: any[] = [];
  //   return new Promise((resolve) => {
  //     let k: string | number;
  //     const arr: any[] = [],
  //       parser = new xml2js.Parser({
  //         trim: true,
  //         explicitArray: true,
  //       });
  //     parser.parseString(data, function (err: any, result: any) {
  //       let obj = result;
  //       for (k in obj.rss.channel[0].item) {
  //         let data = obj.rss.channel[0].item[k];
  //         arr.push({
  //           title: data.title[0],
  //           pubDate: data.pubDate[0],
  //           link: data['atom:link'][0].$.href,
  //           newsdate: data.pubDate[0],
  //         });
  //       }
  //     });
  //     resolve(arr);
  //   });
  // }
}