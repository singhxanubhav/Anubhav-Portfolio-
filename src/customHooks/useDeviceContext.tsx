import { useEffect, useState } from "react";
import { Idevice } from "@/utils/types/Idevice";

const useDeviceContext = (): Idevice => {
  // Function to determine device type based on window width
  const currentDevice = (): Idevice => {
    if (typeof window !== "undefined") {
      return {
        isMobile: window.innerWidth <= 767,
        isTablet: window.innerWidth > 767 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024
      };
    }
    // Default values for server-side rendering or initial load
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true
    };
  };

  // State to hold the device type
  const [device, setDevice] = useState<Idevice>(currentDevice);

  // Update device state on window resize
  const updateDevice = () => {
    setDevice(currentDevice());
  };

  // Set up event listener for window resize and clean up
  useEffect(() => {
    updateDevice(); // Set initial device state
    window.addEventListener("resize", updateDevice);
    return () => {
      window.removeEventListener("resize", updateDevice);
    };
  }, []);

  return device;
};

export default useDeviceContext;
