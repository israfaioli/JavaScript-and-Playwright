import { test } from "@playwright/test"
import { MenuPage } from "../page-objects/MenuPage.js"
import { MyAccountPage } from "../page-objects/MyAccountPage.js"
import { accountData } from "../data/accountData.js"
import { v4 as uuidv4 } from 'uuid'

test("Test 01 - Login at automation practice", async ({ page }) => {
    const myAccountPage = new MyAccountPage(page)
    const menuPage = new MenuPage(page)
    const expectedUserName = 'automation14'

    await myAccountPage.goToMyAccountPage()
    await myAccountPage.fillAccountLogin(accountData.email, accountData.password)
    await menuPage.checkSuccessfullLogin(expectedUserName)
})

test("Test 02 - Register new user at automation practice", async ({ page }) => {
    const myAccountPage = new MyAccountPage(page)
    const menuPage = new MenuPage(page)
    const newUserName = uuidv4()

    await myAccountPage.goToMyAccountPage()
    await myAccountPage.registerNewAccount(newUserName + '@gmail.com', 'Automation12345@')
    await menuPage.checkSuccessfullLogin(newUserName)
})
