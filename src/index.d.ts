type Gender = 'male' | 'female';

interface User {
    name: string;
    age: number;
    gender: Gender;
}

interface Employee extends User {
    company: string;
}

export function getPersons(): User[];

export function personToString(person: User | Employee): string;
