import { AddCarModalComponent } from "../components/AddCarModalComponent.mjs";
import { BasePage } from "./BasePage.mjs";

export class GaragePage extends BasePage {
    constructor (page) {
        super(page, "/panel/garage")
        this._header = this._page.getByText("Garage")
        this._notification = this._page.getByText("Registration complete")
        this._header = this._page.getByText("You don’t have any cars in your garage")
        this._buttonAddCar = this._page.getByRole("button", {name: "Add car"})
        this._AddCarModalComponent = new AddCarModalComponent(this._page)
        this._garageHeader = this._page.locator(".panel-page_heading")
    }

    async addCar(carBrand, carModel , mileage) {
        await this._buttonAddCar.click()
        await this._AddCarModalComponent.addNewCar(carBrand, carModel , mileage)
    }
}