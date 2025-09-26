import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface MainSettingProps {
  open: boolean;
  onClose: () => void;
  userName: string;
  setUserName: (name: string) => void;
}

const MainSetting = ({
  open,
  onClose,
  userName,
  setUserName,
}: MainSettingProps) => {
  const [edit, setEdit] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const handleEdit = () => {
    setTempName(userName);
    setEdit(true);
  };

  const handleSave = () => {
    setUserName(tempName);
    setEdit(false);
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle> Welcome {userName}!</DialogTitle>
      <DialogContent sx={{ minHeight: 200, overflow: "visible" }}>
        <TextField
          fullWidth
          label="Your name"
          variant="outlined"
          margin="normal"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          disabled={!edit}
        />
      </DialogContent>
      <DialogActions>
        {!edit ? (
          <Button onClick={handleEdit}>Edit</Button>
        ) : (
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        )}
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MainSetting;
