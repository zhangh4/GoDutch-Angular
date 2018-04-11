import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FamilyService } from "../service/FamilyService";
import { Family } from "../domain/Family";
import { FamilyValue } from "../domain/FamilyValue";


@Component({
    selector: 'family-management',
    templateUrl: './family.management.component.html'
})
export class FamilyManagementComponent {
    @Input() family: Family;
    @Output() onFamilyUpserted = new EventEmitter<Family>();
    isWriteMode: boolean = false;
    errorMessage: string = '';
    value: FamilyValue;

    constructor(private readonly familyService: FamilyService) {

    }

    get isUpdateMode(): boolean {
        return this.family !== undefined;
    }

    onStartButtonClicked(): void {
        this.isWriteMode = true;
        this.errorMessage = '';
        this.value = this.family ? FamilyValue.fromEntity(this.family) : FamilyValue.createEmpty();
    }

    onSaveButtonClicked(): void {
        this.familyService.upsert(this.family && this.family.id, this.value)
            .subscribe(
                upsertedFamily => {
                    this.isWriteMode = false;
                    this.onFamilyUpserted.emit(upsertedFamily);
                },
                error => {
                    this.errorMessage = error;
                });
    }

    onCancelButtonClicked(): void {
        this.isWriteMode = false;
    }
}