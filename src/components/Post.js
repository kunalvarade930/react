import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function Post() {
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    //  let pages=null;
    //  let title=null;
    //  let body=null;
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(() => {
                alert('error')
            })

    }, []);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = posts.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(posts.length / recordsPerPage)
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <div className='continer'>
                            <div className='col'>
                                <Pagination

                                    posts={posts}
                                    nPages={nPages}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div>
                        </div>

                    </div>
                    <div className='col-10'>
                        <Outlet />
                    </div>

                </div>
            </div>




        </>


    )
}




export default Post
