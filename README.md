# Package validate-file-extension-mime-switch

## Description

Package to validating file extension, file mime type based on their buffer.

## How to Use

### Install package with npm, yarn, etc

```shell
    npm i validate-file-extension-mime-switch
```

```shell
    yarn add validate-file-extension-mime-switch
```

### Create an instance, set fileExtension, set fileMimeType, set fileBuffer, and the get validation result

```ts
import { readFileSync } from "fs";
import ValidateFile from "validate-file-extension-mime-switch";

console.time("validate");
const test1 = new ValidateFile()
  .setExtension("mp3")
  .setMimeType("audio/mpeg")
  .setFileBuffer(readFileSync(process.cwd() + "/data/myFavMusic.mp3"))
  .validate();
console.timeEnd("validate");
console.log(test1);
```
