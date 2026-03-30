import { minify } from '@swc/html';

const result = await minify('test');

console.log({ result });
