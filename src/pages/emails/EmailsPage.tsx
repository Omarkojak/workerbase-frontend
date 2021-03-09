import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import EmailsForm from "./EmailsForm";
import { EmailData } from "./types";
import { api, axios } from "../../utils/api";

const EmailsPage = () => {
  const handleSendEmail = async (
    emailData: EmailData,
    onSuccess: () => void
  ) => {
    try {
      const { data } = await axios.post(api.EMAILS, emailData);
      onSuccess();
      console.log("Email sent", data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Typography variant="h4">Emails</Typography>
      </AppBar>
      <EmailsForm handleSendEmail={handleSendEmail} />
    </>
  );
};

export default EmailsPage;
