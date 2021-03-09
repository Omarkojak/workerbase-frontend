import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import EmailsForm from "./EmailsForm";
import { EmailData } from "./types";
import { api, axios } from "../../utils/api";
import EmailsList from "./EmailsList";

const EmailsPage = () => {
  const [emails, setEmails] = useState<{
    sentEmails: EmailData[];
    receivedEmails: EmailData[];
  }>({ sentEmails: [], receivedEmails: [] });

  const handleSendEmail = async (
    emailData: EmailData,
    onSuccess: () => void
  ) => {
    try {
      const { data } = await axios.post(api.EMAILS, emailData);
      onSuccess();
      // to update localstate with no need to request from the api the emails again
      // this is based on the assumption that if i have the time there is a user logged in
      // so we are sure that the email sent is from this user so we can append
      // it to the list of sent emails
      setEmails({
        receivedEmails: emails.receivedEmails,
        sentEmails: [...emails.sentEmails, data],
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getEmails = async () => {
    const { data } = await axios.get(api.EMAILS);
    setEmails(data);
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Typography variant="h4">Emails</Typography>
      </AppBar>
      <EmailsForm handleSendEmail={handleSendEmail} />
      <EmailsList emails={emails} />
    </>
  );
};

export default EmailsPage;
