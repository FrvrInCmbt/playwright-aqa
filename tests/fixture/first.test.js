import { expect } from "@playwright/test";
import { loggedGaragePageTest as test } from "../../fixtures/loggedGaragePage.js";
import { GaragePage } from "../../src/pages/GaragePage.mjs";


test("Logged in garage", async({storagePage})=> {
    await storagePage.goto("/");
    const garagePage = new GaragePage(storagePage);
    await expect(garagePage._buttonAddCar.locator("text=Add car")).toBeVisible();
    await expect(storagePage.locator("text=Porsche Cayenne")).toBeVisible();
    await expect(storagePage.locator(".car_logo")).toBeVisible();
})

//test("Add car", async({storagePage}) => {
//    await storagePage.goto("/panel/garage")
//    await storagePage.pause()
//})