import { Component, OnInit } from '@angular/core';
import { Family } from '../domain/Family';
import { FamilyService } from '../service/FamilyService';

@Component({
    templateUrl: './family.component.html'
})
export class FamilyComponent implements OnInit {

    newFamilyName: string;
    newFamilyHeadCount: number;
    newFamilyBeingCreated: boolean;
    families: Family[] = [];
    errorMessage: string;

    constructor(private readonly familyService: FamilyService) {
    }

    ngOnInit(): void {
        this.resetToEmptyNewFamily();
        this.getAllFamilies();
    }

    toggleAddButton(): void {
        this.newFamilyBeingCreated = !this.newFamilyBeingCreated;
    }

    createButtonClicked(): void {
        this.familyService.create(this.newFamilyName, this.newFamilyHeadCount)
            .subscribe(
                data => {},
                error => this.errorMessage = error);
        this.resetToEmptyNewFamily();
        this.getAllFamilies();
    }

    private resetToEmptyNewFamily(): void {
        this.newFamilyName = '';
        this.newFamilyHeadCount = 0;
        this.newFamilyBeingCreated = false;
    }

    private getAllFamilies() {
        this.familyService.getAll().subscribe(data => this.families = data);
    }
}
