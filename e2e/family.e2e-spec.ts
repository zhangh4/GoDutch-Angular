import { FamilyPage } from './family.po';
import { $, $$, browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Family page', () => {
  let page: FamilyPage;

  beforeEach(() => {
    page = new FamilyPage();
    page.navigateTo();
  });

  it('should display inputs only when add family button is clicked', () => {
    expect(page.isElementVisible(page.addFamily)).toBe(true);
    expect(page.isElementVisible(page.familyName)).toBe(false);
    expect(page.isElementVisible(page.familyHeadCount)).toBe(false);
    expect(page.isElementVisible(page.saveFamily)).toBe(false);
    expect(page.isElementVisible(page.cancelFamily)).toBe(false);

    page.addFamily.click();

    expect(page.isElementVisible(page.addFamily)).toBe(false);
    expect(page.isElementVisible(page.familyName)).toBe(true);
    expect(page.isElementVisible(page.familyHeadCount)).toBe(true);
    expect(page.isElementVisible(page.saveFamily)).toBe(true);
    expect(page.isElementVisible(page.cancelFamily)).toBe(true);
  });

  it('should revert when cancel family button is clicked', () => {
    page.addFamily.click();
    page.familyName.sendKeys('Gary');
    page.familyHeadCount.sendKeys('8');
    page.cancelFamily.click();

    expect(page.isElementVisible(page.addFamily)).toBe(true);
    expect(page.isElementVisible(page.familyName)).toBe(false);
    expect(page.isElementVisible(page.familyHeadCount)).toBe(false);
    expect(page.isElementVisible(page.saveFamily)).toBe(false);
    expect(page.isElementVisible(page.cancelFamily)).toBe(false);

    page.addFamily.click();

    expect(page.familyName.getAttribute('value')).toBeFalsy();
    expect(page.familyHeadCount.getAttribute('value')).toBeFalsy();
  });

  it('should reject when empty family name is entered', () => {
    page.addFamily.click();

    expect(page.error.getText()).toBeFalsy();

    page.familyName.sendKeys(' ');
    page.saveFamily.click();

    expect(page.error.getText()).toBeTruthy();
  });

  it('should reject when negative family head count is entered', () => {
    page.addFamily.click();

    expect(page.error.getText()).toBeFalsy();

    page.familyHeadCount.sendKeys('-1');
    page.saveFamily.click();

    expect(page.error.getText()).toBeTruthy();
  });

  
  it('should add family to list when new valid one is created', async () => {

    expect(page.existingFamilies.count()).toBe(0);

    // var EC = protractor.ExpectedConditions
    let beforeExistingFamilyCount : number = await page.existingFamilies.count();
    // let prom = $$('#existingFamily').count().then(v => {
    //     console.log(`v = ${v}`);
    //     beforeExistingFamilyCount = 1;
    //     return v;
    //   });
    // browser.wait(prom);

    page.addFamily.click();
    page.familyName.sendKeys(' Gary ');
    page.familyHeadCount.sendKeys(' 2.5 ');
    page.saveFamily.click();

    expect(page.isElementVisible(page.addFamily)).toBe(true);
    expect(page.isElementVisible(page.familyName)).toBe(false);
    expect(page.isElementVisible(page.familyHeadCount)).toBe(false);
    expect(page.isElementVisible(page.saveFamily)).toBe(false);
    expect(page.isElementVisible(page.cancelFamily)).toBe(false);

    // console.log(`beforeExistingFamilyCount     = ${beforeExistingFamilyCount}`);

    expect(page.existingFamilies.count()).toBe(beforeExistingFamilyCount + 1);
    expect(page.lastExistingFamilyName.getText()).toBe('Gary');
    expect(page.lastExistingFamilyHeadCount.getText()).toBe('2.5');
    
    beforeExistingFamilyCount = await page.existingFamilies.count();

    page.addFamily.click();
    page.familyName.sendKeys(' Peter ');
    page.familyHeadCount.sendKeys(' 3 ');
    page.saveFamily.click();

    expect(page.existingFamilies.count()).toBe(beforeExistingFamilyCount + 1);
    expect(page.lastExistingFamilyName.getText()).toBe('Peter');
    expect(page.lastExistingFamilyHeadCount.getText()).toBe('3');
  });

  
  
});
