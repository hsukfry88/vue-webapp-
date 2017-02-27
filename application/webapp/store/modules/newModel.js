import * as types from '../mutation-type';
import axios from 'axios';

const state={
		newsData:[],
		type:'',
		start:''
}
const getters={
	mypolicy:(state,getters)=>{
		return state.newsData;
	}
}

const actions = {
	getPolicy({commit,state},requets){
		axios.get(requets.http).then((response)=>{
			const news=response.data;
			commit(types.RECEIVE_POLICY,{data:news.data,type:requets.type,start:requets.start});
		})
	},
	loaderMore({commit,state},requets){
		requets=`${requets}/${Number(state.type)}/10/${Number(state.start)+10}`;
		console.log(requets);
		axios.get(requets).then((response)=>{
			const news=response.data;
			//console.log(data);
			commit(types.CONNACT_POLICY,news.data);
		})
	}
}
const mutations={
	[types.RECEIVE_POLICY](state,news){
		state.newsData =news.data;
		state.type=news.type;
		state.start=news.start;
		console.log(state);
	},
	[types.CONNACT_POLICY](state,news){
		state.type=Number(state.type);
		state.start=Number(state.start+10);
		state.newsData=state.newsData.concat(news)
	}
} 

export default {
	state,
	getters,
	actions,
	mutations
}