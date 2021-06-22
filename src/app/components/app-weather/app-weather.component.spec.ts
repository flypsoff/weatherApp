import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeatherComponent } from './app-weather.component';

describe('AppWeatherComponent', () => {
  let component: AppWeatherComponent;
  let fixture: ComponentFixture<AppWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
