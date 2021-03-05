import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor( public themeService: ThemeService ) { }
}
