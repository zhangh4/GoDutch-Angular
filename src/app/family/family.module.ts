import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyComponent } from './family.component';
import { FamilyService } from '../service/FamilyService';
import { FamilyInMemoryService } from '../service/FamilyInMemoryService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule(
    {
        imports: [
            RouterModule.forChild([
                { path: 'families', component: FamilyComponent },
            ]),
            CommonModule,
            FormsModule,
        ],
        declarations: [
            FamilyComponent
        ],
        providers: [
            {provide: FamilyService, useClass: FamilyInMemoryService}
        ]
    }
)
export class FamilyModule { }