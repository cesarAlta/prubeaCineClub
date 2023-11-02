import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgLoadingComponent } from './bg-loading.component';

describe('BgLoadingComponent', () => {
  let component: BgLoadingComponent;
  let fixture: ComponentFixture<BgLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
