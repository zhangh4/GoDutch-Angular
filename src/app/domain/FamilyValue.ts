import { Family } from "./Family";

export class FamilyValue {

    constructor(public name: string, public headCount?: number) {

    }

    static cleanse(familyValue: FamilyValue) {
        familyValue.name = familyValue.name.trim();
        if(familyValue.name === '') throw new Error('Family name is empty');
        if(familyValue.headCount && familyValue.headCount < 0) throw new Error(`Family head count is invalid: ${familyValue.headCount}`);
    }

    static createEmpty(): FamilyValue {
        return new FamilyValue('');
    }

    static fromEntity(family: Family): FamilyValue {
        return new FamilyValue(family.name, family.headCount);
    }
}