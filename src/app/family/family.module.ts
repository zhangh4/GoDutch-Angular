import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyComponent } from './family.component';
import { FamilyService } from '../service/FamilyService';
import { FamilyInMemoryService } from '../service/FamilyInMemoryService';

@NgModule(
    {
        imports: [
            RouterModule.forChild([
                { path: 'families', component: FamilyComponent },
            ]),
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