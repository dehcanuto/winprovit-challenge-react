import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

import PostCard from '../../components/PostCard'
import { PostPropTypes, UserPropTypes } from './types'

function PostsPage() {
  const [users, setUsers] = useState<UserPropTypes[]>([])
  const [userSingle, setUserSingle] = useState<UserPropTypes>()
  const [userPosts, setUserPosts] = useState<PostPropTypes[]>()

  const changeUser = (id: number) => {
    console.log(id)
    const single = users.find((item: UserPropTypes) => item.id === id)
    setUserSingle(single)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setUserSingle(data[0])
      })
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const posts = data.filter((item: PostPropTypes) => item.userId === userSingle?.id)
        setUserPosts(posts)
      })
  }, [userSingle])

  return (
    <div className="h-full min-h-screen bg-gray-100">
      <div className="container mx-auto p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full space-y-4 md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className='mb-8'>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {userSingle?.name}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  {userSingle?.username}
                </h3>
              </div>
              <div>
                <h4 className='font-bold'>Personal</h4>
                <ul
                  className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span className='font-bold'>Email</span>
                    <span className="ml-auto">{userSingle?.email}</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span className='font-bold'>Phone</span>
                    <span className="ml-auto">{userSingle?.phone}</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span className='font-bold'>Website</span>
                    <span className="ml-auto">{userSingle?.website}</span>
                  </li>
                </ul>
              </div>
            </div>
            <Card 
              title="Company"
              list={[
                {
                  title: 'Name',
                  value: userSingle?.company.name
                },
                {
                  title: 'catchPhrase',
                  value: userSingle?.company.catchPhrase
                },
                {
                  title: 'BS',
                  value: userSingle?.company.bs
                }
              ]}
            />
            <Card 
              title="Address"
              list={[
                {
                  title: 'Street',
                  value: userSingle?.address.street
                },
                {
                  title: 'Suite',
                  value: userSingle?.address.suite
                },
                {
                  title: 'City',
                  value: userSingle?.address.city
                },
                {
                  title: 'Zipcode',
                  value: userSingle?.address.zipcode
                },
                {
                  title: 'Geo',
                  value: 'lat: '+userSingle?.address.geo.lat+' / lng: '+userSingle?.address.geo.lng
                }
              ]}
            />
          </div>
          <div className="w-full space-y-4 md:w-9/12 mx-2">
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
