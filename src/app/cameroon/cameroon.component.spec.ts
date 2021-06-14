import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camerooncomponent } from './camerooncomponent';

describe('Camerooncomponent', () => {
  let component: Camerooncomponent;
  let fixture: ComponentFixture<Camerooncomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Camerooncomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Camerooncomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
