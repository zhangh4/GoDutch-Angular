import { FamilyValue } from "./FamilyValue";

export class Family extends FamilyValue {

    static fromValue(id: number, value: FamilyValue): Family {
        return new Family(id, value.name, value.headCount);
    }

    constructor(public readonly id: number, public readonly name: string, public readonly headCount: number = 0){
        super(name, headCount);
    }
}