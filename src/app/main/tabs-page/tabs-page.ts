import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs-page.html',
})
export class TabsPage {
  ionViewDidEnter() {
    const spinner = document.getElementById('install-loading-spinner');
    spinner.parentNode.removeChild(spinner);
  }
}
