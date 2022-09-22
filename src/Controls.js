import React from 'react'
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from "react";
import { useClient } from "./setting";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Controls = (props) => {
    const client = useClient();
    const { tracks, setStart, setInCall } = props;
    const [trackState, setTrackState] = useState({ video: true, audio: true });
  
    const mute = async (type) => {
      if (type === "audio") {
        await tracks[0].setEnabled(!trackState.audio);
        setTrackState((ps) => {
          return { ...ps, audio: !ps.audio };
        });
      } else if (type === "video") {
        await tracks[1].setEnabled(!trackState.video);
        setTrackState((ps) => {
          return { ...ps, video: !ps.video };
        });
      }
    };
  
    const leaveChannel = async () => {
      await client.leave();
      client.removeAllListeners();
      tracks[0].close();
      tracks[1].close();
      setStart(false);
      setInCall(false);
    };
  


  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          color={trackState.audio ? "primary" : "secondary"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? <MicIcon /> : <MicOffIcon />}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          {trackState.video ? <VideocamIcon /> : <VideocamOffIcon />}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => leaveChannel()}
        >
          Leave
          <ExitToAppIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default Controls