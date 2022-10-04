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
            window.location.reload();
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
            console.log(container);
            await localStorage.setItem('contactList', JSON.stringify(container));
            window.location.reload();
        }
        catch(error){
            alert(error);
            window.location.reload();
        }
    }

    //delete data from json file
    public delete(dataU:Object){
        try{
            localStorage.setItem('contactList', JSON.stringify(dataU));
            window.location.reload();
        }
        catch(error){
            alert(error);
            window.location.reload();
        }
    }

}