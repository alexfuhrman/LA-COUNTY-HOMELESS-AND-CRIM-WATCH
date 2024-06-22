import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent } from './los-angeles-county-crime-watch-master-view.component';

describe('LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent', () => {
  let component: LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent;
  let fixture: ComponentFixture<LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IGX_LIST_DIRECTIVES ]
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
