import React, { lazy,Component,Suspense} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const Apage = lazy(() => import('../pages/Apage/apage.jsx'));
const Bpage = lazy(() => import('../pages/Bpage/bpage.jsx'));

const routeList = [
  {
    path: '/',
    title: 'a页面',
    element: <Apage />
  },
  {
    path: '/bpage',
    title: 'b页面',
    element: <Bpage />
  }
];

//这个错误的页面先不要
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error or send it to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <Router>
      {/* <ErrorBoundary> */}
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          {routeList.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={page.element}
            />
          ))}
      </Routes>
      </Suspense>
      {/* </ErrorBoundary> */}
    </Router>
  );
}
