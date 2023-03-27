import { useContext, useState } from "react";

import { CaretUpFilled } from "@ant-design/icons";

import { MessageObject, MessageFormProps } from "react-chat-engine-advanced";

import { nowTimeStamp } from "../functions/dates";
import { Context } from "../functions/context";


const MessageForm = (props: MessageFormProps) => {
  const [text, setText] = useState<string>("");
  const { user } = useContext(Context);
  const [mydate,setdate]=useState(nowTimeStamp);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      return;
    }
    if (!user || user.email === null) {
      return;
    }

    setText("");
    //

  console.log(mydate);
  async function getCurrentDateTime() {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Africa/Nairobi');
    const data = await response.json();
    return data.datetime;
  }
  
  getCurrentDateTime().then(dateTime => setdate(dateTime));
  
  console.log(mydate);
  //console.log(nowTime);
    const message: MessageObject = {
      text: text,
      sender_username: user.email,
      created: mydate,
      custom_json: {},
      attachments: [],
    };

    props.onSubmit && props.onSubmit(message);
  };

  return (
    <div>
      
    <form onSubmit={onSubmit} className="ce-custom-message-form">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Type something..."
        className="ce-custom-message-input"
      />

      <button type="submit" className="ce-custom-send-button">
        <CaretUpFilled />
      </button>
    </form>
    </div>
  );
};

export default MessageForm;
