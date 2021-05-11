import React, { useEffect, useState } from "react";

import { containerBuilder } from "./app.container";

// import { Theme } from "app/shared";
import { AppRouter } from "./shared";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await containerBuilder();
      setLoading(false);
    })();
  }, []);

  return <>{!isLoading && <AppRouter />}</>;
};

export default App;
