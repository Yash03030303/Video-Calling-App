import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { id } = useParams();
  const callContainerRef = useRef(null);

  useEffect(() => {
    const setupMeeting = async () => {
      const appID = 1953489713;
      const serverSecret = "7b07722d3db4881748ebe110f9d4faf6";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "cipherpealbyyd");

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: callContainerRef.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `http://localhost:5173/room/${id}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // 1-on-1 calls
        },
        showScreenSharingButton: true,
      });
    };

    if (callContainerRef.current) {
      setupMeeting();
    }
  }, [id]);

  return (
    <div
      className="myCallContainer"
      ref={callContainerRef}
      style={{ width: '100%', height: '100vh' }} // Ensure the container has proper dimensions
    ></div>
  );
};

export default Room;
