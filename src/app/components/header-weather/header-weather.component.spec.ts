import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWeatherComponent } from './header-weather.component';

describe('HeaderWeatherComponent', () => {
  let component: HeaderWeatherComponent;
  let fixture: ComponentFixture<HeaderWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
