/*SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
LEFT JOIN Orders
ON Persons.Id_P=Orders.Id_P
ORDER BY Persons.LastName
*/
import db from './connect';
	async function searchNews(){
				let data=db.query('SELECT tb_policy.title,tb_announcement.startdate,tb_announcement.enddate,tb_announcement.conditions FROM tb_announcement LEFT JOIN tb_policy ON tb_policy.id=tb_announcement.policyid')
	 				.spread((rows)=>{
	 				return rows;
		 		});
				return data;
	}

export default searchNews
