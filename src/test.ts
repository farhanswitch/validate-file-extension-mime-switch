import { readFileSync } from "fs";
import ValidateFile from ".";

console.time("validate");
const testBinaryFile = new ValidateFile()
  .setExtension("mp3")
  .setMimeType("audio/mpeg")
  .setFileBuffer(readFileSync(process.cwd() + "/data/curanmor.mp3"))
  .validate();
console.timeEnd("validate");
console.log(testBinaryFile);

const testValidJSON = new ValidateFile()
  .setExtension("json")
  .setMimeType("application/json")
  .setFileBuffer(readFileSync(process.cwd() + "/data/sample.json"))
  .validate();

console.log(testValidJSON);
const testNotValidJSON = new ValidateFile()
  .setExtension("json")
  .setMimeType("application/json")
  .setFileBuffer(readFileSync(process.cwd() + "/data/bad.json"))
  .validate();

console.log(testNotValidJSON);

const testValidHtml = new ValidateFile()
  .setExtension("html")
  .setMimeType("text/html")
  .setFileBuffer(readFileSync(process.cwd() + "/data/sample.html"))
  .validate();

console.log(testValidHtml);
const testNotValidHtml = new ValidateFile()
  .setExtension("html")
  .setMimeType("text/html")
  .setFileBuffer(readFileSync(process.cwd() + "/data/sample.json"))
  .validate();

console.log(testNotValidHtml);
