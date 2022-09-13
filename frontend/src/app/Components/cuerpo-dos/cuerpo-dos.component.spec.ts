import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoDosComponent } from './cuerpo-dos.component';

describe('CuerpoDosComponent', () => {
  let component: CuerpoDosComponent;
  let fixture: ComponentFixture<CuerpoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
