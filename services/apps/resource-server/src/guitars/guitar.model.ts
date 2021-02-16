export class Guitar {
    private _brand: string;
    private _model: string;

    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
    }

    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        this._model = value;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }
    
}