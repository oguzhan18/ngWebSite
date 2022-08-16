import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-phone-website',
  templateUrl: './phone-website.component.html',
  styleUrls: ['./phone-website.component.scss']
})
export class PhoneWebsiteComponent implements OnInit {

  isDarkMode: boolean;
  showFiller = false;

  constructor(private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  ngOnInit() { }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
    // if (this.isDarkMode== false) {
    //   console.log("false");
    // } else {
    //   console.log("true");
    // }
  }
}
