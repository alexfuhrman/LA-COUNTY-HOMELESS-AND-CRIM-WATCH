import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IgxOverlayOutletDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-los-angeles-county-crime-watch-master-view',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxToggleDirective, IgxIconComponent],
  templateUrl: './los-angeles-county-crime-watch-master-view.component.html',
  styleUrls: ['./los-angeles-county-crime-watch-master-view.component.scss']
})
export class LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent {}
