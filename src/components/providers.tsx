'use client';

import { ProgressProvider } from '@bprogress/next/app';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProgressProvider
            height="3px"
            color="#06b6d4"
            options={{ showSpinner: true }}
            shallowRouting
        >
            {children}
        </ProgressProvider>
    );
};

export default Providers;