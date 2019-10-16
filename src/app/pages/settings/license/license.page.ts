import { Component, OnInit } from '@angular/core';
import { SettingsService, ILicense } from '../settings.service';

@Component({
  selector: 'license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {
  licenses: ILicense[] = [];
  constructor(private settings: SettingsService) {}

  ngOnInit() {
    this.settings.getLicenses().subscribe(l => (this.licenses = l));
  }
}
