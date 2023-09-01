import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsPeliculaComponent } from './views-pelicula.component';

describe('ViewsPeliculaComponent', () => {
  let component: ViewsPeliculaComponent;
  let fixture: ComponentFixture<ViewsPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
