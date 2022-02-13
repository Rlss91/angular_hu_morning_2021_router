import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsExampleTComponent } from './params-example-t.component';

describe('ParamsExampleTComponent', () => {
  let component: ParamsExampleTComponent;
  let fixture: ComponentFixture<ParamsExampleTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsExampleTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsExampleTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
