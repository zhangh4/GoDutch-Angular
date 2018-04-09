import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventListComponent } from './eventList.component';

@NgModule(
    {
        imports: [
            RouterModule.forChild([
                { path: 'events', component: EventListComponent },
            ]),
        ],
        declarations: [
            EventListComponent
        ],
        providers: [

        ]
    }
)
export class EventModule { }