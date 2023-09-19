import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerosComponent } from './admin-generos.component';

describe('AdminGenerosComponent', () => {
  let component: AdminGenerosComponent;
  let fixture: ComponentFixture<AdminGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
