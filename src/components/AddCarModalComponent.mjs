import {BaseComponent} from "../components/BaseComponent.mjs"

export class AddCarModalComponent extends BaseComponent {
    constructor(page){
        super(page, page.locator('.modal-content'))
        this._carBrandSelector = this._container.locator("#addCarBrand")
        this._carModelSelector = this._container.locator("#addCarModel")
        this._mileageInput = this._container.locator("#addCarMileage")
        this._addCarButton = this._container.getByRole("button", {name: "Add"})
    }

    async addNewCar(_carBrand, _carModel, _mileage) {
        await this._carBrandSelector.click()
        await this._carBrandSelector.selectOption("Porsche")
        await this._carModelSelector.click()
        await this._carModelSelector.selectOption("Cayenne")
        await this._mileageInput.fill("500")
        await this._addCarButton.click()
    }
}

