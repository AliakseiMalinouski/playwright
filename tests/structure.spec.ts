import { test } from '@playwright/test';
import { before, beforeEach } from 'node:test';

test.describe('structure', () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('http://localhost:9000/');
    });

    test('structure test', async ({ page }) => {
        await page.getByText('app').click();
    });
});
