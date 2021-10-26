import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../../page-components/GroupStudy/ChatFeed";
import LoginForm from "../../page-components/GroupStudy/LoginForm";
import { Button } from "@material-ui/core";
import "./styles.css";

const projectID = "22f2d28b-d574-4882-a4ef-bf0e45a8baf4";

const GroupStudying = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        style={{
          position: "absolute",
          bottom: "42px",
          right: "145px",
          zIndex: "1",
        }}
        onClick={() => {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          window.location.reload();
        }}
      >
        LogOut
      </Button>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </>
  );
};

export default GroupStudying;
