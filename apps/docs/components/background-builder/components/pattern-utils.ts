export function getPatternCSS(pattern: string, color: string): string {
  switch (pattern) {
    case "grid":
      return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;
    case "dots":
      return `radial-gradient(${color} 1px, transparent 1px)`;
    case "cross":
      return `radial-gradient(${color} 1px, transparent 1px), radial-gradient(${color} 1px, transparent 1px)`;
    case "diagonal":
      return `repeating-linear-gradient(45deg, ${color} 0, ${color} 1px, transparent 0, transparent 50%)`;
    case "hexagon":
      return `radial-gradient(circle farthest-side at 0% 50%, transparent 47%, ${color} 49%, ${color} 51%, transparent 53%), radial-gradient(circle farthest-side at 100% 50%, transparent 47%, ${color} 49%, ${color} 51%, transparent 53%)`;
    case "waves":
      return `radial-gradient(ellipse 100% 200% at 0% 50%, transparent 45%, ${color} 50%, transparent 55%)`;
    case "circuit":
      return `linear-gradient(90deg, ${color} 1px, transparent 1px), linear-gradient(${color} 1px, transparent 1px), radial-gradient(${color} 2px, transparent 2px)`;
    default:
      return "";
  }
}

export function getPatternSize(pattern: string): string {
  switch (pattern) {
    case "grid":
      return "40px 40px";
    case "dots":
      return "20px 20px";
    case "cross":
      return "20px 20px";
    case "diagonal":
      return "10px 10px";
    case "hexagon":
      return "40px 23px";
    case "waves":
      return "30px 30px";
    case "circuit":
      return "60px 60px, 60px 60px, 60px 60px";
    default:
      return "20px 20px";
  }
}

