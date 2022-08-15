import { compose, pipe } from "lodash\fp";

let input = "Javascript";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

console.log("\nConventional Style Composition: ", result);

const transform = compose(wrapInDiv, toLowerCase, trim);
console.log("\nLodash Composed output: ", transform(input));

const pipedTransform = pipe(trim, toLowerCase, wrapInDiv);
console.log("\nLodash Composed output: ", pipedTransform(input));
