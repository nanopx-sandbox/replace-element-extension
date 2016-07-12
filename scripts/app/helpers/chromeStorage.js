function splitToKeys(key) {
  if (typeof key === 'string' && key.indexOf('.') !== -1) {
    return key.split('.');
  }

  if (!Array.isArray(key)) {
    return [ key ];
  }

  return key;
}

function reachValue(keys, value = {}) {
  if (!Array.isArray(keys)) {
    return value[keys] || undefined;
  }
  let reachedValue = value;
  keys.forEach((key) => {
    reachedValue = reachedValue[key] || {};
  });

  if (Object.keys(reachedValue).length === 0) {
    return undefined;
  }

  return reachedValue;
}

export function get(keys, type = 'sync') {
  const [ firstKey, ...otherKeys ] = splitToKeys(keys);
  return new Promise((resolve) => {
    return chrome.storage[type].get(firstKey, (result) => {
      if (!otherKeys.length) {
        return resolve(result);
      }
      return resolve(reachValue(otherKeys, result));
    });
  });
}

export function set(key, value, type = 'sync') {
  return new Promise((resolve) => {
    return chrome.storage[type].set({ [key]: value }, resolve);
  });
}

export function remove(key, type = 'sync') {
  return new Promise((resolve) => {
    return chrome.storage[type].remove(key, resolve);
  });
}
