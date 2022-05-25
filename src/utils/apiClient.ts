const defaultOptions: RequestInit = {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'include', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  // eslint-disable-next-line max-len
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};

const defaultStatusErrorMapping = {
  401: 'Du har ikke tilgang til denne siden',
  403: 'Du har ikke tilgang til denne siden',
  404: 'Siden du spør etter eksisterer ikke',
  500: 'Ukjent feil fra server',
  default: 'Ukjent feil',
};

export default (rootUrl: string = '', statusErrorMappings: any = {}) => {
  const errorMappings = {
    ...defaultStatusErrorMapping,
    ...statusErrorMappings,
  };

  const throwIfErrors = async (response) => {
    if (response.status >= 300) {
      let errorMessage = await response.text();

      if (!errorMessage) {
        errorMessage = errorMappings[response.status] || errorMappings.default;
      }
      throw new Error(errorMessage);
    }
  };

  const getRaw = async (url: string, options?: RequestInit) => {
    const response = await fetch(rootUrl + url, { ...defaultOptions, ...options, method: 'GET' });
    await throwIfErrors(response);
    return response;
  };

  const get = async (url: string, options?: RequestInit) => {
    const response = await getRaw(url, options);
    return response.json();
  };

  const postRaw = async (url: string, body: object, options?: RequestInit) => {
    const postOptions = {
      ...defaultOptions,
      method: 'POST',
      body: JSON.stringify(body),
    };
    const response = await fetch(rootUrl + url, { ...postOptions, ...options });
    await throwIfErrors(response);
    return response;
  };

  const post = async (url: string, body: object, options?: RequestInit) => {
    const response = await postRaw(url, body, options);
    return response.json();
  };

  const putRaw = async (url: string, body: object, options?: RequestInit) => {
    const putOptions = {
      ...defaultOptions,
      method: 'PUT',
      body: JSON.stringify(body),
    };
    const response = await fetch(rootUrl + url, { ...putOptions, ...options });
    await throwIfErrors(response);
    return response;
  };

  const put = async (url: string, body: object, options?: RequestInit) => {
    const response = await putRaw(url, body, options);
    return response.json();
  };

  return {
    get,
    post,
    put,
    getRaw,
    postRaw,
    putRaw,
  };
};
