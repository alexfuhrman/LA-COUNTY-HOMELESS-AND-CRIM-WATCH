import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent } from './los-angeles-county-crime-watch-master-view/los-angeles-county-crime-watch-master-view.component';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IGX_LIST_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
