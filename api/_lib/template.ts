
import marked from 'marked';
import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getCss() {
    return `body {
    background: #fe5a59;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-items: center;
    padding: 0;
    margin: 0;
}
.logo-wrapper {
    display: inline-block;
}
.plus {
    color: #bbb;
    font-family: Times New Roman, Verdana;
    font-size: 100px;
}
.emoji {
    height: 1em;
    width: 1em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.1em;
}
.heading {
    font-family: "Helvetica Neue", sans-serif;
    font-size: calc((100vw - 50rem) / 10 + 1.25rem);
    font-weight: 800;
    margin-top: 2rem;
    color: #fff;
    line-height: 1.25;
}
.button {
    font-family: "Helvetica Neue";
    font-weight: 700;
    background: #fff;
    border-radius: 1rem;
    padding: 1rem 2rem;
    display: block;
    width: auto;
    margin-top: 2rem;
    font-size: 2rem;
    align-self: flex-start;
}
.product__image {
    min-width: 50%;
    height: 100%;
}
.product__image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.desc {
    padding: 6vw;
    display: flex;
    flex-direction: column;
    justify-items: center;
}
`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { text, theme, md, fontSize, images, widths, heights } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8" />
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
        ${getCss()}
    </style>
    <body>
        <div class="desc">
            <div class="logo-wrapper">
                <svg width="50%" viewBox="0 0 461 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="135" height="135">
                        <rect width="135" height="135" rx="45" fill="white" />
                    </mask>
                    <g mask="url(#mask0)">
                        <rect x="-54" y="-34" width="215" height="196" fill="white" />
                    </g>
                    <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M81.7191 96.9355C81.7191 94.2916 83.8595 92.1513 86.5034 92.1513C89.1159 92.1513 91.2562 94.2916 91.2562 96.9355C91.2562 99.548 89.1159 101.688 86.5034 101.688C83.8595 101.688 81.7191 99.548 81.7191 96.9355ZM46.3091 96.9356C46.3091 94.2916 48.4494 92.1513 51.0934 92.1513C53.7058 92.1513 55.8461 94.2916 55.8461 96.9356C55.8461 99.548 53.7058 101.688 51.0934 101.688C48.4494 101.688 46.3091 99.548 46.3091 96.9356Z"
                        fill="#FF5A5A"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M91.2562 52.1159C93.1762 52.1159 94.4352 52.7769 95.6942 54.2248C96.9533 55.6727 97.1736 57.7501 96.8903 59.6354L93.9001 80.2833C93.3336 84.2524 89.9342 87.1765 85.9369 87.1765H51.5971C47.4109 87.1765 43.9486 83.966 43.6024 79.8144L40.7066 45.503L35.9538 44.6846C34.6948 44.4643 33.8135 43.2367 34.0338 41.9777C34.2541 40.6872 35.4817 39.8374 36.7722 40.0262L44.2791 41.1593C45.3492 41.3513 46.1361 42.2295 46.2306 43.2997L46.8286 50.3502C46.923 51.3605 47.7414 52.1159 48.7486 52.1159H91.2562ZM72.1823 68.4802H80.901C82.2229 68.4802 83.2616 67.41 83.2616 66.1195C83.2616 64.7976 82.2229 63.7589 80.901 63.7589H72.1823C70.8603 63.7589 69.8216 64.7976 69.8216 66.1195C69.8216 67.41 70.8603 68.4802 72.1823 68.4802Z"
                        fill="#FF5A5A"
                    />
                    <path
                        d="M367.228 21.3022L359.055 18.078L358.477 19.432C357.622 21.4361 357.294 23.6119 357.522 25.7669C357.751 27.9219 358.528 29.9895 359.786 31.7865C361.044 33.5835 362.744 35.0545 364.734 36.0692C366.725 37.0839 368.945 37.611 371.198 37.6037C373.451 37.5964 375.667 37.055 377.651 36.0275C379.634 35 381.323 33.518 382.568 31.7129C383.814 29.9078 384.577 27.8352 384.79 25.6788C385.004 23.5224 384.66 21.3487 383.791 19.3503L383.204 18L375.053 21.2769L375.641 22.6271C375.949 23.3369 376.071 24.1088 375.995 24.8747C375.92 25.6405 375.649 26.3766 375.206 27.0176C374.764 27.6587 374.164 28.185 373.46 28.5499C372.755 28.9148 371.968 29.1071 371.168 29.1097C370.368 29.1123 369.58 28.9251 368.873 28.5648C368.166 28.2044 367.562 27.682 367.115 27.0438C366.669 26.4056 366.392 25.6713 366.311 24.906C366.23 24.1406 366.347 23.3679 366.65 22.6562L367.228 21.3022Z"
                        fill="white"
                    />
                    <path
                        d="M454.155 58.9704L460.805 43.3866L459.397 42.831C454.534 40.9125 449.253 40.1768 444.023 40.6892C438.793 41.2015 433.775 42.9459 429.414 45.7681C425.053 48.5902 421.483 52.4029 419.021 56.8684C416.558 61.3339 415.279 66.3144 415.297 71.3687C415.314 76.423 416.628 81.3951 419.122 85.8446C421.616 90.2941 425.212 94.0836 429.593 96.8775C433.974 99.6714 439.004 101.383 444.237 101.862C449.47 102.34 454.746 101.571 459.596 99.6208L461 99.0562L454.241 83.5157L452.837 84.0803C450.645 84.9615 448.261 85.3094 445.896 85.0932C443.53 84.8769 441.257 84.1032 439.277 82.8405C437.297 81.5778 435.672 79.8652 434.545 77.8543C433.418 75.8434 432.824 73.5963 432.816 71.3121C432.808 69.0279 433.386 66.777 434.499 64.7589C435.612 62.7407 437.226 61.0176 439.197 59.7422C441.168 58.4668 443.435 57.6784 445.799 57.4468C448.162 57.2153 450.549 57.5478 452.747 58.4148L454.155 58.9704Z"
                        fill="white"
                    />
                    <path d="M186 41.7016V102H203.707V77.3303H218.981V102H236.687V41.7016H218.981V62.4372H203.707V41.7016H186Z" fill="white" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M276.512 41.7016L238.614 102H259.33L265.808 91.0994H305.385L311.864 102H332.665L294.767 41.7016H276.512ZM296.656 76.2063H274.623L285.639 57.6712L296.656 76.2063Z"
                        fill="white"
                    />
                    <path d="M406.389 102V41.7016H392.004L352.258 76.3352V41.7016H334.551V102H349.022L388.682 67.3708V102H406.389Z" fill="white" />
                </svg>
            </div>

            <div class="heading">${emojify(
                md ? marked(text) : sanitizeHtml(text)
            )}</div>
            <div class="button">Купить</div>
        </div>

        <div class="product__image">
            ${images.map((img, i) =>
                    getPlusSign(i) + getImage(img, widths[i], heights[i])
                ).join('')}
        </div>
    </body>
</html>`;
}

function getImage(src: string, width ='auto', height = '225') {
    return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`
}

function getPlusSign(i: number) {
    return i === 0 ? '' : '<div class="plus">+</div>';
}
