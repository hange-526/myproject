let defaultCity='秦皇岛'
try{
    if(localStorage){
        defaultCity=localStorage.city
    }
}catch(e){
    e.message
}
export default {
    city:defaultCity
}