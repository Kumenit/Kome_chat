import "../setting.css"
import TextInput2 from "../AuthPage/components/Textinput2";
import Button from "../AuthPage/components/Button";
import PhotoInput from "../AuthPage/components/PhotoInput";
import { useState,useContext } from "react";
import axios from "axios";
import {  projectId } from "../functions/constants";
import { Context } from "../functions/context";



interface Props{
trigger:boolean;
username: string;
  secret: string;
changeSetting:(params:any)=>any;
}




const Setting=({trigger,changeSetting,username,secret}:Props)=>{

    //state
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [avatar, setAvatar] = useState<File | undefined>(undefined);

const { user } = useContext(Context);


const headers = {
    "Project-ID": projectId,
    "User-Name": username,
    "User-Secret": secret,
  };
 
 
function submit(event: React.FormEvent<HTMLFormElement>)
{
    event.preventDefault();
    console.log("hi hi");
    console.log(firstName+":"+lastName+":"+email+":"+password+":"+avatar?.name);
  
    
      let formData = new FormData();
      formData.append("email", email);
      formData.append("username", email);
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("secret", password);
      if (avatar) {
        formData.append("avatar", avatar, avatar.name);
      }
    axios
      .patch("https://api.chatengine.io/users/me/", formData, {
        headers,
      })
      .then((r) => {
       console.log(r);
      })
      .catch((e) => console.log("Error", e));

}

    function close()
    {
    console.log("look");
    changeSetting(false);
    
   }  
    return(trigger)?(
        <div className="box">
		<form onSubmit={submit}>
			<h2>Edit form</h2>
			<div className="inputBox">
                <TextInput2
                    label="Email :  'warning' changing email is not recomanded"
                    name="first_name"
                    placeholder={user?.email+""}
                    type="email"
                    style={{ width: 100 ? "100%" : "calc(50% - 6px)",maxHeight:"10px" }}
                    onChange={(e) => setEmail(e.target.value)}
                />
			</div>
			<div className="inputBox">
                <TextInput2
                    label="First name"
                    name="first_name"
                    placeholder={user?.first_name+""}
                    style={{ width: 100 ? "100%" : "calc(50% - 6px)",maxHeight:"10px" }}
                    onChange={(e) => setFirstName(e.target.value)}
                />
			</div>
            <div className="inputBox">
                <TextInput2
                    label="Last name"
                    name="first_name"
                    placeholder={user?.last_name+""}
                    style={{ width: 100 ? "100%" : "calc(50% - 6px)",maxHeight:"10px" }}
                    onChange={(e) => setLastName(e.target.value)}
                />
			</div>
            <div className="inputBox">
                <TextInput2
                    label="Password"
                    name="first_name"
                    placeholder={user?.secret+""}
                    type="password"
                    style={{ width: 100 ? "100%" : "calc(50% - 6px)",maxHeight:"10px" }}
                    onChange={(e) => setPassword(e.target.value)}
                />
			</div>
            <div className="inputBox">
            <PhotoInput
                label="Profile picture "
                name="avatar"
                id="avatar-picker"
                style={{ width: 100 ? "100%" : "calc(50% - 6px)" }}
                onChange={(e) => {
                    if (e.target.files !== null) {
                        setAvatar(e.target.files[0]);
                      }
                }}
        />
            </div>
            
			<div className="links">
            <Button
                    type="submit"
                    style={{
                        width:"100px",
                        height:"60px",
                        backgroundColor:"#45F3FF",
                        color:"black"
                    }}
                >
                 EDIT
            </Button>
            <button onClick={close} style={{width: "100px",
    height: "53px",
    color: "white",
    backgroundColor: "#961D4E",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    fontFamily: "VisbyRoundCF-DemiBold",
    cursor: "pointer",
    transition: "all .44s ease",
    WebkitTransition: "all .44s ease",
    MozTransition: "all .44s ease",}}>CLOSE</button>
			</div>
			
		</form>
	</div>
    ):(<div></div>);
}
export default Setting;