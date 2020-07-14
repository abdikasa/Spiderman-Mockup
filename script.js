function addTextToStyle(id, text) {
  return `.${id}::after { content: "${text
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\00000a")} }"`;
}

addTextToStyle("hero-img", "hello  world");
