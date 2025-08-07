const {Before} = require('@cucumber/cucumber')
const { playwright } = require('@playwright/test')
import {homeMethod} from '../methods/home.methods.js'
import {pdpMethod} from '../methods/pdp.methods.js'
import {bagMethod} from '../methods/bag.methods.js'
import {confirmationMethod} from '../methods/confirmation.method.js'
import { checkoutMethod } from '../methods/checkout.methods.js';


Before(async function() {
    const browser = await playwright.chromium.launch({headless: false})
    const context = await browser.newContext()
    this.page = await context.newPage()
    this.Home = new homeMethod(page)
    this.Pdp = new pdpMethod(page)
    this.Bag = new bagMethod(page)
    this.Checkout = new checkoutMethod(page)
    this.Confirmation = new confirmationMethod(page)
})
