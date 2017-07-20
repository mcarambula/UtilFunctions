/** Sanitize function using template strings. **/
function sanitize(strings, ...values) {
    return strings.reduce((prev, next, i) => `${prev}${next}${values[i]} || ''}`);
}

