import { makeAutoObservable } from "mobx";

class Friends{
    friends_id: number[] = [2,3,4,56,7];

    constructor() {
        makeAutoObservable(this)
    }

    sortFriends = (current_id : number, next_id : number) => {
        return current_id - next_id;
    }

    addFriend = async(id: number) => {
        this.friends_id.push(id);
        this.friends_id = this.friends_id.sort(this.sortFriends);
        console.log(this.friends_id);
        return id;
    }

    deleteFriend = async(id: number) => {
        this.friends_id = this.friends_id.filter(item => item != id);
        console.log(this.friends_id);
        return id;
    }
}

export default new Friends()