import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen py-32 px-4 relative overflow-hidden dark:bg-[#0f172a] transition-colors duration-500 flex items-center justify-center">
          {/* Enhanced background elements */}
          <div className="absolute inset-0 bg-grid-primary/[0.02] dark:bg-grid-primary/[0.01] -z-1" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-primary),0.01)] to-transparent dark:via-[rgba(var(--color-primary),0.02)]" />

          {/* Subtle noise texture */}
          <div className="absolute inset-0 noise-overlay opacity-10 dark:opacity-20"></div>

          <div className="max-w-3xl mx-auto relative">
            <div className="flex flex-col items-center text-center">
              {/* Error Icon */}
              <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-[rgba(var(--color-primary),0.1)] dark:bg-[rgba(var(--color-primary),0.2)] rounded-full animate-pulse-slow"></div>
                <Icon
                  icon="lucide:alert-triangle"
                  className="text-5xl text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] animate-floating-3d"
                />
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.5)] to-transparent rounded-full mb-8" />

              <h2 className="text-3xl font-bold mb-4 text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)]">
                Something Went Wrong
              </h2>

              <p className="text-xl text-default-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-6">
                We're sorry, but an error occurred while rendering this page.
              </p>

              {/* Error details for developers */}
              <div className="w-full mb-8 overflow-auto max-h-[200px] text-left bg-[rgba(var(--color-primary),0.05)] dark:bg-[rgba(var(--color-primary),0.1)] p-4 rounded-lg">
                <p className="font-mono text-sm text-default-700 dark:text-gray-300">
                  {this.state.error && this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <details className="mt-2">
                    <summary className="text-sm text-default-600 dark:text-gray-400 cursor-pointer">
                      Stack trace
                    </summary>
                    <pre className="mt-2 text-xs text-default-600 dark:text-gray-400 whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="px-6 py-4 bg-[rgba(var(--color-primary),0.9)] dark:bg-[rgba(var(--color-primary),0.8)] text-white hover:bg-[rgba(var(--color-primary),1)] dark:hover:bg-[rgba(var(--color-primary),0.9)] button-3d relative overflow-hidden"
                  onClick={() => window.location.reload()}
                  startContent={<Icon icon="lucide:refresh-cw" />}
                >
                  <span className="relative z-10">Reload Page</span>
                </Button>

                <Link to="/">
                  <Button
                    size="lg"
                    variant="bordered"
                    className="px-6 py-4 border border-[rgba(var(--color-primary),0.2)] dark:border-[rgba(var(--color-primary),0.3)] text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] hover:bg-[rgba(var(--color-primary),0.04)] dark:hover:bg-[rgba(var(--color-primary),0.15)] relative overflow-hidden"
                    startContent={<Icon icon="lucide:home" />}
                  >
                    <span className="relative z-10">Back to Home</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
