const textFileMimeExt: { [key: string]: string } = {
  html: "text/html",
  json: "application/json",
};
export const setFileType = (
  _target: Object,
  _methodName: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod: Function = descriptor.value;

  descriptor.value = function (...args: string[]) {
    //@ts-ignore
    if (Object.keys(textFileMimeExt).includes(this.fileExtension)) {
      //@ts-ignore
      if (textFileMimeExt[this.fileExtension] === this.fileMimeType) {
        return originalMethod.apply(this, [...args, "text"]);
      }
    }

    return originalMethod.apply(this, [...args, "binary"]);
  };
  return descriptor;
};
