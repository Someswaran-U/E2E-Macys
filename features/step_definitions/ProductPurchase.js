import { test, expect } from '@playwright/test';
import productList from '../TestData/productList.json'
import input from '../TestData/input.json'


const mcom = productList.mcom
let prices = []
let orderNo = []

Given('I am on the homepage', async function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I search the product with {string}',async  function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('I should be on the product description page of the product', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I click on add to bag button',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('I validate the price on the bag overlay matches the product price on the PDP',async  function () {     
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('bag overlay should appear with the right price',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('I click on the bag icon',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


When('I validate the price on the bag page matcher the product price on the PDP',async  function () {        
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('I should be on the bag page with correct product and price',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('I click on checkout button',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I validate the price on the checkout page matches the product price on the PDP',async  function () {   
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('I should be on the checkout page with correct product and price',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I enter {string} and {string} and {string} and {string}',async  function (string, string2, string3, string4) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('I should see the delivery summary with correct details',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I enter {string} and select month {string} and select year {string} and cvv {string}',async  function (string, string2, string3, string4) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the payment button should be enabled',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I click proceed to pay button',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('I should see the order number and log the order number',async  function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});