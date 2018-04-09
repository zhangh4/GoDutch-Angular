import { Family } from '../domain/Family'
import { Observable } from 'rxjs/Observable';

export abstract class FamilyService {
    abstract create(name: string, headCount?: number) : Observable<Family>;
    abstract getAll() : Observable<Family[]>;
}