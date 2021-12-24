import axios from "axios";


export const fetchData = async (id) => {
    let res = await axios("https://jsonplaceholder.typicode.com/todos/"+id);
    console.log("attttt2342",res.data);
    return res.data;
};
export const fetchData2 = async () => {
    let res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/1",
    });
    return res.data;

};


export const initialServices={
    fetchData,
    fetchData2
}
