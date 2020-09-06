import React from "react";

interface ISidebarProps {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
}

export const Sidebar: React.FC<ISidebarProps> = ({
  mainContent,
  sidebarContent,
}) => {
  return (
    <div className="Sidebar">
      <aside className="Sidebar__sidebar-section">{sidebarContent}</aside>
      <div className="Sidebar__main-section">{mainContent}</div>
    </div>
  );
};
