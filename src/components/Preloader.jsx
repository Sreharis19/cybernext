import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Wait for window load or fallback delay
    const handleLoad = () => setVisible(false);

    window.addEventListener('load', handleLoad);

    // Fallback: hide after 2 seconds if event doesn't fire (local dev, etc.)
    const fallback = setTimeout(() => setVisible(false), 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  return visible ? <div id="preloader"></div> : null;
};

export default Preloader;
