import { expect } from "@playwright/test"

export class MenuPage {
    constructor(page) {
        this.page = page
        this.loggedUserLabel = page.locator('div[class="woocommerce-MyAccount-content"] > p > strong')
    }

    checkSuccessfullLogin = async (expectedUserName) => {
        await expect(this.loggedUserLabel).toHaveText(expectedUserName, {timeout: 5000})
    }
}