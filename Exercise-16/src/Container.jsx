import { useState } from "react";
export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);  /*valore precdente dello stato*/
  }
  return (
    <div id="children-components" className="bg-white border-red-800 border-2">
      <div className="app-title">
        {title}
        <button className="border-2 flex bg-green-400"onClick={handleToggleCollapse}>Toggle</button>
      </div>
      {!collapsed && <div className="app-content">{children}</div>}
    </div>
  );
}
