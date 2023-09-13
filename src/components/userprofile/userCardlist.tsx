import React, { FC } from 'react'
import {View ,Text , Image} from 'react-native'
import { UserInfo } from '../../../App'
type TProps ={
    data:UserInfo
}

/**
 * @author
 * @function 
**/

const Card=({number ,text ,...other} :{number:string|number , text:string , [other:string]:any})=>{
    return (
        <View className='flex flex-row justify-center items-center rounded-md w-36 h-36' {...other}>
            <View>
              <Text className={`text-gray-100 text-[24px] font-semibold`}>{number}</Text>
              <Text className='text-gray-100 font-semibold'>{text}</Text>
            </View>
        </View>
    )
}
export const CardList= ({data}:TProps)=> {
  return (
   <View className='flex flex-row gap-5 items-center flex-wrap my-5'>
     <Card 
     text='Public repo' number={data?.public_repos}
     className='bg-amber-300'/>
      <Card 
     text='Public repo' number={data?.location}
     className='bg-amber-400'/>
     <Card 
     text='Public repo' number={(data?.bio)?.length>14 ?`${(data?.bio)?.slice(0,10)}... ` :data?.bio }
     className='bg-amber-800'/>
   </View>
   
  )
 }
/* 
const Container = styled.view`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Title = styled.text`
  font-size: 20;
  line-height: 20;
  border-radius: 20;
  color: green;
  background-color: lightblue;
` */