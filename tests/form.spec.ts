import { test } from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe('form', () => {

    test.beforeEach( async ({ page }, testInfo) => {
        await page.goto('http://localhost:9000/');
        testInfo.setTimeout(testInfo.timeout + 1000);
    });

    test('localized field', async ({ page }) => {
        const localizedField = page.locator('[name="localized-field"]');
        localizedField.waitFor({ state: 'attached' });
        await localizedField.focus();
        await localizedField.fill('some locale value');
        await localizedField.blur();
    });

    test('header', async ({ page }) => {
        const header = page.locator('div.header');
        await header.getByRole('button').dblclick();
    });

    test('auto waiting', async ({ page }) => {

        await page.waitForSelector('[name="localized-field"]');

        // await page.waitForResponse
        // await page.waitForRequest
    });

    test('timeouts', async ({ page }) => {
        const localizedField = page.locator('[name="localized-field"]');
        test.slow();
        localizedField.focus({ timeout: 1000 });
    });

});
