import { readFile, readFileSync } from "../../fs.ts";
import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";

// Need to convert to promises, otherwise test() won't report error correctly.
test(async function readFileSuccess() {
  const data = await new Promise((res, rej) => {
    readFile("_tests/testdata/hello.txt", (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    });
  });

  assert(data instanceof Uint8Array);
  assertEquals(new TextDecoder().decode(data as Uint8Array), "hello world");
});

test(async function readFileEncodeUtf8Success() {
  const data = await new Promise((res, rej) => {
    readFile("_tests/testdata/hello.txt", { encoding: "utf8" }, (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    });
  });

  assertEquals(typeof data, "string");
  assertEquals(data as string, "hello world");
});

test(function readFileSyncSuccess() {
  const data = readFileSync("_tests/testdata/hello.txt");
  assert(data instanceof Uint8Array);
  assertEquals(new TextDecoder().decode(data as Uint8Array), "hello world");
});

test(function readFileEncodeUtf8Success() {
  const data = readFileSync("_tests/testdata/hello.txt", { encoding: "utf8" });
  assertEquals(typeof data, "string");
  assertEquals(data as string, "hello world");
});

runIfMain(import.meta);
