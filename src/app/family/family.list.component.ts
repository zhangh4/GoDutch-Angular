import { Component, OnInit } from '@angular/core';
import { Family } from '../domain/Family';
import { FamilyService } from '../service/FamilyService';

@Component({
    templateUrl: './family.list.component.html'
})
export class FamilyListComponent implements OnInit {
    
    families: Family[] = [];

    constructor(private readonly familyService: FamilyService) {
    }

    ngOnInit(): void {
        this.getAllFamilies();
    }

    onFamilyAdded(family: Family): void {
        this.getAllFamilies();
    }

    private getAllFamilies() {
        this.familyService.getAll().subscribe(data => this.families = data);
    }
}
