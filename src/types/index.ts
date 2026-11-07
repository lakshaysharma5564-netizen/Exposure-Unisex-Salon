export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  isConfirmed: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  isConfirmed: boolean;
  confirmationNotice?: string;
  items: ServiceItem[];
  imageSrc: string;
  imageAlt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'haircut' | 'grooming' | 'styling' | 'colour' | 'interior';
  tag: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

export interface AppointmentEnquiry {
  fullName: string;
  phone: string;
  category: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
