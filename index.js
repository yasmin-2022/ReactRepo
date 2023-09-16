{/* <div class="parent">
<div class="child1"
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div>
    <div class="child2>
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div> */}
// </div> */}

const parent = React.createElement("div", { class: 'Parent' }, [
  React.createElement("div", { class: 'child1' }, [
  React.createElement("h1", {}, "I'm h1 Tags"), React.createElement("h2", {}, "I'm h2 Tags")]),
  React.createElement("div", { class: 'child2' }, [
  React.createElement("h1", {}, "I'm h1 Tags"),
  React.createElement("h2", {}, "I'm h2 Tags")])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)