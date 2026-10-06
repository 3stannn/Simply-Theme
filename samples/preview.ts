// Simply Slate Theme — syntax preview
interface Theme {
  name: string;
  colors: string[];
  enabled: boolean;
}

const theme: Theme = {
  name: "Simply Slate",
  colors: ["#72C7B8", "#B9A3E3", "#E5BC83"],
  enabled: true,
};

export function describeTheme({ name, colors }: Theme): string {
  const count = colors.length;
  return `${name} has ${count} accent colors.`;
}

console.log(describeTheme(theme));
