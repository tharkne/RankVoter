const previous = [];

export const goToUrl = (path, router) => {
  // If going to a different page add it to history then redirect
  if (router.pathname !== path) {
    previous.push(path);
    router.push(path);
  }
};

export const goBack = (router) => {
  // Only go back to previous page if there is a history of previous URLs
  if (previous.length) {
    previous.pop();
    router.back();
  }
}
