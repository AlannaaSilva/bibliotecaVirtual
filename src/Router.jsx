
import { Routes, Route} from "react-router-dom";
import { Library } from "./components/Library";
import * as React from 'react';


export function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Library />} />
      </Routes>
    </div>
  );
}
