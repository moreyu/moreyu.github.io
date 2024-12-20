const rightMenu = {
  // ... 保持原样的右键菜单配置
  defaultEvent: { 
    'menu_random': () => { toRandomPost() },
    'menu_search': () => { document.querySelector("#local-search-input").focus() },
    // ... 其他菜单项
  }
} 