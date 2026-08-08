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

export interface QueryLatest {
  title: string;
  penulis: string;
  ringkasan: string;
  publishedAt: string;
  imageRef: string;
  slug: string;
  imageCaption: string;
}
