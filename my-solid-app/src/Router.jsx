import { Routes, Route } from '@solidjs/router';
import App from './App';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" component={App} />
    </Routes>
  );
}
