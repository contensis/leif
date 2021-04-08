export interface NavigationProps {
  childCount: number;
  children: any[];
  displayName: string;
  entry: any
  id: string
  includeInMenu: boolean
  isCanonical: boolean
  language: string
  parentId: string
  path:string
  projectId: string
  slug:string
  version: any
}

export interface MenuProps {
  level: number;
}

interface NavigationGeneratedObject {
  displayName: string;
  slug: string;
  path: string;
  childCount: number;
  id: string;
  showChildren: boolean;
  includeInMenu: boolean;
}

export interface NavigationCuratedObject {
  level_1: any;
  level_2: any;
} 
