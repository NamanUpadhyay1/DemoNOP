const { expect, assert } = require('chai');
const utils = require('../specs/utils')
const _addToCart = '//div[@class="item-grid"]//button[@class="button-2 product-box-add-to-cart-button"]'

class CameraPage
{
    static addToCartButtons()
    {
       let buttons = $$(_addToCart)
       buttons.forEach(element => 
        {
            assert(element.size>3,"Incorrect number of add to cart buttos")
        });
    }
}
module.exports = CameraPage