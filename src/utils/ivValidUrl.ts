// Helper function to validate URLs
const isValidURL = (urlString: string): boolean => {
  try {
    new URL(urlString);
    return true;
  } catch (_) {
    return false;
  }
};

export { isValidURL };
