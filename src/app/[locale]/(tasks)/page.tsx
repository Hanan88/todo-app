import { getListTasksMetadata } from '@/app/features/tasks/meta/getListTasksMetadata';
import ListTasksPage from '@/app/features/tasks/pages/ListTasksPage';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getListTasksMetadata();
    return metadata;
}

export default ListTasksPage;
