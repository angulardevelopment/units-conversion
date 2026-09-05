import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [FormsModule]
})
export class MainComponent implements OnInit {
  constructor() {}

  kiloMeter: number;
  meter: number;
  centiMetr: number;
  miliMetr: number;

  microMetr: number;
  decaMetr: number;
  nanoMetr: number;
  mile: number;

  yard: number;
  foot: number;
  inch: number;
  gajj: number;

  sqkilometer: number;
  sqmetr: number;
  sqmile: number;
  sqyard: number;

  sqft: number;
  sqinch: number;
  acre: number;
  hectare: number;
  ELEMENT_DATA = [
    {
      position: 1,
      name: 'square kilometer',
      weight: '1000000 sq. m',
      symbol: 'sq. km',
    },
    {
      position: 2,
      name: 'square meter',
      weight: '1.19 sq. yd',
      symbol: 'sq. m',
    },
    { position: 3, name: 'square mile', weight: '6.941', symbol: 'sq. mile' },
    {
      position: 4,
      name: 'square yard',
      weight: '9.0122',
      symbol: 'sq. yard',
      desc: 'it is also called gaj',
    },
    { position: 5, name: 'square foot', weight: '10.811', symbol: 'sq. foot' },
    { position: 6, name: 'square inch', weight: '12.0107', symbol: 'sq. inch' },
    { position: 7, name: 'acre', weight: '14.0067', symbol: 'acre' },
    {
      position: 8,
      name: 'hectare',
      weight: '11959.9 sq. yd',
      symbol: 'hectare',
    },

    { position: 9, name: 'kilometer', weight: '1000m', symbol: 'km' },
    { position: 10, name: 'meter', weight: '100cm', symbol: 'm' },
    { position: 2, name: 'centimeter', weight: '10mm', symbol: 'cm' },
    { position: 3, name: 'millimeter', weight: '.01dm', symbol: 'mm' },
    { position: 4, name: 'decameter', weight: '100mm', symbol: 'dm' },
    { position: 5, name: 'micrometer', weight: '0.001mm', symbol: 'um' },
    { position: 6, name: 'nanometer', weight: '0.001um', symbol: 'nm' },
    { position: 7, name: 'mile', weight: '0.621371km', symbol: 'mile' },
    { position: 8, name: 'yard', weight: '3ft', symbol: 'yard' },
    { position: 7, name: 'foot', weight: '30.48cm', symbol: 'foot' },
    { position: 8, name: 'inch', weight: '2.54cm', symbol: 'inch' },
  ];

  ngOnInit() {}

  kmChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.meter = parseFloat(tempValue) * 1000;
    this.centiMetr = parseFloat(tempValue) * 100000;
    this.miliMetr = parseFloat(tempValue) * 1e6;
    this.microMetr = parseFloat(tempValue) * 1e9;
    this.decaMetr = parseFloat(tempValue) * 10000;
    this.nanoMetr = parseFloat(tempValue) * 1e12;
    this.mile = parseFloat(tempValue) * 0.621371; // or divide length by 1.609
    this.yard = parseFloat(tempValue) * 1093.613;
    this.foot = parseFloat(tempValue) * 3280.84;
    this.inch = parseFloat(tempValue) * 39370.079;
  }

  mtrChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 1000;
    this.kmChanged(this.kiloMeter.toString());
  }

  cmChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 100000;
    this.kmChanged(this.kiloMeter.toString());
  }

  mmChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 1e6;
    this.kmChanged(this.kiloMeter.toString());
  }

  decaChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 10000;
    this.kmChanged(this.kiloMeter.toString());
  }

  microChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 1e9;
    this.kmChanged(this.kiloMeter.toString());
  }

  nanoChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 1e12;
    this.kmChanged(this.kiloMeter.toString());
  }

  mileChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) * 1.609;
    this.kmChanged(this.kiloMeter.toString());
  }

  yardChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 1093.613;
    this.kmChanged(this.kiloMeter.toString());
  }

  inchChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 39370.079;
    this.kmChanged(this.kiloMeter.toString());
  }

  footChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = parseFloat(tempValue) / 3280.84;
    this.kmChanged(this.kiloMeter.toString());
  }

  sqkmChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqmetr = parseFloat(tempValue) * 1e6;
    this.sqmile = parseFloat(tempValue) / 2.59;
    this.sqyard = parseFloat(tempValue) * 1.19e6;
    this.sqft = parseFloat(tempValue) * 1.076e7;
    this.sqinch = parseFloat(tempValue) * 1.55e9;
    this.acre = parseFloat(tempValue) * 247.105;
    this.hectare = parseFloat(tempValue) * 100;
  }
  sqmChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = parseFloat(tempValue) / 1e6;
    this.sqkmChanged(this.sqkilometer.toString());
  }
  sqmileChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = parseFloat(tempValue) * 2.59;
    this.sqkmChanged(this.sqkilometer.toString());
  }

  sqydChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = parseFloat(tempValue) / 1.19e6;
    this.sqkmChanged(this.sqkilometer.toString());
  }

  sqinchChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = parseFloat(tempValue) / 1.55e9;
    this.sqkmChanged(this.sqkilometer.toString());
  }

  acreChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = parseFloat(tempValue) / 247.105;
    this.sqkmChanged(this.sqkilometer.toString());
  }

  hectareChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = parseFloat(tempValue) / 100;
    this.sqkmChanged(this.sqkilometer.toString());
  }

  sqfootChanged(newvalue: string) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = parseFloat(tempValue) / 1.076e7;
    this.sqkmChanged(this.sqkilometer.toString());
  }
}
