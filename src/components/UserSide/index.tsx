import React from 'react'
import { ReactElement } from 'react'
import { UserPropTypes } from './types'

import Card from '../Card'

const UserSide = ({
        email,
        name,
        phone,
        username,
        website,
        address,
        company
    }: UserPropTypes): ReactElement => (
    <div className="w-full space-y-4 md:w-3/12 md:mx-2">
        <div className="bg-white p-3 border-t-4 border-green-400">
          <div className='mb-8'>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              {name}
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              {username}
            </h3>
          </div>
          <div>
            <h4 className='font-bold'>Personal</h4>
            <ul
              className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span className='font-bold'>Email</span>
                <span className="ml-auto">{email}</span>
              </li>
              <li className="flex items-center py-3">
                <span className='font-bold'>Phone</span>
                <span className="ml-auto">{phone}</span>
              </li>
              <li className="flex items-center py-3">
                <span className='font-bold'>Website</span>
                <span className="ml-auto">{website}</span>
              </li>
            </ul>
          </div>
        </div>
        <Card 
          title="Company"
          list={[
            {
              title: 'Name',
              value: company.name
            },
            {
              title: 'catchPhrase',
              value: company.catchPhrase
            },
            {
              title: 'BS',
              value: company.bs
            }
          ]}
        />
        <Card 
          title="Address"
          list={[
            {
              title: 'Street',
              value: address.street
            },
            {
              title: 'Suite',
              value: address.suite
            },
            {
              title: 'City',
              value: address.city
            },
            {
              title: 'Zipcode',
              value: address.zipcode
            },
            {
              title: 'Geo',
              value: 'lat: '+address.geo.lat+' / lng: '+address.geo.lng
            }
          ]}
        />
    </div>
)

export default UserSide