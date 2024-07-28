import {test} from "@playwright/test"
import { MainPage } from "../src/pages/MainPage.mjs"
import { GaragePage } from "../src/pages/GaragePage.mjs"

const USER = process.env.TEST_USER_EMAIL
const PASSWORD = process.env.TEST_USER_PASSWORD

export const loggedGaragePageTest = test.extend({
    loggedGaragePage: async ({page}, use) => {
        const homePage = new MainPage(page)
        await homePage.navigate()
        await homePage.garageLoggedIn(USER, PASSWORD)
        await page.getByRole("button", {name: "Add car"}).waitFor()
        await use(page)
    },

    //addCarLoggedUser: async ({loggedGaragePage}, use) => {
    //    const garagePage = new GaragePage(loggedGaragePage)
    //    await garagePage.navigate()
    //    await garagePage.addCar("Ford", "Mondeo", 500)
    //    await use(loggedGaragePage)
    //},

    storagePage: async ({browser}, use) => {
        const pageFromStorage = await browser.newPage({storageState: "session-storage.json"})
        await use(pageFromStorage)
    }
})