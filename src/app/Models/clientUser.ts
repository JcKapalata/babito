export interface UserClient {
  id: number;
  email: string;
  nom?: string;
  prenom?: string;   
  password?: string;
  token?: string; 
  lastSessionTag?: string;  
}