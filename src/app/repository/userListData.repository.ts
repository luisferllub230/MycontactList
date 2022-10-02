import userList from '../data/userList.json';

export class userListDataRepository
{

    private constructor() {}

    public static initialize(): userListDataRepository{
        return new userListDataRepository();
    }

    private dataList:Array<Object> = userList;

    //read data from json file
    public readData():Array<Object>{
        return this.dataList;
    }

}