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

}
