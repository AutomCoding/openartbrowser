import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InformationComponent } from './information.component';
import { BadgeComponent } from '../badge/badge.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

describe('InformationComponent', () => {
  let component: InformationComponent;
  let fixture: ComponentFixture<InformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })],
      declarations: [InformationComponent, BadgeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
