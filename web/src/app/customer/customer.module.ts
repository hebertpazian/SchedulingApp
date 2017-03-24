import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from 'app/shared/shared.module';

//components
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

//services
import { CustomerService } from "../shared/services/customer.service";
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { customerRouting } from './customer.routing';

@NgModule({
    imports: [customerRouting, CommonModule, FormsModule, HttpModule, SharedModule],
    declarations: [CustomerComponent,CustomerListComponent, CustomerDetailsComponent],
    providers: [CustomerService, ProfessionalService]
})

export class CustomerModule { }