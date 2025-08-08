import {expect} from '@playwright/test'
import {checkout} from '../page/checkout.page.js'
import {step} from "allure-js-commons"

export class checkoutMethod extends checkout{
    constructor(page){
        super(page)
        this.page = page
    }
    async signInAsGuest(){
        await this.checkout_btn.click()
    }
    async fillDetail(firstName, lastName, addLine_1, phoneNo){
        await step(`filling firstName as ${firstName}`,async()=>{
            await this.firstName_input.fill(firstName)
        })
        await step(`filling lastName as ${lastName}`,async()=>{
            await this.lastName_input.fill(lastName)
        })
        await step(`filling Address line 1 as ${addLine_1}`,async()=>{
            await this.addLine1_input.click()
            await this.addLine1_input.fill(addLine_1)
            await this.add1Options_input.first().click()
        })
        await step("filling phone number as "+ phoneNo,async()=>{
            await this.phoneNo_input.fill(phoneNo)
        })
        await step("clicking save button",async()=>{
            await this.page.waitForTimeout(1000)
            await this.saveAddInfo_btn.click()
        }) 
    }
    async validateDetails(firstName, lastName, addLine_1, zip){
        //await this.saveAddInfo_btn.click()
        await step("validating if the first name is "+ firstName,async()=>{
            expect (await this.name_txt.textContent()).toContain(firstName)
        })
        await step("validating if the last name is "+ lastName,async()=>{
            expect (await this.name_txt.textContent()).toContain(lastName)
        })
        await step("validating if address line 1 is "+ addLine_1,async()=>{
            expect (await this.add1_txt.textContent()).toContain(addLine_1)
        })
        await step("validating if zipcode is "+ zip,async()=>{
            expect (await this.zip_txt.textContent()).toContain(zip)
        })
    }
    async getOrderSubtotal(){
        return await this.subtotal_txt.textContent()
    }
    async fillCardDetails(ccNo, cvv, month, year, email){
        await step("filling card number as "+ ccNo,async()=>{
            await this.deliveryOptions_btn.waitFor({ state: 'visible' })
            await this.ccOptions_btn.waitFor({ state: 'visible' })

            await this.ccNo_input.click()
            await this.ccNo_input.fill(ccNo)
            await this.page.waitForTimeout(1000)
            await this.ccheading_txt.click()
        })
        await step("filling month as "+ month,async()=>{
            //await this.page.waitForTimeout(3000)
            await this.month_select_enabled.waitFor()
            //await this.wait()
            await this.month_select.waitFor({ state: 'visible' })
            await this.month_select.click()
            await this.month_select.selectOption(month)
        })
        await step("filling year as "+ year,async()=>{
            await this.year_select.waitFor({ state: 'visible' })
            await this.year_select.click()
            await this.year_select.selectOption(year)
        })
        await step("filling cvv as "+ cvv,async()=>{
            await this.cvv_input.waitFor({ state: 'visible' })
            await this.cvv_input.click()
            await this.cvv_input.fill(cvv)
        })
        await step("filling email as "+ email,async()=>{
            await this.email_input.fill(email)
        })
        await step("clicking save button",async ()=>{
            await this.saveCardInfo_btn.click()
        }) 
    }
    async placeOrder(){
        //await this.page.waitForTimeout(2000)
        await this.placeOrder_btn.waitFor({ state: 'visible' })
        await this.placeOrder_btn.click()
        await this.page.waitForLoadState('load')
    }
    async wait(){
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('networkidle')
    }
}