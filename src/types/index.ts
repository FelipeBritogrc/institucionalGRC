export interface NewsItem {
  id: string;
  title: string;
  subtitle?: string;     // Added optional subtitle
  img: string;
  summary: string;
  content: string;
  date: string;
  readTime?: string;     // Added optional readTime
  author?: string;       // Added optional author
  category: string;
}

export interface StoreInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  lat: number;
  lng: number;
  accessibility: boolean;
  parking: boolean;
}

export interface BrandInfo {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
}

export interface NewsFilters {
  searchTerm: string;
  selectedCategory: string;
  currentPage: number;
}

export interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'CLT' | 'Estágio';
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}
