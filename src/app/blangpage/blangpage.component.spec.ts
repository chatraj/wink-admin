import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlangpageComponent } from './blangpage.component';

describe('BlangpageComponent', () => {
  let component: BlangpageComponent;
  let fixture: ComponentFixture<BlangpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlangpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlangpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
