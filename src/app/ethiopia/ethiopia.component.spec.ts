import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthiopiaComponent } from './ethiopia.component';

describe('EthiopiaComponent', () => {
  let component: EthiopiaComponent;
  let fixture: ComponentFixture<EthiopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthiopiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthiopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
