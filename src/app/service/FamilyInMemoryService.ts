import { FamilyService } from './FamilyService';
import { Family } from '../domain/Family';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class FamilyInMemoryService extends FamilyService {

    private static seed: number = 1;

    private families: Family[] = [];

    upsert(family: Family): Observable<Family> {
        try {
            Family.cleanse(family);
            if (_.find(this.families, f => f !== family && f.name === family.name)) throw new Error(`Family already exists with name = ${family.name}`);
            if(family.id){
                // let index = _.findIndex(this.families, f => f.id === family.id);
                // if(index === -1) throw new Error(`Family does not exist for update with id = ${family.id}`);
                
                // this.families.splice(index, 1, family);
            }
            else {
                family.id = FamilyInMemoryService.seed++;
                this.families.push(family);
            }
            
            return of(family);
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