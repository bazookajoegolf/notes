import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7LabComponent } from './section7-lab.component';

describe('Section7LabComponent', () => {
  let component: Section7LabComponent;
  let fixture: ComponentFixture<Section7LabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section7LabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section7LabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
