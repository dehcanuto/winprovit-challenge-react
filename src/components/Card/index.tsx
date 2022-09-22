import React from 'react';
import { ReactElement } from 'react';
import { CardPropTypes, List } from './types';

const Card = ({title, list}: CardPropTypes): ReactElement => (
    <div className="bg-white p-3">
        <div>
            <h4 className='font-bold'>
                {title}
            </h4>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                {list.map((item: List) => (
                    <li className="flex items-center py-3">
                        <span className='font-bold'>{item.title}</span>
                        <span className="ml-auto text-right">{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default Card