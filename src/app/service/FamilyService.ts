import { Family } from '../domain/Family'
import { Observable } from 'rxjs/Observable';

export abstract class FamilyService {
    abstract upsert(family: Family) : Observable<Family>;
    abstract getAll() : Observable<Family[]>;
}