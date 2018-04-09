export class Family {

    static create(id: number, name: string, headCount: number = 0): Family {
        let trimmedName: string = name.trim();
        if(trimmedName === '') throw new Error('Family name is empty');
        if(headCount < 0) throw new Error(`Family head count is invalid: ${headCount}`);

        return new Family(id, trimmedName, headCount);
    }

    private constructor(public readonly id: number, public readonly name: string, public readonly headCount: number = 0){

    }
}