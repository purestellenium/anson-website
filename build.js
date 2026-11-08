import { readdir, readFile } from 'node:fs/promises';
import { path } from 'node:path';
import { marked } from 'marked';

const POSTS_FOLDER = path.join(import.meta.dirname, "posts");
const names = await readdir(POSTS_FOLDER);

console.log(names);
