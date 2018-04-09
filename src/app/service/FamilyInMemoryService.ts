import { FamilyService } from './FamilyService';
import { Family } from '../domain/Family';
import * as _  from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FamilyInMemoryService extends FamilyService {

    private static seed: number = 1;

    private families: Family[] = [];

    create(name: string, headCount: number = 0): Observable<Family> {
        let newFamily = Family.create(FamilyInMemoryService.seed++, name, headCount);
        if(_.find(this.families, f => f.name === newFamily.name)) throw new Error(`Family already exists with name = ${newFamily.name}`);
        this.families.push(newFamily);
        return of(newFamily);
    }

    getAll(): Observable<Family[]> {
        return of(this.families);
    }
}