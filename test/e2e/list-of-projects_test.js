Feature('Homepage');

Scenario('Title should be visible', (I) => {
    I.amOnPage('/');
    I.see('Piotr Kowalski');
});
