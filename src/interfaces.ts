import supportedExtension from "./data/supported-extension";
import listMimeType from "./data/supported-mime";

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

export type ExtensionsType = typeof supportedExtension[number];
export type MimeType = typeof listMimeType[number];

export type FileType = "text" | "binary";
