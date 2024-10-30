import { ContactUsPage } from "./pageObjects/contactUs/contactUs.po";
import { AboutPage } from "./pageObjects/about/about.po";

export const pages = {
  contactUs: new ContactUsPage(),
  about: new AboutPage(),
};