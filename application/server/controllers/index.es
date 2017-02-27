// var router = require('koa-router')();
// var newsModel=require('../model/getNews');
import koaRouter from 'koa-router';
import jsonBody from 'koa-json-body';
import newsModel from '../model/getNews';
import Declare from '../model/DeclareModel';
import Policy from '../model/PolicyModel';
//import render from 'koa-swig';

const body=jsonBody();
const router=koaRouter();
const PolicyModel=  new Policy();
function CreatRouter(app){
		router.
			get('/index',async (ctx, next) => {
						//ctx.body='hello';
            await ctx.render('index.html', {title:'vue'});
        });
		router
		  .get('/news',async (ctx, next)=>{
		  	let items = await newsModel();
		  	ctx.body={data:items};
		  });


		router.get('/policy/:type/:num/:offset',async(ctx,next)=>{
					let params=ctx.params,
							data=await PolicyModel.SearchAll('tb_policy',params.type,params.num,params.offset);
				ctx.body={data:data};
		});
		//app.use(jsonBody({ limit: '10kb' }));
		router.post('/form',body,async(ctx,next)=>{
				console.log(ctx.request.body.firstParam);
				const DeclareModel=new Declare();
				DeclareModel.addItem('tb_declare',ctx.request.body)
		 })
		app
  	.use(router.routes())
  	.use(router.allowedMethods());
}
module.exports=CreatRouter;