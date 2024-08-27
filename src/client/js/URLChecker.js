function checkUrl(inputText) {
    console.log("::: Running checkUrl :::", inputText);

    // Regular expression for URL validation
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(:[0-9]{1,5})?(\/\S*)?$/;

    // Test the given URL against the regex
    return urlRegex.test(inputText);
}

export { checkUrl }
