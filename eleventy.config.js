export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/static/");
    eleventyConfig.addWatchTarget("src/styles/");

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    };

}