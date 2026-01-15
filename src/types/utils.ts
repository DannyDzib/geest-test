export type Departments = 'Ventas' | 'Desarrollo' | 'Marketing' | 'Soporte';

export type Contact = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  department: string;
};

export type Tags = Departments;
