import { Component, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material';
import {FormControl, NgModel} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

declare var require: any;
const data: any = require('assets/fees.json');
@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent {
  selectedMonth='';
  editing = {};
    rows = [];
    temp = [...data];

    loadingIndicator = true;
    reorderable = true;

    columns = [
        { prop: 'exchange' },
        { prop: 'dataTimeliness' },
        { prop: 'feeType' },
        { prop: 'currency' },
        { prop: 'fee' }
    ];
    @ViewChild(FeesComponent) table: FeesComponent;
    constructor() {
        this.rows = data;
        this.temp = [...data];
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
      this.selectedMonth='May 2018';
    }

    updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
        let filteredResult = (d.exchange.toLowerCase().indexOf(val) !== -1 || !val)
                             || (d.dataTimeliness.toLowerCase().indexOf(val)!== -1 || !val)
                             || (d.feeType.toLowerCase().indexOf(val) !== -1 || !val)
                             || (d.currency.toLowerCase().indexOf(val)!== -1 || !val)
                             || (d.fee.toLowerCase().indexOf(val)!== -1 || !val);
        return filteredResult;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    }
    updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
    }


    // this is for the start date
    startDate = new Date(1990, 0, 1);

    // Datepicker selected value
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());

    // Datepicker input and change event

    events: string[] = [];

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.events.push(`${type}: ${event.value}`);
    }
}
