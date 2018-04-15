import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdataFormComponent } from './sdata-form.component';

describe('SdataFormComponent', () => {
  let component: SdataFormComponent;
  let fixture: ComponentFixture<SdataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
