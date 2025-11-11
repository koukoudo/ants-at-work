import React from "react";

interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage?: string;
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
        return { hasError: true, errorMessage: error instanceof Error ? error.message : String(error) };
    }

    componentDidCatch(error: unknown, errorInfo: unknown) {
        // eslint-disable-next-line no-console
        console.error("ErrorBoundary caught error:", error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <div className="w-full min-h-screen flex items-center justify-center bg-white text-[#030303] p-8">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
                        {this.state.errorMessage && (
                            <p className="text-sm text-gray-600">{this.state.errorMessage}</p>
                        )}
                        <div className="mt-4">
                            <a href="/" className="text-blue-600 underline">Go home</a>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}



