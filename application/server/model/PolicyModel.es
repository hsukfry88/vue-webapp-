import db from './connect';
class PolicyModel {
	constructor() {}
	async SearchAll(table,type,num,starts){
		const sql =`SELECT * FROM ${table} where type=${type} limit ${num} OFFSET ${starts}`;
		let  data= await db.query(sql).spread((rows)=>{
	 				return rows;
		 		});
		//console.log(data);
		return data;
	}	
}
export default PolicyModel;