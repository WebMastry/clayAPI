// Helper function to validate URLs
const isValidDomain = (urlString: string): boolean => {
  const domainPattern =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
  return domainPattern.test(urlString);
};

export { isValidDomain };
