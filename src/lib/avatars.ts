export const avatarGradients = [
  "linear-gradient(135deg,#7AAFD4,#A78BD4)",
  "linear-gradient(135deg,#90C8C0,#7AAFD4)",
  "linear-gradient(135deg,#7EC48A,#90C8C0)",
  "linear-gradient(135deg,#E8907A,#D4B870)",
  "linear-gradient(135deg,#A78BD4,#E8907A)",
  "linear-gradient(135deg,#D4B870,#7EC48A)",
  "linear-gradient(135deg,#7AAFD4,#90C8C0)",
  "linear-gradient(135deg,#A78BD4,#7AAFD4)",
];

export function gradientFor(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return avatarGradients[h % avatarGradients.length];
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
