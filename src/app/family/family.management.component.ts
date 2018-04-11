import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FamilyService } from "../service/FamilyService";
import { Family } from "../domain/Family";


@Component({
    selector: 'family-management',
    templateUrl: './family.management.component.html'
})
export class FamilyManagementComponent {
    @Input() family: Family;
    @Output() onFamilyAdded = new EventEmitter<Family>();
    isWriteMode: boolean = false;
    errorMessage: string = '';

    private _originalFamily: Family;

    constructor(private readonly familyService: FamilyService) {
        
    }

    get isUpdateMode() : boolean {
        return this.family && this.family.id ? true : false;
    }

    onStartButtonClicked(): void {
        this.isWriteMode = true;
        this.errorMessage = '';
        this.family = this.family || Family.createEmpty();
        if(this.isUpdateMode){
            // clone a shallow copy in case of cancel
            this._originalFamily = { ...this.family }; 
        }
        else {
            this.family = Family.createEmpty();
        }
    }

    onSaveButtonClicked(): void {
        this.familyService.upsert(this.family)
            .subscribe(
                upsertedFamily => {
                    this.isWriteMode = false;
                    this.errorMessage = '';
                    if(!this.isUpdateMode){
                        this.family = Family.createEmpty();
                        this.onFamilyAdded.emit(upsertedFamily);
                    }
                },
                error => {
                    this.errorMessage = error;
                });
    }

    onCancelButtonClicked(): void {
        this.isWriteMode = false;
        this.family = this._originalFamily;
    }
}