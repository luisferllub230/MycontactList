import { timeout } from 'rxjs';
import userList from '../data/userList.json';

export class userListDataRepository
{

    private constructor() {}

    public static initialize(): userListDataRepository{
        return new userListDataRepository();
    }

    private dataListJson:Array<any> = userList;
    private dataList:any = JSON.parse(localStorage.getItem('contactList') || '{}');

    

    //read data from json file
    public readData():Array<any>{
        if(!localStorage.getItem('contactList')){

            localStorage.setItem('contactList', JSON.stringify(this.dataListJson));
            return this.dataListJson;
        }
        else{

            return this.dataList;
        }
    }

    //insert data into json file
    public async insertData(dataI:Object){
        let conversor = await JSON.parse(localStorage.getItem('contactList') || '{}');
        conversor.push(dataI);
        this.dataList.push(dataI);
        await localStorage.setItem('contactList', JSON.stringify(conversor));
    }

}