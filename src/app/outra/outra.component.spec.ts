import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutraComponent } from './outra.component';

describe('OutraComponent', () => {
  let component: OutraComponent;
  let fixture: ComponentFixture<OutraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
