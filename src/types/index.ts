export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  discountPrice?: string;
  disclaimer?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export interface CartItem {
  serviceId: string;
  quantity: number;
}

export interface UserDetails {
  username: string;
  email: string;
  isSignedIn: boolean;
}