import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section9LabComponent } from './section9-lab.component';

describe('Section9LabComponent', () => {
  let component: Section9LabComponent;
  let fixture: ComponentFixture<Section9LabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section9LabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section9LabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
