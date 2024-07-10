import { BasePage } from "./BasePage.mjs";

export class GaragePage extends BasePage {
    constructor (page) {
        super(page, "/panel/garage")
        this._header = this._page.getByText("Garage")
        this._notification = this._page.getByText("Registration complete")
    }

}