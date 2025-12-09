export interface UserProfile {
  email: string;
  fullName: string;
  phone: string | null;
  birthday: string | null; // Backend trả về Date hoặc String (yyyy-MM-dd)
  address: string | null;
  jobTitle: string | null;
  
  role?: string; 
}