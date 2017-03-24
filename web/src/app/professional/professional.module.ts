import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from 'app/shared/shared.module';

//components
import { ProfessionalComponent } from './professional.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

//services
import { ProfessionalService } from "../shared/service/professional.service";

//routing
import { professionalRouting } from './professional.routing';

@NgModule({
    imports: [professionalRouting, CommonModule, FormsModule, HttpModule, SharedModule],
    declarations: [ProfessionalComponent,ProfessionalListComponent, ProfessionalDetailsComponent],
    providers: [ProfessionalService]
})

export class ProfessionalModule { }