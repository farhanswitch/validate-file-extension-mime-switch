export type ExtensionDataType = {
  magicNumbers: Array<MagicNumberType>;
  mimeType: string;
};

export type MagicNumberType = {
  offset: string;
  value: string;
  length: number;
};

export type FilesType = {
  [key: string]: ExtensionDataType;
};
