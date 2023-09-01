import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPeliculasComponent } from './admin-peliculas.component';

describe('AdminPeliculasComponent', () => {
  let component: AdminPeliculasComponent;
  let fixture: ComponentFixture<AdminPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
