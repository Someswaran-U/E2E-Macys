import {confirmation} from '../page/confirmation.page'
import input from '../TestData/input.json'
export class confirmationMethod extends confirmation{
    constructor(page){
        super(page)
        this.page = page
    }
    async getOrderDetails(){
        return await this.orderNo.first().textContent()
    }
    async goToHomePage(){
        await this.page.goto(input.url_mcom)
    }
}
