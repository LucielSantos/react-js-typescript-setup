type objType = {
  [key: string]: string;
};

export const resolveRoutePath = (path: string, obj: objType) => {
  let resolvedPath = path;

  Object.keys(obj).forEach(key => {
    resolvedPath = resolvedPath.replace(`:${key}`, obj[key]);
  });

  return resolvedPath;
};
