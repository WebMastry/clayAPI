function replacePlaceholders(template, replacements) {
  return template.replace(/\{(\d+)\}/g, (match, index) => {
    // Convert the index to an integer and return the corresponding replacement
    return replacements[parseInt(index, 10)] || match;
  });
}

export { replacePlaceholders };
