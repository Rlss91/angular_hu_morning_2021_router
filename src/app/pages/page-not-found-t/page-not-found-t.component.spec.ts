import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundTComponent } from './page-not-found-t.component';

describe('PageNotFoundTComponent', () => {
  let component: PageNotFoundTComponent;
  let fixture: ComponentFixture<PageNotFoundTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
