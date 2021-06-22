export interface CurrentWeatherDayInterface {
  temp: number;
  weather: string;
  humidity: number;
  feelsLike: number;
  pressure: number;
  windSpeed: number;
  sunrise: string;
  sunset: string;
  dt: number;
  currentDay: boolean;
  img: {
    icon: string;
    description: string;
  };
  // city: string;
}

export interface OtherWeatherDayInterface {
  maxTemp: number;
  minTemp: number;
  weather: string;
  humidity: number;
  windSpeed: number;
  sunrise: string;
  sunset: string;
  dt: number;
  currentDay: boolean;
  img: {
    icon: string;
    description: string;
  };
}

export interface WeatherParamsInfo {
  feelsLike?: number;
  pressure?: number;
  maxTemp?: number;
  minTemp?: number;
  windSpeed: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  currentDay: boolean;
}

export interface WeatherParams extends WeatherParamsInfo {
  temp?: number;
  weather: string;
  img: {
    icon: string;
    description: string;
  };
}
