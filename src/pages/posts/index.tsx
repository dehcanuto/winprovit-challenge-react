import React, { useEffect, useState } from 'react'

import PostCard from '../../components/PostCard'
import UserSide from '../../components/UserSide'
import { PostPropTypes, UserPropTypes } from '../../components/UserSide/types'

function PostsPage() {
  const [users, setUsers] = useState<UserPropTypes[]>([])
  const [userSingle, setUserSingle] = useState<UserPropTypes>()
  const [userPosts, setUserPosts] = useState<PostPropTypes[]>()
  const [error, setError] = useState<boolean>(false)

  const changeUser = (id: number) => {
    console.log(id)
    const single = users.find((item: UserPropTypes) => item.id === id)
    setUserSingle(single)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async response => response.json())
      .then(async data => {
        setUsers(data)
        setUserSingle(data[0])
        setError(false)
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError(true)
      })
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(async response => response.json())
      .then(async data => {
        const posts = data.filter((item: PostPropTypes) => item.userId === userSingle?.id)
        setUserPosts(posts)
        setError(false)
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError(true)
      })
  }, [userSingle])

  return (
    <div className="h-full min-h-screen bg-gray-100">
      <div className="container mx-auto p-5">
        <div className="md:flex no-wrap md:-mx-2">
          {!error && userSingle && (
            <UserSide {...userSingle}/>
          )}
          <div className="w-full space-y-4 md:w-9/12 mx-auto">
            {error && (
              <div className="bg-red-50 border-l-8 border-red-900 mb-2">
                <div className="flex items-center">
                  <div className="flex flex-col items-center p-4">
                      <h5 className="text-red-900 font-semibold text-lg text-center sm:texl-left">
                        Something wrong has happen. Sorry about that! Please try again.
                      </h5>
                  </div>
                </div>
            </div>
            )}
            <div className="bg-green-400 p-3 shadow-lg rounded-lg">
              <label htmlFor="countries" className="text-black font-bold leading-8 my-1">
                Choice a user
              </label>
              <select
                onChange={x => changeUser(+x.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Selecione um usuário</option>
                {users.map((user: UserPropTypes) => (
                  <option value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className='sm:col-span-2'>
                <h3 className='font-bold text-xl'>
                  User Posts
                </h3>
              </div>
              {error && (
                <div className='items-center'>
                  <h4>No Results.</h4>
                </div>
              )}
              {userPosts?.map((item: PostPropTypes) => 
                <PostCard
                  id={item.id}
                  title={item.title}
                  body={item.body}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsPage;
