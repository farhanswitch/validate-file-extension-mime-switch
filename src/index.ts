//Local modules
import supportedExtensions from "./data/supported-extension";
import file from "./data/file";
import htmlTagList from "./data/html";
import { setFileType } from "./decorator";
import type {
  FilesType,
  ExtensionDataType,
  ExtensionsType,
  FileType,
  MimeType,
} from "./interfaces";

class ValidateFile {
  private supportedExtensions: Array<string> = JSON.parse(
    JSON.stringify(supportedExtensions)
  );
  private files: FilesType = file;
  private fileBuffer: ArrayBuffer | never[] = [];
  private fileExtension: ExtensionsType | null = null;
  private fileMimeType: MimeType | null = null;

  setExtension(extension: ExtensionsType): ValidateFile {
    if (this.supportedExtensions.includes(extension)) {
      this.fileExtension = extension;
      return this;
    } else throw new Error(`Extension ${extension} is not supported yet`);
  }
  setMimeType(mimeType: MimeType): ValidateFile {
    if (this.fileExtension === null) {
      throw new Error(
        "Please set fileExtension first with method setExtension"
      );
    } else {
      if (this.files?.[this.fileExtension]?.mimeType === mimeType) {
        this.fileMimeType = mimeType;
        return this;
      } else {
        throw new Error(
          `Mime type ${mimeType} is not matching with extension ${this.fileExtension}`
        );
      }
    }
  }
  setFileBuffer(fileBuffer: ArrayBuffer): ValidateFile {
    this.fileBuffer = fileBuffer;
    return this;
  }
  @setFileType
  validate(type?: FileType): boolean {
    if (JSON.stringify(this.fileBuffer) === "[]") {
      throw new Error("Please set fileBuffer first with method setFileBuffer");
    }
    if (this.fileMimeType === null) {
      throw new Error("Please set fileMimeType first with method setMimeType");
    }
    if (type) {
      if (type === "text") {
        if (this.fileExtension?.toLowerCase() === "html")
          return this.validateHTML();
        else if (this.fileExtension?.toLowerCase() === "json")
          return this.validateJSON();
      }
    }
    if (this.files?.[this.fileExtension as unknown as ExtensionsType]) {
      const currentData: ExtensionDataType = this.files[
        this.fileExtension as unknown as ExtensionsType
      ] as unknown as ExtensionDataType;
      const { magicNumbers, mimeType } = currentData;
      let isValid: boolean = false;
      for (let i: number = 0; i < magicNumbers.length; i++) {
        const bufferToValidate: Uint8Array = new Uint8Array(
          this.fileBuffer.slice(
            +(magicNumbers[i]?.offset ?? 0),
            +(magicNumbers[i]?.offset ?? 0) + (magicNumbers[i]?.length ?? 0)
          )
        );
        const str16Array: Array<string> = [];
        bufferToValidate.forEach((data) =>
          str16Array.push(
            data.toString(16).length === 2
              ? data.toString(16)
              : `${"0".repeat(2 - data.toString(16).length)}${data.toString(
                  16
                )}`
          )
        );
        // console.log(str16Array.join(""));
        if (
          str16Array.join("").toUpperCase() ===
            magicNumbers[i]?.value.toUpperCase() &&
          this.fileMimeType === mimeType
        ) {
          isValid = true;
          break;
        }
      }
      return isValid;
    }
    return false;
  }
  private validateJSON(): boolean {
    try {
      JSON.parse(this.fileBuffer.toString());
      return true;
    } catch (err: unknown) {
      console.log("Error when parsing data to JSON -> ", err);
      return false;
    }
  }
  private validateHTML(): boolean {
    for (const tag of htmlTagList) {
      if (this.fileBuffer.toString().includes(`<${tag}`)) {
        return true;
      }
    }
    return false;
  }
}

export default ValidateFile;

export * from "./interfaces";
