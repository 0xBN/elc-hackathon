import React, { useState, useRef } from 'react';

type Props = {
  video: boolean;
};

function CameraCapture({ video }: Props) {
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setVideoStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const stopCapture = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => {
        track.stop();
      });
      setVideoStream(null);
    }
  };

  return (
    <div>
      <button type="button" onClick={startCapture}>
        Start capture
      </button>
      <button type="button" onClick={stopCapture}>
        Stop capture
      </button>
      <video ref={videoRef} width={640} height={480} />
    </div>
  );
}

CameraCapture.defaultProps = {
  video: true,
};

export default CameraCapture;
