interface SidebarSectionProps {
  title: string;
  children?: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <div className="mt-3">
      <p className="uppercase text-xs text-gray-400 px-3 tracking-wider mb-1">
        {title}
      </p>
      {children}
    </div>
  );
};

export default SidebarSection;
