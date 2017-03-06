const scripts = new Map();

/**
 * Loads an external script
 * @param {string} url Script's URL
 * @returns {Promise}
 */
export default function loadScript(url) {
  if (scripts.has(url)) {
    return scripts.get(url);
  }

  const script = document.createElement('script');
  script.async = true;

  scripts.set(url, new Promise(function (resolve, reject) {
    script.addEventListener('load', resolve);
    script.addEventListener('error', () => reject(new Error(`Failed to load the script: ${url}.`)));
    script.src = url;
    document.body.appendChild(script);
  }));

  return scripts.get(url);
}
