
const {src, dest, watch, series} = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssLinter = require(`gulp-stylelint`);
const jsLinter = require(`gulp-eslint`);


async function chrome () {
    browserChoice = `google chrome`;
}

async function edge () {
    browserChoice = `microsoft-edge`;
}

async function allBrowsers () {
    browserChoice = [
        `google chrome`,
        `microsoft-edge`
    ];
}

let validateHTML = () => {
    return src(`dev/*.html`)
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src(`dev/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/`));
};

let lintCSS = () => {
    return src(`dev/css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(`dev/js/*.js`)
        .pipe(jsLinter({
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: `module`
            },
            rules: {
                indent: [2, 4, {SwitchCase: 1}],
                quotes: [2, `backtick`],
                semi: [2, `always`],
                'linebreak-style': [2, `unix`],
                'max-len': [1, 85, 4]
            },
            env: {
                es6: true,
                node: true,
                browser: true
            },
            extends: `eslint:recommended`
        }))
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};



exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
