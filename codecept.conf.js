module.exports.config = {
    'tests': './test/e2e/*_test.js',
    'timeout': 10000,
    'output': './output',
    'helpers': {
        'Puppeteer': {
            'url': 'http://piecioshka.pl'
        }
    },
    'include': {
        'I': './steps_file.js'
    },
    'bootstrap': false,
    'mocha': {},
    'name': 'test-codeceptjs',
    'translation': 'pl-PL'
};
