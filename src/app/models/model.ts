export enum Role {
  STAFF = 'staff',
  STUDENT = 'student',
  MANAGER = 'manager',
  ADMIN = 'admin'
};

export enum Gender {
  FEMALE = 'female',
  MALE = 'male'
}

export interface Profile {
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string,
  address: Address,
  role: Role,
  username: string,
  profilePhotoUrl: string,
  companies?: [Company, Company],
  gender: Gender
}

export interface Address {
  city: string,
  street: string,
  postalCode: string
}

export interface Company {
  id?: number,
  name?: string,
  description?: string,
  location?: Address
}