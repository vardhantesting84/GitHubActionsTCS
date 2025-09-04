import {expect, test} from '@playwright/test'

test('First Program', async ({page}) => {

    await page.goto("https://practice.bpbonline.com/");

    await expect(page).toHaveTitle("BPB Online")

})