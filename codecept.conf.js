module.exports.config = {
    'tests': './test/e2e/*_test.js',
    'timeout': 10000,
    'output': './output',
    'helpers': {
        'Puppeteer': {
            'url': 'https://piecioshka.pl'
        }
    },
    'include': {
        'I': './steps_file.js'
    },
    'bootstrap': false,
    'mocha': {},
    'name': 'boilerplate-codeceptjs',
    'translation': 'pl-PL'
};
