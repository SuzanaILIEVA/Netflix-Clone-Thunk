import axios from "axios";


export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    //Yapacagimiz butun isteklere eklenecek olan yapi
    headers: {
        accept: 'application/json',
        //YETKILENDIRME
        Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`
      },
      params:{
        language: "tr-TR",
      },

  
});