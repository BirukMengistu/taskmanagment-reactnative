import React, { FC } from 'react'
import {View ,Text , Image} from 'react-native'

type Props= {
    src:string,
    login:string
}

/**
 * @author
 * @function  User
**/

export const User = ({src,login}:Props) => {
  return (
   <View className='flex flex-row items-center space-x-1 
    border-yellow-100 mt-4 shadow-lg shadow-gray-200'>
        <View className='w-24 h-24 rounded-full'>
                <Image 
            source={{uri:src}}
            className='w-full h-full object-cover rounded-full'/>
        </View>
        <View>
          <Text className='text-[20px] font-semibold text-gray-500 py-3'> {login}</Text>
        
        </View>
     
   </View>
  )
 }

