import { readFileSync } from "fs";
import ValidateFile from ".";

console.time("validate");
const test1 = new ValidateFile()
  .setExtension("mp3")
  .setMimeType("audio/mpeg")
  .setFileBuffer(readFileSync(process.cwd() + "/data/curanmor.mp3"))
  .validate();
console.timeEnd("validate");
console.log(test1);
