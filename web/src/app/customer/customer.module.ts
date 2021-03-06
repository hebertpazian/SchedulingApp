import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

//components
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

//services
import { CustomerService } from "../shared/services/customer.service";
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { CustomerRoutingModule } from './customer.routing';

@NgModule({
    imports: [CustomerRoutingModule, SharedModule],
    declarations: [CustomerComponent,CustomerListComponent, CustomerDetailsComponent],
    providers: [CustomerService, ProfessionalService]
})

export class CustomerModule { }