import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyListComponent } from './family.list.component';
import { FamilyService } from '../service/FamilyService';
import { FamilyInMemoryService } from '../service/FamilyInMemoryService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FamilyManagementComponent } from './family.management.component';

@NgModule(
    {
        imports: [
            RouterModule.forChild([
                { path: 'families', component: FamilyListComponent },
            ]),
            CommonModule,
            FormsModule,
        ],
        declarations: [
            FamilyListComponent,
            FamilyManagementComponent
        ],
        providers: [
            {provide: FamilyService, useClass: FamilyInMemoryService}
        ]
    }
)
export class FamilyModule { }