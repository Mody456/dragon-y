import Sidebar from '@/Components/Sidebar';
import React from 'react';
import Head from 'next/head';
import Trending from '@/Components/Trending';
import SinglePost from '@/Components/SinglePost';
import { AppContext } from '@/contexts/AppContext';
import { useContext } from 'react';
import Modal from '@/Components/Modal';

const PostPage = () => {
  
  const [appContext] = useContext(AppContext);

  return (
    <div>
       <Head>
            <title>Dragon</title>
            <meta name="description" content="generated by next app" />
            <link rel="shortcut icon" href="/dragon.png" />
      </Head>

      <main className='relative max-w-[1400px] mx-auto'>
            <Sidebar />
            <div className='flex gap-6'>
              <SinglePost />
              <Trending />
              {appContext?.isModalOpen && <Modal />}
            </div>
         
      </main>  

    </div>
  )
}

export default PostPage
