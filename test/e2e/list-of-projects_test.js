Feature('List of projects');

Scenario('Directory listing enabled', (I) => {
    I.amOnPage('/');
    I.see('Index of');
});
