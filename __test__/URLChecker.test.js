import { checkUrl } from "../src/client/js/URLChecker.js";

describe('Testing url checker functionality', () => {
    test('valid URL', () => {
        const input = "https://www.blogger.com/about";
        const output = checkUrl(input);
        expect(output).toBe(true);
    });

    test('invalid URL', () => {
        const input = "http:blogger.com";//missing //
        const output = checkUrl(input);
        expect(output).toBe(false);
    });
});