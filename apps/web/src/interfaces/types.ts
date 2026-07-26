// types.ts
export interface NavigationItem {
  name: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  href: string;
}
