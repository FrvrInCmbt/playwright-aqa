import {test} from "@playwright/test"
import { GaragePage } from "../../src/pages/GaragePage.mjs"


test.describe("carsss", async() => {
    test("add car", async({page}) => {
        const garagePage = new GaragePage(page)
        await garagePage.navigate()
        await garagePage.addCar("Porsche", "Cayenne", 500)
        await page.pause()
    })
})
