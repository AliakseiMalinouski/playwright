import { test } from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe('form', () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('http://localhost:9000/');
    });

    test('should have form', async ({ page }) => {
       const form = page.locator('form');
       const input = form.locator('input');
       const button = form.locator('button');
       await input.focus();
       await input.fill('some value');
       await input.blur();
       await button.click();
       await form.locator('input').isVisible();
    });
});
