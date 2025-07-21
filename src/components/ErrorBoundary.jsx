import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(`Caught by ErrorBoundary: ${error}, ${errorInfo}`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="text-5xl">Something went wrong!</p>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
