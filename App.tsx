import { StatusBar } from 'expo-status-bar';
import {  Text, View ,SafeAreaView ,StyleSheet ,Platform , ScrollView} from 'react-native';

import { Dashboard, Login } from './src/screens';
import React ,{FC, useState ,useEffect} from 'react';
import SearchBox from './src/components/searchBox';
import { getFetchData } from './src/api';
import { User } from './src/components/userprofile/user';
import { CardList } from './src/components/userprofile/userCardlist';
    export type UserInfo ={
      avatar_url:string,
      bio:string,
      location:string |number,
      name:string,
      login:string,
      public_repos:string|number
      
    }
const App:FC = ()=> {
  const[data ,setdata] =useState<UserInfo>();
  const[isLoading ,setISLoding] =useState<boolean>(false)
  const search=(searchword:string)=>{
    if(searchword === '')
    {
       
      alert('please provide text!')
      return
    }
    
 
    getFetchData(searchword).then(data =>{
      console.log(data.length)
      setdata(data)
    })

  }

  return (
    <SafeAreaView style={styles.andoridContainerArea} className="flex-1 items-center justify-center bg-amber-100"> 
       
        < ScrollView keyboardShouldPersistTaps='handled'
          className='h-screen p-4 mx-auto'>
             <SearchBox onSearch={search}/>
             {data&& <>
              <User src={data?.avatar_url} login={data?.login} />
              <CardList data={data}/>
             </>}
              
        </ScrollView>       
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default  App

const styles = StyleSheet.create({
  andoridContainerArea:{
   flex:1,
   paddingTop:Platform.OS==="android"? 8:0,
   
  }
})