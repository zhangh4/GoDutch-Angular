import { FamilyService } from './FamilyService';
import { Family } from '../domain/Family';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { FamilyValue } from '../domain/FamilyValue';

@Injectable()
export class FamilyInMemoryService extends FamilyService {

    private static seed: number = 1;

    private families: Family[] = [];

    upsert(id: number | undefined, value: FamilyValue): Observable<Family> {
        try {
            FamilyValue.cleanse(value);
            if (_.find(this.families, f => f.id !== id && f.name === value.name)) {
                throw new Error(`Family already exists with name = ${value.name}`);
            }
            
            let familyToUpsert: Family;
            if(id){
                let index = _.findIndex(this.families, f => f.id === id);
                if(index === -1){
                    throw new Error(`Family does not exist for update with id = ${id}`);
                } 
                else {
                    familyToUpsert = Family.fromValue(id, value);
                    this.families.splice(index, 1, familyToUpsert);    
                }
            }
            else {
                familyToUpsert = Family.fromValue(FamilyInMemoryService.seed++, value);
                this.families.push(familyToUpsert);
            }
            
            return of(familyToUpsert);
        }
        catch (e) {
            // return Observable.throw("hello");
            return _throw((e as Error).message);
        }
    }

    getAll(): Observable<Family[]> {
        return of(this.families);
    }
}