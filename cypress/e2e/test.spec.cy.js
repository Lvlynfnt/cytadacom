import { pages } from "../support/pageObjectExporter"
import { FooterLinks } from "../support/pageObjects/contactUs/contactUs.selector";

describe('Pages on footer - Explore More of Datacom - Click on links', () => {
    Object.values(FooterLinks).forEach((uri) => {
        it(`Verify if user can navigate to ${uri.urlPath} page`, () => {
            pages.contactUs.navigateTo("contact-us")
            pages.contactUs.clickOnLinks(uri.linkSelector, uri.urlPath);
            pages.contactUs.verifyURLValue(uri.urlPath);
        });
    });
});

describe('Pages on footer - Explore More of Datacom - Direct Access', () => {
    Object.values(FooterLinks).forEach((uri) => {
        it(`Verify if user can navigate to ${uri.urlPath} page`, () => {
            pages.contactUs.navigateTo(uri.urlPath);
            pages.contactUs.verifyURLValue(uri.urlPath);
        });
    });
});

describe('Contact Us', () => {
    it(`Verify if user can fill out the Contact Us form`, () => {
        pages.contactUs.navigateTo("contact-us")
        pages.contactUs.clickOnContactUsButton()
        pages.contactUs.fillOutForm()
    });
});