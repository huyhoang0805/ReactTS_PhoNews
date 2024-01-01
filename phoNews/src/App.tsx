
import './App.css';
//axios
import axios from "axios";

const App = () => {
  const getDataList  = async () => {
      const {data} = await axios({
        method: "get",
        url: "https://64198b7ef398d7d95d428da4.mockapi.io/api/getAll/login"
      })
      return data
  }

  let valueDataEmail : String; 
  let valueDataPass : String; 

  const getInputEmail = (e: React.FormEvent<HTMLInputElement>)=>{
    const valueInput = e.target.value;
    valueDataEmail = valueInput;
  }
   const getInputPass = (e: React.FormEvent<HTMLInputElement>)=>{
    const valueInput = e.target.value;
    valueDataPass = valueInput;
  }

  const getData = async(email: String , pass: String) => {
    const dataList = await getDataList();
    let currentID = -1;
    dataList.forEach((user:{})=>{
        if(user.email === email){
          currentID = user.id;
        }
    })
    const currentUser = await axios({
      method: 'get',
      url: `https://64198b7ef398d7d95d428da4.mockapi.io/api/getAll/login/${currentID}`
    })

    const findedUser = currentUser.data;
    console.log(email, pass, findedUser)
    if(findedUser.pass === pass){
      alert("Dang kys thanh cong !")
    }
  }

  const editUser = async(email: String , pass: String)=>{
     const dataList = await getDataList();
    let currentID = -1;
    dataList.forEach((user:{})=>{
        if(user.email === email){
          currentID = user.id;
        }
    })
    const currentUser = await axios({
      method: 'get',
      url: `https://64198b7ef398d7d95d428da4.mockapi.io/api/getAll/login/${currentID}`
    })

    const findedUser = currentUser.data;
    console.log(email, pass, findedUser)
    axios({
      method: "put",
      url: `https://64198b7ef398d7d95d428da4.mockapi.io/api/getAll/login/${currentID}`,
      data: {
        createdAt: "2024-01-01T03:29:06.789Z",
        name: findedUser.name,
        avatar: findedUser.avatar,
        email: email ? email : findedUser.email,
        pass: pass ? pass : findedUser.pass,
        favorite: [],
        id: findedUser.id
      }
    })
  }
  


  return (
    <div>
    <h1>Login</h1>
    <input type="text" name='email' placeholder='nhap email' onInput={getInputEmail} />
    <input type="text" name='pass' placeholder='nhap pass' onInput={getInputPass}/>
    <button onClick={()=>{getData(valueDataEmail,valueDataPass)}}>Submit</button>
    <button onClick={()=>{editUser(valueDataEmail,valueDataPass)}}>Edit</button>
    </div>
  )
}

export default App
