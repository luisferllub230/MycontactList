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
        try{
            let container = dataI
            this.dataList.push(container);
            await localStorage.setItem('contactList', JSON.stringify(container));
            window.location.reload();
        }
        catch(error){
            alert(error);//bug when the local storage is removed
            window.location.reload();
        }
    }

    //update data int local storage
    public updateData(dataU:Object){
        try{
            
            // container.push(dataU);
            // localStorage.setItem('contactList', JSON.stringify(container));
        }
        catch(error){
            alert(error);
        }
    }

}