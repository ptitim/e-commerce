import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritpionComponent } from './inscritpion.component';

describe('InscritpionComponent', () => {
  let component: InscritpionComponent;
  let fixture: ComponentFixture<InscritpionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscritpionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritpionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
