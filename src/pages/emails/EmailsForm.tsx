import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { EmailData } from "./types";

interface EmailsFormProps {
  handleSendEmail: (emailData: EmailData, onSuccess: () => void) => void;
}

const EmailsForm = ({ handleSendEmail }: EmailsFormProps) => {
  const [emailData, setEmailData] = useState<EmailData>({
    sender: "",
    recepient: "",
    body: "",
    subject: "",
  });
  const classes = useStyles();

  const handleChange = (prop: keyof EmailData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailData({ ...emailData, [prop]: event.target.value });
  };

  const onSuccess = () => {
    setEmailData({ sender: "", recepient: "", body: "", subject: "" });
  };

  return (
    <Box className={classes.formContainer}>
      <TextField
        label="Sender"
        value={emailData.sender}
        onChange={handleChange("sender")}
        className={classes.textField}
      />
      <TextField
        label="Recepient"
        value={emailData.recepient}
        onChange={handleChange("recepient")}
        className={classes.textField}
      />
      <TextField
        label="Subject"
        value={emailData.subject}
        onChange={handleChange("subject")}
        className={classes.textField}
      />
      <TextField
        label="body"
        value={emailData.body}
        onChange={handleChange("body")}
        className={classes.textField}
      />
      <Button
        disabled={
          !emailData.sender ||
          !emailData.recepient ||
          !emailData.body ||
          !emailData.subject
        }
        onClick={() => handleSendEmail(emailData, onSuccess)}
      >
        Send Email
      </Button>
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "30px 20px",
    },
    textField: {
      margin: "20px 0",
    },
  })
);

export default EmailsForm;
