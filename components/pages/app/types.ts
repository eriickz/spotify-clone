export type TabBarIconType = "home" | "discovery" | "heart" | "profile"

export interface TabBarIconProps {
  focused: boolean,
  color: string,
  size: number,
  type: TabBarIconType,
}

export interface CategoryProps {
  title: string,
  active?: boolean
}