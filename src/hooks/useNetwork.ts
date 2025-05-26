import { useEffect, useState } from "react";

type TUseNetworkArgs = {
  callback: () => Promise<void>;
};

export const useNetwork = ({ callback }: TUseNetworkArgs) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isReconnecting, setIsReconnecting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const setOnline = async () => {
      setIsReconnecting(true);
      setIsOnline(true);

      await callback();
      if (isMounted) {
        setIsReconnecting(false);
      }
    };

    const setOffline = () => {
      setIsOnline(false);
      setIsReconnecting(false);
    };

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      isMounted = false;
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, [callback]);

  return { isOnline, isReconnecting };
};
