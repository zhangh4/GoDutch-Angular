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

    create(name: string, headCount: number = 0): Observable<Family> {
        try {
            let newFamily = Family.create(FamilyInMemoryService.seed++, name, headCount);
            if (_.find(this.families, f => f.name === newFamily.name)) throw new Error(`Family already exists with name = ${newFamily.name}`);
            this.families.push(newFamily);
            return of(newFamily);
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