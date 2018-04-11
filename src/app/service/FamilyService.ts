import { Family } from '../domain/Family'
import { Observable } from 'rxjs/Observable';
import { FamilyValue } from '../domain/FamilyValue';

export abstract class FamilyService {
    abstract upsert(id: number | undefined, value: FamilyValue) : Observable<Family>;
    abstract getAll() : Observable<Family[]>;
}