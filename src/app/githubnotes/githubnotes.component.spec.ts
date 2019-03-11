import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubnotesComponent } from './githubnotes.component';

describe('GithubnotesComponent', () => {
  let component: GithubnotesComponent;
  let fixture: ComponentFixture<GithubnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
