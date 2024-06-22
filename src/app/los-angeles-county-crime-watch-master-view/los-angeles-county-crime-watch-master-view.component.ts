import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-los-angeles-county-crime-watch-master-view',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, RouterOutlet],
  templateUrl: './los-angeles-county-crime-watch-master-view.component.html',
  styleUrls: ['./los-angeles-county-crime-watch-master-view.component.scss']
})
export class LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent {}
