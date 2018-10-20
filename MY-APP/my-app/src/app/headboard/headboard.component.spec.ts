import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadboardComponent } from './headboard.component';

describe('HeadboardComponent', () => {
  let component: HeadboardComponent;
  let fixture: ComponentFixture<HeadboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
