import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {EmailData} from './types';

interface EmailsListProps {
  emails: {
    sentEmails: EmailData[];
    receivedEmails: EmailData[];
  };
}

const EmailsList = ({ emails }: EmailsListProps) => {
  const [activeTab, setActiveTab] = useState("sent");
  const classes = useStyles();

  const emailsShown =
    activeTab === "sent" ? emails.sentEmails : emails.receivedEmails;

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
      setActiveTab(newValue);
    };
  

  return (
    <>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="simple tabs example"
      >
        <Tab label="Sent" value="sent" />
        <Tab label="Recieved" value="recieved" />
      </Tabs>
      <div>
        {emailsShown.map(email => (
          <div className={classes.emailContainer}>
            <Typography variant="h6">from: {email.sender}</Typography>
            <Typography variant="h6">to: {email.recepient}</Typography>
            <Typography variant="h6">subject: {email.subject}</Typography>
            <Typography variant="h6">body: {email.body}</Typography>

          </div>
        ))}
      </div>
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    emailContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: "30px 20px",
    }
  })
);

export default EmailsList;
