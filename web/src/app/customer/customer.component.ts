import { Component, OnInit } from '@angular/core';

import { Customer } from './shared/customer.model';
import { Professional } from './../professional/shared/professional.model';

import { CustomerService } from './customer.service';
import { ProfessionalService } from './../professional/professional.service';

@Component({
    moduleId: module.id,
    selector: 'ava-cus-app',
    templateUrl: 'customer.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class CustomerComponent implements OnInit {

    constructor(private _customerService: CustomerService, private _professionalService: ProfessionalService) { }

    private customers: Customer[];
    private sponsors: Professional[];

    ngOnInit() {
        this._professionalService.getProfessionalList().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._customerService.getCustomers().then((customerList: Customer[]) => this.customers = customerList).catch((error: Error) => { throw error });
    }

    getSponsorName(customer: Customer): string {
        return this.sponsors.find(s => s.professionalId === customer.sponsor).name
    }
}
