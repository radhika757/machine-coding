export const folderStructures: Record<string, any[]> = {
    tabs: [
      {
        name: "tabs",
        type: "folder",
        children: [
          { name: "Tab.tsx", type: "file" },
          { name: "TabPanel.tsx", type: "file" },
          {
            name: "helpers",
            type: "folder",
            children: [{ name: "tabUtils.ts", type: "file" }],
          },
        ],
      },
    ],
    buttons: [
      {
        name: "buttons",
        type: "folder",
        children: [
          { name: "Button.tsx", type: "file" },
          { name: "IconButton.tsx", type: "file" },
        ],
      },
    ],
    dropdown: [
      {
        name: "dropdown",
        type: "folder",
        children: [
          { name: "Dropdown.tsx", type: "file" },
          { name: "DropdownItem.tsx", type: "file" },
        ],
      },
    ],
  };
  