const home = require("./pages/home");
console.log( home.name);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement("div",null,home.name)); // 가운데는 옵션