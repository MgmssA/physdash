const macros = {};
for (let element of mathElements) {
    katex.render(element.textContent, element, {
        throwOnError: false,
        macros
    });
}