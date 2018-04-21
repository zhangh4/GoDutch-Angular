import { browser, by, element, $, ElementFinder, $$ } from 'protractor';

export class FamilyPage {

  addFamily = $('#addFamily');
  familyName = $('#familyName');
  familyHeadCount = $('#familyHeadCount');
  saveFamily = $('#saveFamily');
  cancelFamily = $('#cancelFamily');
  error = $('#error');
  existingFamilies = $$('#existingFamily');
  lastExistingFamilyName = this.existingFamilies.last().$('#existingFamilyName');
  lastExistingFamilyHeadCount = this.existingFamilies.last().$('#existingFamilyHeadCount');

  navigateTo() {
    return browser.get('/families');
  }

  isElementVisible(element: ElementFinder): any {
    return element.isPresent().then(isPresent => isPresent && element.isDisplayed());
  }

  clickOn(buttonId: string){
    element(by.id(buttonId)).click();
  }

  enterText(inputId: string, value: string){
    element(by.id(inputId)).sendKeys(value);
  }

}
