import { useEffect, useState } from 'react';

export default function Route({ path, children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
  });

  return currentPath === path ? children : null;
}
