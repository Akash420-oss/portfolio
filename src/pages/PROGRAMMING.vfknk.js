// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';
$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	//
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	$w("#Section1RegularButton1").onClick(() => {
        if (document.referrer) {
            wixLocation.back();  // Navigates back if there's a previous page
        } else {
            wixLocation.to("/"); // Redirects to homepage if no previous page
        }
    });
	// Click "Run", or Preview your site, to execute your code

});