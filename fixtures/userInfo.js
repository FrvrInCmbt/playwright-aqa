import {test} from "@playwright/test"

export const userInformationPage = test.extend ({
    userInfo: async({page}, use) => {
        const userData = {
            email: "name@test.com",
            password: "Test1234"
        }
        console.log("Before")
        await use(userData)
        console.log("After")
    }
})