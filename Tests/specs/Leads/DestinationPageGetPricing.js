
import destinationPage from '../../pages/destinationpage'

describe("Destination Page leads", function() {

it("getpricing lead " , function () {
    destinationPage.open()

browser.setupInterceptor();
    
    destinationPage.getpricinglead_Email.setValue('test@aplaceformom.com')
    destinationPage.getPricingButton.click()
   /* browser.pause(2000);
    var request = browser.getRequest(0);
assert.equal(request.method, 'POST');
assert.equal(request.response.headers['content-length'], '42'); */
    destinationPage.getpricinglead_Fullname.setValue('test')
    destinationPage.getpricinglead_Phone.setValue('5555555555')
    destinationPage.getpricinglead_submitbutton.click()





})











})



    


