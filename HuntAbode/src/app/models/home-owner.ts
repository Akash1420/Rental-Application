import { Home } from './home';

export class HomeOwner {
    constructor(public id: number, public name: string, public email:string, public contactNumber: number, public homes: Array<Home>){
    }
}


/*

    int id;
	String name;
	String email;
	long contactNumber;
	List<Home> homes;

*/