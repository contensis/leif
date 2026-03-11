export interface PlantCategory {
  title: string;
  description?: string;
  image: { src: string; alt: string };
  path: string;
}

export interface Props {
  title?: string;
  categories: PlantCategory[];
}
