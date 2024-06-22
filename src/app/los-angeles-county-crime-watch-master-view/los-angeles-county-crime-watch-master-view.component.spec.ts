import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES } from 'igniteui-angular';
import { LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent } from './los-angeles-county-crime-watch-master-view.component';

describe('LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent', () => {
  let component: LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent;
  let fixture: ComponentFixture<LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
