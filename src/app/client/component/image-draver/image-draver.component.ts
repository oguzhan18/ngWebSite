import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-image-draver',
  templateUrl: './image-draver.component.html',
  styleUrls: ['./image-draver.component.scss']
})
export class ImageDraverComponent implements OnInit {

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
