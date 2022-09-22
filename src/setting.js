import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";



const appId = "69498ccf830d46a7953ff3571d249974";
const token = "007eJxTYPhYwVykfOL21Ycu/ktmN7P5nJi68v0en3ytyB330lWn6L1UYDCzNLG0SE5OszA2SDExSzS3NDVOSzM2NTdMMTKxtDQ32Sytk2ycq5v8avlGZkYGCATxWRhyEzPzGBgAnjMg0g=="

export const config = {mode: "rtc", codec: "vp8",appId:appId,token:token}


export const useClient = createClient(config);

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelName = 'main'