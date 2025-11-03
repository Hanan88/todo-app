import type { Metadata } from 'next';

export async function getListTasksMetadata(): Promise<Metadata> {
    // ----------------------------------------------------------------------------------------------------
    // MARK: SEO Metadata
    // ----------------------------------------------------------------------------------------------------
    return {
        title: 'Todo-App',
        description: 'Todo-App for managing tasks',
        keywords: 'Todo-App for SEO',
        openGraph: {
            title: 'Todo-App',
            description: 'Todo-App for managing tasks',
            type: 'website',
            siteName: 'Todo-App',
        },
    };
}
