import { InterestedHome } from './interested-home';

export class HomeTenant {
    constructor(public id: number, public name: string, public email: string, public contactNumber: number, public homesOfInterest: Array<InterestedHome>){
    }
}


/*

    int id;
	String name;
	String email;
	Long contactNumber;
	List <InterestedHome> homesOfInterest;


*/