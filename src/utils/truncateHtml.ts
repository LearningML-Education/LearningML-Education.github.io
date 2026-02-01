const isWhitespace = (char: string) => /\s/.test(char);

export const truncateHtmlWords = (html: string, maxWords: number) => {
  let output = '';
  let wordCount = 0;
  let i = 0;
  const stack: string[] = [];

  while (i < html.length) {
    const char = html[i];
    if (char === '<') {
      const closeIndex = html.indexOf('>', i);
      if (closeIndex === -1) break;
      const tag = html.slice(i, closeIndex + 1);
      output += tag;

      const isClosing = /^<\s*\//.test(tag);
      const isSelfClosing = /\/\s*>$/.test(tag) || /^<\s*(br|hr|img|input|meta|link)\b/i.test(tag);
      if (!isClosing && !isSelfClosing) {
        const match = tag.match(/^<\s*([^\s/>]+)/);
        if (match) stack.push(match[1]);
      } else if (isClosing) {
        const match = tag.match(/^<\s*\/\s*([^\s/>]+)/);
        if (match) {
          const name = match[1];
          const idx = stack.lastIndexOf(name);
          if (idx !== -1) stack.splice(idx, 1);
        }
      }
      i = closeIndex + 1;
      continue;
    }

    if (wordCount >= maxWords) break;

    let textEnd = html.indexOf('<', i);
    if (textEnd === -1) textEnd = html.length;
    const text = html.slice(i, textEnd);
    let cursor = 0;

    while (cursor < text.length) {
      if (wordCount >= maxWords) break;
      if (isWhitespace(text[cursor])) {
        output += text[cursor];
        cursor += 1;
        continue;
      }
      let end = cursor + 1;
      while (end < text.length && !isWhitespace(text[end])) end += 1;
      output += text.slice(cursor, end);
      wordCount += 1;
      cursor = end;
    }

    i = textEnd;
  }

  for (let s = stack.length - 1; s >= 0; s -= 1) {
    output += `</${stack[s]}>`;
  }

  return output.trim();
};
