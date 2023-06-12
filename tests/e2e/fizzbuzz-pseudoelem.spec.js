import { afterAll, beforeAll, describe, test } from 'vitest'
import { chromium } from 'playwright'
import { expect } from '@playwright/test'

async function getAfterContent(divs) {
  return (await divs.evaluateAll(
    list => list.map(element => window.getComputedStyle(element, ':after').content.replace(/['"]+/g, ''))
  ))[0]
}

describe('FizzBuzz', async () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
    await page.goto('http://127.0.0.1:3000/index-pseudoelem.html');
  })

  afterAll(async () => {
    await browser.close()
  })

  test('should display Fizz every third item', async () => {
    const divs = page.locator('div:nth-child(3n)')
    const contentText = await getAfterContent(divs)
    await expect(contentText).toBe('Fizz')
  });

  test('should display Buzz every fifth item', async () => {
    const divs = page.locator('div:nth-child(5n)')
    const contentText = await getAfterContent(divs)
    await expect(contentText).toBe('Buzz')
  });

  test('should display FizzBuzz every fifteen item', async () => {
    const divs = page.locator('div:nth-child(15n)')
    const contentText = await getAfterContent(divs)
    await expect(contentText).toBe('FizzBuzz')
  });
})
