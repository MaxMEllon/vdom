/// <reference path="./index.d.ts" />

import { h } from "./";
import { renderToString } from "./renderToString";

const a = (
  <div>
    <p>hogehoge</p>
  </div>
);

console.log(renderToString(a));
