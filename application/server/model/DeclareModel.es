import db from './connect';
class Declare {
	constructor() {}
	async addItem(table,body){
		const sql =`INSERT INTO ${table} (company) VALUES ('${body.company}')`;                         
		let  data= await db.query(sql)

	}	
}
export default Declare;