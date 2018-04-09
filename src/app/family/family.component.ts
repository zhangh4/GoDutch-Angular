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

    onAddButtonClicked(): void {
        this.newFamilyBeingCreated = true;
    }

    onCreateButtonClicked(): void {
        this.familyService.create(this.newFamilyName, this.newFamilyHeadCount)
            .subscribe(
                data => {
                    this.resetToEmptyNewFamily();
                    this.getAllFamilies();
                },
                error => {
                    this.errorMessage = error;
                });
    }

    onCancelButtonClicked(): void {
        this.resetToEmptyNewFamily();        
    }

    private resetToEmptyNewFamily(): void {
        this.newFamilyName = '';
        this.newFamilyHeadCount = 0;
        this.newFamilyBeingCreated = false;
        this.errorMessage = '';
    }

    private getAllFamilies() {
        this.familyService.getAll().subscribe(data => this.families = data);
    }
}
