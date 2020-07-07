import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Account {
  id: number;
  accountNumber: string;
  accountSymbol: string;
  account: string;
  availableCash: number;
  percentChangeToday: string;
  amountChangeToday: number;
}

const ACCOUNT_DATA: Account[] = [
  {
    id: 1,
    accountNumber: '0029',
    accountSymbol: 'AAA',
    account: 'AAA - 0029',
    availableCash: 39160334.42,
    percentChangeToday: '-0.07%',
    amountChangeToday: 31435.87,
  },
  {
    id: 2,
    accountNumber: '0146',
    accountSymbol: 'IRA',
    account: 'IRA - 0146',
    availableCash: 15884302.39,
    percentChangeToday: '+0.03%',
    amountChangeToday: 7430.83,
  },
  {
    id: 3,
    accountNumber: '1812',
    accountSymbol: 'AAA',
    account: 'AAA - 1812',
    availableCash: 2010926.1,
    percentChangeToday: '+0.21%',
    amountChangeToday: 38881.63,
  },
  {
    id: 4,
    accountNumber: '2019',
    accountSymbol: 'REG',
    account: 'REG - 2019',
    availableCash: 13465679.34,
    percentChangeToday: '0.00%',
    amountChangeToday: 0.0,
  },
  {
    id: 5,
    accountNumber: '3810',
    accountSymbol: 'AAA',
    account: 'AAA - 3810',
    availableCash: 10050054.07,
    percentChangeToday: '+0.07%',
    amountChangeToday: 8916.69,
  },
  {
    id: 6,
    accountNumber: '5200',
    accountSymbol: 'IRA',
    account: 'IRA - 5200',
    availableCash: 5763.36,
    percentChangeToday: '-0.08%',
    amountChangeToday: 8916.69,
  },
];

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['accountNumber', 'availableCash'];
  dataSource = new MatTableDataSource(ACCOUNT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
