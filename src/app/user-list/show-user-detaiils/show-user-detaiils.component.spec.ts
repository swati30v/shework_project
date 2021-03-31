import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserDetaiilsComponent } from './show-user-detaiils.component';

describe('ShowUserDetaiilsComponent', () => {
  let component: ShowUserDetaiilsComponent;
  let fixture: ComponentFixture<ShowUserDetaiilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserDetaiilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserDetaiilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
