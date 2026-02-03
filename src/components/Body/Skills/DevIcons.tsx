import "./DevIcons.css";

interface DevIconsProps {
  icons: {
    name: string;
    logoStyle: string;
  }[];
}

export default function DevIcons({ icons }: DevIconsProps) {
  return (
    <div className="dev-icons-container">
      {icons.map((icon, index) => (
        <div key={index} className="icon-container" title={icon.name}>
          <i className={`devicon-${icon.name}-${icon.logoStyle} colored`}></i>
        </div>
      ))}
    </div>
  );
}
