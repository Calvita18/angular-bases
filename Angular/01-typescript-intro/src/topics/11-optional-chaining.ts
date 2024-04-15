export interface Passenger{
    name:string;
    children?:string[];

}

const passenger1: Passenger = {
    name:'Claudia',
}

const passenger2: Passenger = {
    name:'Laura',
    children: ['Natalia', 'Sara'],
}

const printChildren = (passenger: Passenger) =>{
    const hoyManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, hoyManyChildren);
}

printChildren(passenger2);

