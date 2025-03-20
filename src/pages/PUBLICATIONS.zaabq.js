import { history } from 'wix-location';

$w.onReady(function () {
    $w("#prevPageButton").onClick(() => {
        history.back(); // Navigates to the previous page in the browser history
    });
});
