import { pages } from "../support/pageObjectExporter"
import { FooterUrls } from "../support/pageObjects/contactUs/uri.list";

// search
// page loading 
// validate that the controls work (i.e. the navigation works).

// The ‘Our Locations’ page found in https://datacom.com/nz/en/contact-us .
// Write test cases and automate the test cases where the following criteria is met:
//  the test case will give value if automated
//  the test can be developed in the allocated time.

describe('Pages on footer - Explore More of Datacom', () => {
    Object.values(FooterUrls.exploreMore).forEach((uri) => {
        it(`Verify if user can navigate to ${uri} page`, () => {
            pages.contactUs.navigateTo(uri);
            pages.contactUs.verifyURLValue(uri)
        });
    });
});

describe('Pages on footer - Work With Us', () => {
    Object.values(FooterUrls.workWithUs).forEach((uri) => {
        it(`Verify if user can navigate to ${uri} page`, () => {
            pages.contactUs.navigateTo(uri);
            pages.contactUs.verifyURLValue(uri)
        });
    });
});