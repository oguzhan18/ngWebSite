import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from 'src/app/client/service/theme.service';



@Component({
  selector: 'app-ourstores',
  templateUrl: './ourstores.component.html',
  styleUrls: ['./ourstores.component.scss']
})
export class OurstoresComponent implements OnInit {
  isDarkMode: boolean | any;
  showFiller = false;

  constructor(
    private themeService: ThemeService,
    private dialog: MatDialog
  ){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  ngOnInit() {
  }
  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | any;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }
}
