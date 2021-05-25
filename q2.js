
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 75});
    const page = await browser.newPage();
    await page.goto("https://app-dev.condoworks.co");
    await page.focus("#Email");
    await page.keyboard.type("coop.test@condoworks.co");
    await page.focus("#Password");
    await page.keyboard.type("MyTesting711");
    await page.click("#btnSubmit");
    await page.goto("https://app-dev.condoworks.co/invoices/all");
    await page.waitForSelector("[name='invoices.InvoiceNumber']");
    await page.focus("[name='invoices.InvoiceNumber']");
    await page.keyboard.type("123");
    await page.waitForTimeout(1000);
    await page.waitForSelector("#\\32  > td:nth-child(1) > a > button");
    await page.click("#\\32  > td:nth-child(1) > a > button");
    await page.waitForTimeout(1000);
    await page.click("#thumb-InvoiceFile-init-0 > div.file-thumbnail-footer > div.file-actions > div > a");
    await page.waitForTimeout(1000);
    await browser.close();
})();