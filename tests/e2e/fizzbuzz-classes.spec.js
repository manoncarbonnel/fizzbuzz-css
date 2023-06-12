import { afterAll, beforeAll, describe, test } from 'vitest'
import { chromium } from 'playwright'
import { expect } from '@playwright/test'

const INDEX_BASED_NUMBER = 1

describe('FizzBuzz', async () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
    await page.goto('http://127.0.0.1:3000/index-classes.html');
  })

  afterAll(async () => {
    await browser.close()
  })

  test('should display the number 1', async () => {
    const div = page.locator('div').nth(1 - INDEX_BASED_NUMBER)
    await expect(div).toContainText('1')
  });

  test('first item should not display Fizz', async () => {
    const div = page.locator('div').nth(1 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Fizz')).toBeHidden()
  });

  test('first item should not display Buzz', async () => {
    const div = page.locator('div').nth(1 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Buzz')).toBeHidden()
  });

  test('third item should display Fizz', async () => {
    const div = page.locator('div').nth(3 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Fizz')).toBeVisible()
  });

  test('third item\'s number should be hidden', async () => {
    const div = page.locator('div').nth(3 - INDEX_BASED_NUMBER)
    await expect(div.getByText('3')).toBeHidden()
  });

  test('fifth item should display Buzz', async () => {
    const div = page.locator('div').nth(5 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Buzz')).toBeVisible()
  });

  test('third item\'s number should be hidden', async () => {
    const div = page.locator('div').nth(5 - INDEX_BASED_NUMBER)
    await expect(div.getByText('5')).toBeHidden()
  });

  test('sixth item should display Fizz', async () => {
    const div = page.locator('div').nth(6 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Fizz')).toBeVisible()
  });

  test('tenth item should display Buzz', async () => {
    const div = page.locator('div').nth(10 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Buzz')).toBeVisible()
  });

  test('fifteenth item should display FizzBuzz', async () => {
    const div = page.locator('div').nth(15 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Fizz')).toBeVisible()
    await expect(div.getByText('Buzz')).toBeVisible()
  });

  test('fifteenth item\'s number should be hidden', async () => {
    const div = page.locator('div').nth(15 - INDEX_BASED_NUMBER)
    await expect(div.getByText('15')).toBeHidden()
  });

  test('third item should not display Buzz', async () => {
    const div = page.locator('div').nth(3 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Buzz')).toBeHidden()
    await expect(div.getByText('3')).toBeHidden()
  });

  test('fifth item should not display Fizz', async () => {
    const div = page.locator('div').nth(5 - INDEX_BASED_NUMBER)
    await expect(div.getByText('Fizz')).toBeHidden()
    await expect(div.getByText('5')).toBeHidden()
  });
})
