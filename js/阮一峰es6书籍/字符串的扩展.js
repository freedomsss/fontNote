console.log("\uD842\uDFB7");
console.log("\u5211");

let obj = {
  a: 1,
  b: 2,
};

// for (let key of '\u5211') {
//   console.log(key)
// }
// 使用模板字符串表示多行字符串，所有的空格和缩进都会被保留再输出中。
console.log(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());
// 模板字符串能够嵌套，模板字符串的变量中可以嵌套另一个模板字符串

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
console.log(template);