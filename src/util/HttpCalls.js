import data from '../data.json';

/**
 * GetHttp
 * Http call - get method 
 * Params (String url)
 */

export async function GetHttp(url){
    return await new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(data.map((item,index)=>{
                item.id=index+1;
                return item;
            }));
        },1000);
    });
}