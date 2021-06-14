import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MozambiqueComponent } from './mozambique.component';

describe('MozambiqueComponent', () => {
  let component: MozambiqueComponent;
  let fixture: ComponentFixture<MozambiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MozambiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MozambiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
