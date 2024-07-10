import {test, expect} from "@playwright/test"
import { MainPage } from "../src/pages/MainPage.mjs"
import { GaragePage } from "../src/pages/GaragePage.mjs"


test.describe("Registration form positive and negative scenarious", async () => {
    test.beforeEach(async ({page}) => {
        const homePage = new MainPage(page)
        await homePage.navigate()
    })
    test("Register new user, Positive scenario", async ({page}) => {
        const homePage = new MainPage(page)
        await homePage.registerNewUser()
        const garagePage = new GaragePage(page)
        await expect.soft(garagePage._notification).toBeVisible()
    })

    test("Validation of Name input field, ", async ({page}) => {
        const homePage = new MainPage(page)
        await homePage.validationNameInput()
        await expect.soft(homePage._nameInvalidError).toBeHidden()
        await expect.soft(homePage._nameLengthError).toBeHidden()
    })

    test("Validation of Last Name input field, ", async ({page}) => {
        const homePage = new MainPage(page)
        await homePage.validationLastNameInput()
        await expect.soft(homePage._lastNameInvalidError).toBeHidden()
        await expect.soft(homePage._lastNameLengthError).toBeHidden()
    })

    test("Email input field validation", async ({page}) => {
        const homePage = new MainPage(page)
        await homePage.validationEmailInput()
        await expect.soft(homePage._emailInvalidError).toBeHidden()
    })

    test("Validation of Password input", async ({page}) => {
        const homePage = new MainPage(page)
        await homePage.validationPasswordInput()
    })

    test("Validation of Re-Enter password input", async ({page}) => {
        const homePage = new MainPage(page)
        await homePage.validationRePasswordInput()
        await expect.soft(homePage._rePasswordLengthError).toBeHidden()
    })
})
