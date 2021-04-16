
const htmlValidator = require(`gulp-html`);



//async function chrome () {
//    browserChoice = `google chrome`;
//}

//async function edge () {
//    browserChoice = `microsoft-edge`;
//}

//async function allBrowsers () {
//    browserChoice = [
//        `google chrome`,
//        `microsoft-edge`
//    ];
//}

let validateHTML = () => {
    return src(`dev/*.html`)
        .pipe(htmlValidator());
};



exports.validateHTML = validateHTML;
