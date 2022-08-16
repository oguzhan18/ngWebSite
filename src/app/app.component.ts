import { Component, OnInit } from '@angular/core';
import { ThemeService } from './client/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  title = 'asyildiz';
}
