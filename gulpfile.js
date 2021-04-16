
const {src, dest, watch, series} = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);


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



exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
