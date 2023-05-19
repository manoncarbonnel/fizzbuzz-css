import { afterAll, beforeAll, describe, test } from 'vitest'
import { chromium } from 'playwright'
import { expect } from '@playwright/test'

describe('FizzBuzz', async () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
    await page.goto('http://127.0.0.1:3000/');
  })

  afterAll(async () => {
    await browser.close()
  })

  test('has title', async () => {
    const title = page.getByText('FizzBuzz')
    await expect(title).toBeVisible()
  });

  test('Fizz', async () => {
    const fizzDivs = page.locator('div:nth-child(3n)')
    const contentText = await getAfterContent(fizzDivs)
    await expect(contentText).toBe('Fizz')
  });
})

async function getAfterContent(fizzDivs) {
  return (await fizzDivs.evaluateAll(
    list => list.map(element => window.getComputedStyle(element, ':after').content.replace(/['"]+/g, ''))
  ))[0]
}
