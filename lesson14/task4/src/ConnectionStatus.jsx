import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState({ connectStatus: 'online' });
  useEffect(() => {
    const connectStatusHandle = e => {
      setStatus({ connectStatus: e.type });
    };
    window.addEventListener('offline', connectStatusHandle);
    window.addEventListener('online', connectStatusHandle);

    return () => {
      window.removeEventListener('offline', connectStatusHandle);
      window.removeEventListener('online', connectStatusHandle);
    };
  });

  const { connectStatus } = status;
  return (
    <div className={connectStatus === 'online' ? 'status' : 'status status_offline'}>
      {connectStatus}
    </div>
  );
};

export default ConnectionStatus;
