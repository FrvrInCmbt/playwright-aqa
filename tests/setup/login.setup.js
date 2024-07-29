import { test as setup } from "@playwright/test"
import { MainPage } from "../../src/pages/MainPage.mjs"

const USER = process.env.TEST_USER_EMAIL
const PASSWORD = process.env.TEST_USER_PASSWORD

setup("Login", async ({page})=> {
    const homePage = new MainPage(page)
    await homePage.navigate()
    await homePage.garageLoggedIn(USER, PASSWORD)
    await page.getByRole("button", {name: "Add car"}).waitFor()
    await page.context().storageState({path: "session-storage.json"})
})