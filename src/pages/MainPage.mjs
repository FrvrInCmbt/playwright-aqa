import faker from "faker";
import { BasePage } from "./BasePage.mjs";

export class MainPage extends BasePage {
    constructor (page) {
        super(page, "/")
        this._header = this._page.locator('.header')
        this._signInBtn = this._header.getByRole('button', {name: 'Sign in'})
        this._signInModal = this._page.locator(".modal-footer")
        this._registrationBtn = this._signInModal.getByRole("button", {name: "Registration"})
        this._registrationModal = this._page.locator(".modal-content")
        this._firstName = this._registrationModal.locator("#signupName")
        this._lastName = this._registrationModal.locator("#signupLastName")
        this._emailInput = this._registrationModal.locator("#signupEmail")
        this._passwordInput = this._registrationModal.locator("#signupPassword")
        this._reEnterPasswordInput = this._registrationModal.locator("#signupRepeatPassword")
        this._registerBtn = this._registrationModal.getByText("Register")
        this._nameRequiredError = this._registrationModal.locator(".invalid-feedback")
        this._nameInvalidError = this._registrationModal.getByText("Name is invalid")
        this._nameLengthError = this._registrationModal.getByText("Name has to be from 2 to 20 characters long")
        this._lastNameRequiredError = this._registrationModal.getByText("Last name required")
        this._lastNameInvalidError = this._registrationModal.getByText("Last name is invalid")
        this._lastNameLengthError = this._registrationModal.getByText("Last name has to be from 2 to 20 characters long")
        this._emailRequiredError = this._registrationModal.getByText("Email required")
        this._emailInvalidError = this._registrationModal.getByText("Email is invalid")
        this._passwordRequiredError = this._registrationModal.getByText("Password required")
        this._passwordLengthError = this._registrationModal.getByText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
        this._rePasswordRequiredError = this._registrationModal.getByText("Re-enter password required")
        this._rePasswordLengthError = this._registrationModal.getByText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")
    }

    async registerNewUser(){
        await this._signInBtn.click()
        await this._registrationBtn.click()
        await this._registrationModal
        await this._firstName.fill(faker.name.firstName())
        await this._lastName.fill(faker.name.lastName())
        await this._emailInput.fill(faker.internet.email())
        await this._passwordInput.fill("Test1234!")
        await this._reEnterPasswordInput.fill("Test1234!")
        await this._registerBtn.click()
    }

    async validationNameInput() {
        await this._signInBtn.click()
        await this._registrationBtn.click()
        await this._registrationModal
        await this._firstName.focus()
        await this._firstName.blur()
        await this._nameRequiredError
        await this._firstName.fill("1")
        await this._nameInvalidError
        await this._nameLengthError
        await this._firstName.fill(faker.name.firstName())
    }

    async validationLastNameInput() {
        await this._signInBtn.click()
        await this._registrationBtn.click()
        await this._registrationModal
        await this._lastName.focus()
        await this._lastName.blur()
        await this._lastNameRequiredError
        await this._lastName.fill("6732327!!^&")
        await this._lastNameInvalidError
        await this._lastNameLengthError
        await this._lastName.fill(faker.name.lastName())
    }

    async validationEmailInput() {
        await this._signInBtn.click()
        await this._registrationBtn.click()
        await this._registrationModal
        await this._emailInput.focus()
        await this._emailInput.blur()
        await this._emailRequiredError
        await this._emailInput.fill("C1#")
        await this._emailInvalidError
        await this._emailInput.fill(faker.internet.email())
    }

    async validationPasswordInput() {
        await this._signInBtn.click()
        await this._registrationBtn.click()
        await this._registrationModal
        await this._passwordInput.focus()
        await this._passwordInput.blur()
        await this._passwordRequiredError
        await this._passwordInput.fill("C1")
        await this._passwordInvalidError
        await this._passwordInput.fill(faker.internet.password())
    }

    async validationRePasswordInput() {
        await this._signInBtn.click()
        await this._registrationBtn.click()
        await this._registrationModal
        await this._reEnterPasswordInput.focus()
        await this._reEnterPasswordInput.blur()
        await this._rePasswordRequiredError
        await this._reEnterPasswordInput.fill("testsasatsatsatsg")
        await this._rePasswordLengthError
        await this._reEnterPasswordInput.fill(faker.internet.password())
    }
}