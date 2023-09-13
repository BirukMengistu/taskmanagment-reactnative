import React, { FC ,useState } from 'react'
import {View ,Text , TextInput ,TouchableOpacity } from 'react-native'

type Props ={
    onSearch : Function
}

/**
 * @author Birdev
 * @function  SearchBox
**/

const SearchBox = ({onSearch}:Props) => {
    const [searchKey, setSearchKey]= useState('')
    const [userName, setUserName]= useState('')
  return (
   <View className='flex flex-row items-center space-x-4 mx-auto mt-5'>
     <TextInput placeholder='Enter Search key ...'
      onChangeText={(text:string)=>setSearchKey(text)}
      className='px-4 py-2 text-[24px] bg-neutral-400/10 
                rounded-md first-letter:border-b-2 border-b-amber-300 shadow-md ' 
     /> 
     <TouchableOpacity
      className='bg-amber-400 px-4 py-2  rounded-md'
     onPress={()=> onSearch(searchKey)}>
           <Text className='text-[24px]'> Search</Text>
     </TouchableOpacity>
     
   </View>
  )
 }
 export default SearchBox



