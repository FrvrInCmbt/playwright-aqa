import {BaseComponent} from "../components/BaseComponent.mjs"

export class LogInModalComponent extends BaseComponent {
    constructor(page){
        super(page, page.locator('app-signin-modal'))
        this._emailInput = this._container.locator('#signinEmail')
        this._passwordInput = this._container.locator('#signinPassword')
        this._loginButton = this._container.getByRole('button', {name: 'Login'})
    }

    async login(login, password){
        await this._emailInput.fill(login)
        await this._passwordInput.fill(password)
        await this._loginButton.click()
    }
}