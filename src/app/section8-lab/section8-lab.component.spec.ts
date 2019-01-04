import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section8LabComponent } from './section8-lab.component';

describe('Section8LabComponent', () => {
  let component: Section8LabComponent;
  let fixture: ComponentFixture<Section8LabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section8LabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section8LabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
