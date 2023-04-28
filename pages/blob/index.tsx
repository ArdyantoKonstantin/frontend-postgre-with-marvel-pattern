import { WithDefaultLayout } from '@/components/DefautLayout';
import { Title } from '@/components/Title';
import { Page } from '@/types/Page';
import{v4 as uuidv4} from 'uuid';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';

const IndexPage: Page = () => {

    const[imgUrl, setImgUrl] = useState("");

    async function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files) {
            console.log('error: file null');
            return;
        }

        const fileName = files[0]?.name;
        const filetype = files[0]?.type;
        const fileId = uuidv4();
        const response = await axios.get<string>(`/api/be/api/Blob/presigned-put-object?fileName=${fileName}`);
        axios.put(response.data, files[0]);

        axios.post(`/api/be/api/Blob/blob-information?id=${fileId}&fileName=${fileName}&mime=${filetype}`)

        const responseUrl = await axios.get(`/api/be/api/Blob?fileName=${fileName}`);
        setImgUrl(responseUrl.data);

    }

    return (
        <div>
            <Title>File Upload</Title>

            <input type="file" onChange={(e) => handleChange(e)}></input>
            <img src={imgUrl?.toString()} alt=""></img> 
        </div>
    );
}

IndexPage.layout = WithDefaultLayout;
export default IndexPage;
