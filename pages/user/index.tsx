import useSwr from 'swr';
import { useSwrFetcherWithAccessToken } from '@/functions/useSwrFetcherWithAccessToken';
import { GetUserOffsetPaginationModel, OffsetPaginationResponse } from '@/functions/swagger/PostGreWithMarvelBackEnd';
import { WithDefaultLayout } from '@/components/DefautLayout';
import { Title } from '@/components/Title';
import { Page } from '@/types/Page';
import { Alert } from 'antd';
import { useState } from 'react';

const UserTableRow: React.FC<{
    user: GetUserOffsetPaginationModel
}> = ({ user }) => {

    return (
        <tr>
            <td className="border px-4 py-2">{user.id}</td>
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.email}</td>
        </tr>
    );
}

const IndexPage: Page = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const swrFetcher = useSwrFetcherWithAccessToken();
    const { data, error } = useSwr<OffsetPaginationResponse>(`/api/be/api/User/offset-pagination?limit=3&offset=${pageIndex}`, swrFetcher);

    const handleNextClick = () => {
        setPageIndex(pageIndex + 1);
    };

    const handlePrevClick = () => {
        setPageIndex(pageIndex - 1);
    };

    return (
        <div>
            <Title>Manage User</Title>
            {Boolean(error) && <Alert type='error' message='Cannot get user data' description={String(error)}></Alert>}
            <table className='table-auto mt-5'>
                <thead className='bg-slate-700 text-white'>
                    <tr>
                        <th className='px-4 py-2'>Id</th>
                        <th className='px-4 py-2'>Username</th>
                        <th className='px-4 py-2'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.users?.map((x, i) => <UserTableRow key={i} user={x}></UserTableRow>)}
                </tbody>
            </table>
            <div className="mt-2">
                <p className='font-bold'>Total = {data?.totalData}</p>
            </div>
            <div className="space-x-40">
                <button onClick={handlePrevClick} className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" type="button">
                    Previous
                </button>
                <button onClick={handleNextClick} className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" type="button">
                    Next
                </button>
            </div>

        </div>
    );
}

IndexPage.layout = WithDefaultLayout;
export default IndexPage;