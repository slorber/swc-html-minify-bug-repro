import { minify } from '@swc/html';
import fs from 'node:fs/promises'

async function test(inputName, outputName) {
    const input = await fs.readFile(inputName,"utf8")

    const result = await minify(input);
    const code = result.code;
    if (result.errors?.length) {
        console.log("Errors",result.errors);
    }
    else {
        console.log("minify success, no errors");
    }

    await fs.writeFile(outputName,code,"utf8");
}

await test("input.html","output.html");
