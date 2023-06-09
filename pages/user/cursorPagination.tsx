import useSwr from 'swr';
import { useSwrFetcherWithAccessToken } from '@/functions/useSwrFetcherWithAccessToken';
import { CursorPaginationModel, CursorPaginationResponse } from '@/functions/swagger/PostGreWithMarvelBackEnd';
import { WithDefaultLayout } from '@/components/DefautLayout';
import { Title } from '@/components/Title';
import { Page } from '@/types/Page';
import { Alert } from 'antd';
import { useState } from 'react';
//import axios from 'axios';

const UserTableRow: React.FC<{
    user: CursorPaginationModel
}> = ({ user }) => {

    // async function fetchImage(){
    //     const responseUrl = await axios.get<string>(`/api/be/api/Blob?fileName=${user.blobId}`);
    //     return responseUrl.then((resp) =>{
    //         resp.data;
    //     } )
    //     return responseUrl.data;
    // }

    return (
        <tr>
            <td className="border px-4 py-2">{user.id}</td>
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap border">
                <img className="h-96 w-96 rounded-full" src={`/api/be/api/Blob/redirect?fileName=${user.fileUrl}`} alt="Profile" />
            </td>
        </tr>
    );
}

const IndexPage: Page = () => {
    const [url, setUrl] = useState(`api/User/cursor-pagination?limit=3`);
    const swrFetcher = useSwrFetcherWithAccessToken();
    const { data, error } = useSwr<CursorPaginationResponse>(`/api/be/${url}`, swrFetcher);

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
                        <th className='px-4 py-2'>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.users?.map((x, i) => <UserTableRow key={i} user={x}></UserTableRow>)}
                </tbody>
            </table>
            <div className="space-y-8 space-x-40">
                <button onClick={() => setUrl(data?.prevCursor != null ? data?.prevCursor : "")} className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" type="button">
                    Previous
                </button>
                <button onClick={() => setUrl(data?.nextCursor != null ? data?.nextCursor : "")} className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" type="button">
                    Next
                </button>
            </div>

        </div>
    );
}

IndexPage.layout = WithDefaultLayout;
export default IndexPage;