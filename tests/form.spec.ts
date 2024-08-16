import { test } from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe('form', () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('http://localhost:9000/');
    });

    test('localized field', async ({ page }) => {
        const localizedField = page.locator('[name="localized-field"]')
        await localizedField.focus();
        await localizedField.fill('some locale value');
        await localizedField.blur();
    });

    test('header', async ({ page }) => {
        const header = page.locator('div.header');
        await header.getByRole('button').dblclick();
    });

});
