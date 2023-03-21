import React, { useContext, CSSProperties } from "react";

import valley from "../assets/shoot.jpg";

import { useIsMobile } from "../functions/isMobile";
import { Context } from "../functions/context";
import { HomeFilled,
  MessageFilled,
  SettingFilled,} from "@ant-design/icons";
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
  MessageFormProps,
  ChatCardProps,
  ChatHeaderProps,
} from "react-chat-engine-advanced";

import "../theme.css";

import Sidebar from "./Sidebar";
import MessageForm from "./MessageForm";
import UserSearch from "./UserSearch";
import ChatCard from "./ChatCard";
import ChatHeader from "./ChatHeader";
import Home from "./Home";
import Setting from "./Setting";

import { projectId } from "../functions/constants";

const ChatsPage = () => {
  // Hooks
  const { user } = useContext(Context);
  const isMobile: boolean = useIsMobile();
                             
 // console.log(user?.username);                  //hwere
    
  const [Home1,setHome]=React.useState(true);
  const [setting,setSetting]=React.useState(false);
  let classtoogle=Home1?"ce-sidebar-icon-active":null;
  let classtoogle2=Home1?null:"ce-sidebar-icon-active";
  let classtoogle3=setting?"ce-sidebar-icon-active":null;

  function Changesetting(mesage:boolean)
  {
    setSetting(mesage);
  }
  // Chat Engine Hooks
  const username: string = user ? user.username : "";
  const secret: string = user && user.secret !== null ? user.secret : "";
  const chatProps = useMultiChatLogic(projectId, username, secret);

  const backgroundImage = {
    backgroundImage: `url(${valley})`, // Here due to variable
  } as CSSProperties;

  return (
    <div className="background-image" style={backgroundImage}>
      <div className="background-gradient-light">
        <div 
          style={{
            position: "relative",
            top: isMobile ? "0px" : "10vh",
            left: isMobile ? "0px" : "calc(50vw - 3vw - 1.5vw - 35vw)",
            height: isMobile ? "100vh" : "80vh",
            width: isMobile ? "100vw" : "calc(100vw - 10.5vw - 10.5vw)",
            backgroundColor: "rgb(40,43,54)",
            borderRadius:"9px"
            
          }}
        >
          <div
            style={{
              width: "6vw",
              height: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "rgb(40,43,54)",
              borderTopLeftRadius:"10px",
              borderBottomLeftRadius:"10px",
            }}
          >
            <div style={{ textAlign: "center",zIndex:"500" }}>
            <div className="ce-sidebar-menu">
        <HomeFilled className={`ce-sidebar-icon ${classtoogle2}`} onClick={()=>{setHome(false); setSetting(false)}}/>
        <MessageFilled className={`ce-sidebar-icon ${classtoogle}`} onClick={()=>{setHome(true); setSetting(false)}}/>
        <SettingFilled className={`ce-sidebar-icon ${classtoogle3}`} onClick={()=> setSetting(setting =>!setting)}/>
        </div>
            <Sidebar />
            </div>
            
          </div>

          <div
            style={{
              width: isMobile ? "100vw" : "calc(100vw - 6vw)",
              position: "absolute",
              top: "0px",
              left: isMobile ? "0px" : "6vw",
              height: "100%", // Fill parent height for extra
             
            }}
          >
            <Setting trigger={setting}
             changeSetting={Changesetting}
             username={chatProps.username}
             secret={chatProps.secret}
             
             />
            <MultiChatSocket {...chatProps} />
           {Home1 ?
            <MultiChatWindow
              {...chatProps}
              renderChatForm={() => (
                <UserSearch
                  username={chatProps.username}
                  secret={chatProps.secret}
                  onSelect={(chatId: number) =>
                    chatProps.onChatCardClick(chatId)
                  }
                />
              )}
              renderChatCard={(props: ChatCardProps) => (
                <ChatCard
                  {...props}
                  username={chatProps.username}
                  onChatCardClick={chatProps.onChatCardClick}
                  isActive={
                    props.chat !== undefined &&
                    chatProps.activeChatId === props.chat.id
                  }
                  chat={props.chat}
                />
                
              )}
              renderChatHeader={(props: ChatHeaderProps) => (
                <ChatHeader
                  {...props}
                  chat={chatProps.chat}
                  username={chatProps.username}
                  secret={chatProps.secret}
                />
              )}
              renderMessageForm={(props: MessageFormProps) => (
                <MessageForm {...props} />
              )}
              renderChatSettings={() => <div className="ce-empty-settings" />}
              style={{ height: "100%" }}
            />:<Home />
             }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
