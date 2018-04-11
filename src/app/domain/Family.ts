export class Family {

    static cleanse(family: Family) {
        family.name = family.name.trim();
        if(family.name === '') throw new Error('Family name is empty');
        if(family.headCount < 0) throw new Error(`Family head count is invalid: ${family.headCount}`);
    }

    static createEmpty(): Family {
        return new Family(null, '', 0);
    }

    private constructor(public id: number | null, public name: string, public headCount: number = 0){

    }
}