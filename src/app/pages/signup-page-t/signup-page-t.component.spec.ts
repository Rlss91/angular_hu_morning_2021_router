import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPageTComponent } from './signup-page-t.component';

describe('SignupPageTComponent', () => {
  let component: SignupPageTComponent;
  let fixture: ComponentFixture<SignupPageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPageTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
