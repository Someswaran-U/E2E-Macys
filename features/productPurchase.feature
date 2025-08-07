Feature: end to end product purchase flow
    Scenario: Search for product
        Given I am on the homepage
        When I search the product with "<productId>"
        Then I should be on the product description page of the product

        When I click on add to bag button
        And I validate the price on the bag overlay matches the product price on the PDP
        Then bag overlay should appear with the right price

        When I click on the bag icon
        And I validate the price on the bag page matcher the product price on the PDP
        Then I should be on the bag page with correct product and price

        When I click on checkout button
        And I validate the price on the checkout page matches the product price on the PDP
        Then I should be on the checkout page with correct product and price
        
        When I enter "<firstName>" and "<lastName>" and "<7901 Tyson>" and "<736 484 1234>"
        Then I should see the delivery summary with correct details

        When I enter "<ccNo>" and select month "<12>" and select year "<2025>" and cvv "<222>"
        Then the payment button should be enabled

        When I click proceed to pay button
        Then I should see the order number and log the order number